import { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    ExternalLink,
    Play,
    Users,
    Youtube,
    Flame,
    Eye,
    Video,
    TrendingUp,
    Crown,
    RefreshCw,
} from "lucide-react";

type VideoT = {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
    stats?: { viewCount?: string; likeCount?: string } | null;
};

type PayloadT = {
    channel: {
        title?: string;
        customUrl?: string;
        statistics?: { subscriberCount?: string; videoCount?: string; viewCount?: string };
    };
    latest: VideoT[];
    popular: VideoT[];
    updatedAt: string;
};

const CHANNEL_URL = "https://www.youtube.com/@encode_lab";
const API_URL = "https://encode-lab-youtube.tharuka-gayashan-5.workers.dev/";

const fmt = (n?: string) => {
    if (!n) return "-";
    const num = Number(n);
    if (Number.isNaN(num)) return n;
    return Intl.NumberFormat(undefined, { notation: "compact" }).format(num);
};

const safeDate = (iso?: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
};

export function YouTubeSection() {
    const [data, setData] = useState<PayloadT | null>(null);
    const [loading, setLoading] = useState(true);

    const channelTitle = data?.channel?.title ?? "Encode Lab";
    const subs = data?.channel?.statistics?.subscriberCount;
    const views = data?.channel?.statistics?.viewCount;
    const videos = data?.channel?.statistics?.videoCount;

    const latestTop4 = useMemo(() => (data?.latest ?? []).slice(0, 4), [data]);
    const popularTop4 = useMemo(() => (data?.popular ?? []).slice(0, 4), [data]);

    useEffect(() => {
        let alive = true;

        const load = async () => {
            try {
                setLoading(true);
                const res = await fetch(API_URL);
                const json = (await res.json()) as PayloadT;
                if (alive) setData(json);
            } catch {
                if (alive) setData(null);
            } finally {
                if (alive) setLoading(false);
            }
        };

        load();
        const t = setInterval(load, 10 * 60 * 1000);
        return () => {
            alive = false;
            clearInterval(t);
        };
    }, []);

    return (
        <section id="youtube" className="py-20 lg:py-32 relative">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Title */}
                <div className="text-center mb-10">
                    <p className="text-primary font-medium mb-3 tracking-wide animate-fade-up">Content & Community</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold animate-fade-up stagger-1">
                        YouTube Dashboard
                    </h2>
                </div>

                {/* Header Card */}
                <Card variant="gradient" className="animate-fade-up stagger-2 overflow-hidden">
                    <CardContent className="p-6 sm:p-8">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
                            <div className="flex items-start gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                                    <Youtube className="w-8 h-8 text-primary" />
                                </div>

                                <div>
                                    <div className="flex items-center gap-2 flex-wrap">
                                        <h3 className="text-2xl sm:text-3xl font-display font-bold">{channelTitle}</h3>
                                        <Badge variant="secondary" className="gap-1">
                                            <TrendingUp className="w-4 h-4" />
                                            Live stats
                                        </Badge>
                                        {data?.updatedAt && (
                                            <Badge variant="secondary" className="gap-1">
                                                <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                                                {loading ? "Updating…" : "Updated"}
                                            </Badge>
                                        )}
                                    </div>
                                    <p className="text-muted-foreground mt-1">@encode_lab • {data?.updatedAt ? safeDate(data.updatedAt) : ""}</p>

                                    <div className="mt-4 flex flex-col sm:flex-row gap-3">
                                        <Button asChild className="gap-2">
                                            <a href={CHANNEL_URL} target="_blank" rel="noreferrer">
                                                <Youtube className="w-4 h-4" />
                                                Open Channel
                                                <ExternalLink className="w-4 h-4 opacity-80" />
                                            </a>
                                        </Button>

                                        <Button asChild variant="outline" className="gap-2">
                                            <a href={`${CHANNEL_URL}?sub_confirmation=1`} target="_blank" rel="noreferrer">
                                                Subscribe
                                                <ExternalLink className="w-4 h-4 opacity-80" />
                                            </a>
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* KPI Tiles */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:ml-auto w-full lg:w-auto">
                                <Card className="bg-secondary/40 border-border/50">
                                    <CardContent className="p-5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-muted-foreground">Subscribers</p>
                                            <Users className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-3xl font-display font-bold mt-2">{loading ? "…" : fmt(subs)}</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-secondary/40 border-border/50">
                                    <CardContent className="p-5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-muted-foreground">Total Views</p>
                                            <Eye className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-3xl font-display font-bold mt-2">{loading ? "…" : fmt(views)}</p>
                                    </CardContent>
                                </Card>

                                <Card className="bg-secondary/40 border-border/50">
                                    <CardContent className="p-5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-muted-foreground">Videos</p>
                                            <Video className="w-5 h-5 text-primary" />
                                        </div>
                                        <p className="text-3xl font-display font-bold mt-2">{loading ? "…" : fmt(videos)}</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Panels */}
                <div className="grid lg:grid-cols-2 gap-6 mt-8">
                    {/* Latest */}
                    <Card variant="gradient" className="animate-fade-up stagger-3">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                    <Play className="w-5 h-5 text-primary" />
                                    <h4 className="font-display font-semibold text-xl">Latest Uploads</h4>
                                </div>
                                <Badge variant="secondary">{loading ? "Loading…" : `${latestTop4.length} videos`}</Badge>
                            </div>

                            <div className="space-y-4">
                                {latestTop4.map((v) => (
                                    <a
                                        key={v.id}
                                        href={`https://www.youtube.com/watch?v=${v.id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="relative w-28 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                                            <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/35">
                                                <Play className="w-6 h-6 text-white" />
                                            </div>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-foreground line-clamp-1">{v.title}</p>
                                            <p className="text-sm text-muted-foreground">
                                                {safeDate(v.publishedAt)} • {fmt(v.stats?.viewCount)} views
                                            </p>
                                        </div>

                                        <ExternalLink className="w-4 h-4 text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}

                                {!loading && latestTop4.length === 0 && (
                                    <p className="text-muted-foreground">No videos found.</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Popular */}
                    <Card variant="gradient" className="animate-fade-up stagger-4">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                    <Flame className="w-5 h-5 text-primary" />
                                    <h4 className="font-display font-semibold text-xl">Top Videos</h4>
                                </div>
                                <Badge variant="secondary" className="gap-1">
                                    <Crown className="w-4 h-4" />
                                    By views
                                </Badge>
                            </div>

                            <div className="space-y-4">
                                {popularTop4.map((v, idx) => (
                                    <a
                                        key={v.id}
                                        href={`https://www.youtube.com/watch?v=${v.id}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="group flex gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors"
                                    >
                                        <div className="relative w-28 h-16 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                                            <img src={v.thumbnail} alt={v.title} className="w-full h-full object-cover" loading="lazy" />
                                            <div className="absolute top-2 left-2">
                                                <Badge variant="secondary" className="px-2 py-0.5">
                                                    #{idx + 1}
                                                </Badge>
                                            </div>
                                        </div>

                                        <div className="min-w-0 flex-1">
                                            <p className="font-medium text-foreground line-clamp-1">{v.title}</p>
                                            <p className="text-sm text-muted-foreground">{fmt(v.stats?.viewCount)} views</p>
                                        </div>

                                        <ExternalLink className="w-4 h-4 text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}

                                {!loading && popularTop4.length === 0 && (
                                    <p className="text-muted-foreground">No videos found.</p>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Bottom hint */}
                <div className="mt-6 flex items-center justify-center gap-3 p-4 rounded-xl border border-primary/30 bg-primary/5">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="font-medium text-primary">Encode Lab — Java, Spring Boot, AI integrations & practical dev content</span>
                </div>
            </div>
        </section>
    );
}
