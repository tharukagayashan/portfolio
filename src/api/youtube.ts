import type { VercelRequest, VercelResponse } from "@vercel/node";

const API_KEY = process.env.YOUTUBE_API_KEY!;
const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID!; // UC8SqtAn1O5w2tp6IL69QRcA

function setCache(res: VercelResponse) {
    // Cache at edge for 10 min, allow stale while revalidating
    res.setHeader("Cache-Control", "s-maxage=600, stale-while-revalidate=600");
}

async function yt(url: string) {
    const r = await fetch(url);
    if (!r.ok) throw new Error(`YouTube API error: ${r.status}`);
    return r.json();
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    try {
        setCache(res);

        // 1) Channel stats (subscriberCount, videoCount, viewCount)
        const channel = await yt(
            `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${CHANNEL_ID}&key=${API_KEY}`
        );

        // 2) Latest uploads
        const latest = await yt(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=date&type=video&key=${API_KEY}`
        );

        // 3) Most popular uploads (by viewCount, within channel)
        const popular = await yt(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=6&order=viewCount&type=video&key=${API_KEY}`
        );

        // Extract video IDs to fetch statistics (views/likes)
        const ids = Array.from(
            new Set(
                [...latest.items, ...popular.items]
                    .map((i: any) => i.id?.videoId)
                    .filter(Boolean)
            )
        ).join(",");

        const videoStats = ids
            ? await yt(
                `https://www.googleapis.com/youtube/v3/videos?part=statistics,contentDetails&id=${ids}&key=${API_KEY}`
            )
            : { items: [] };

        // Index stats by id
        const statsById: Record<string, any> = {};
        for (const v of videoStats.items || []) statsById[v.id] = v.statistics;

        const payload = {
            channel: {
                id: CHANNEL_ID,
                title: channel.items?.[0]?.snippet?.title,
                description: channel.items?.[0]?.snippet?.description,
                customUrl: channel.items?.[0]?.snippet?.customUrl,
                thumbnails: channel.items?.[0]?.snippet?.thumbnails,
                statistics: channel.items?.[0]?.statistics, // subscriberCount, videoCount, viewCount
            },
            latest: (latest.items || []).map((i: any) => ({
                id: i.id.videoId,
                title: i.snippet.title,
                publishedAt: i.snippet.publishedAt,
                thumbnail: i.snippet.thumbnails?.high?.url ?? i.snippet.thumbnails?.default?.url,
                stats: statsById[i.id.videoId] ?? null,
            })),
            popular: (popular.items || []).map((i: any) => ({
                id: i.id.videoId,
                title: i.snippet.title,
                publishedAt: i.snippet.publishedAt,
                thumbnail: i.snippet.thumbnails?.high?.url ?? i.snippet.thumbnails?.default?.url,
                stats: statsById[i.id.videoId] ?? null,
            })),
            updatedAt: new Date().toISOString(),
        };

        res.status(200).json(payload);
    } catch (e: any) {
        res.status(500).json({ error: e?.message ?? "Unknown error" });
    }
}
