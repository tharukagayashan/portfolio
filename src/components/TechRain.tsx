import React, { useEffect, useMemo, useRef } from "react";
import androidStudio from "../assets/techlogo/android-studio.png";
import backendDevelopment from "../assets/techlogo/backend-development.png";
import cpp from "../assets/techlogo/c++.png";
import c from "../assets/techlogo/c-programming.png";
import css from "../assets/techlogo/css3.png";
import github from "../assets/techlogo/github.png";
import html from "../assets/techlogo/html.png";
import java from "../assets/techlogo/java.png";
import javascript from "../assets/techlogo/javascript.png";
import mui from "../assets/techlogo/material-ui.png";
import oracle from "../assets/techlogo/oracle.png";
import python from "../assets/techlogo/python.png";
import restapi from "../assets/techlogo/rest-api.png";
import tomcat from "../assets/techlogo/tomcat.png";
import typescript from "../assets/techlogo/typescript.png";
import vscode from "../assets/techlogo/visual-studio-code.png";
import nodejs from "../assets/techlogo/nodejs.png";
import reactjs from "../assets/techlogo/react.png";
import expressjs from "../assets/techlogo/express-js.png";
import mongodb from "../assets/techlogo/mongodb.png";
import docker from "../assets/techlogo/docker.png";
import kubernetes from "../assets/techlogo/kubernetes.png";
import intellij from "../assets/techlogo/intellij-idea.png";
import postgresql from "../assets/techlogo/postgresql.png";
import springboot from "../assets/techlogo/spring-boot.png";

type TechRainProps = {
    className?: string;
    density?: number;
    speed?: number;
    opacity?: number;
    minSize?: number;
    maxSize?: number;
};

type IconItem = { key: string; src: string };

type Drop = {
    x: number;
    y: number;
    vy: number;
    size: number;
    drift: number;
    rot: number;
    rotSpeed: number;
    img: HTMLImageElement;
};

export default function TechRain({
    className,
    density = 25,
    speed = 0.1,
    opacity = 0.35,
    minSize = 22,
    maxSize = 48,
}: TechRainProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const rafRef = useRef<number | null>(null);

    const iconList = useMemo<IconItem[]>(
        () => [
            { key: "node", src: nodejs },
            { key: "js", src: javascript },
            { key: "ts", src: typescript },
            { key: "react", src: reactjs },
            { key: "java", src: java },
            { key: "android", src: androidStudio },
            { key: "backend", src: backendDevelopment },
            { key: "cpp", src: cpp },
            { key: "c", src: c },
            { key: "css", src: css },
            { key: "html", src: html },
            { key: "mui", src: mui },
            { key: "oracle", src: oracle },
            { key: "python", src: python },
            { key: "rest", src: restapi },
            { key: "tomcat", src: tomcat },
            { key: "vscode", src: vscode },
            { key: "github", src: github },
            { key: "spring", src: springboot },
            { key: "postgres", src: postgresql },
            { key: "mongo", src: mongodb },
            { key: "docker", src: docker },
            { key: "k8s", src: kubernetes },
            { key: "express", src: expressjs },
            { key: "intellij", src: intellij },
        ],
        []
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
        if (reduced) return;

        let w = 0;
        let h = 0;
        let dpr = Math.min(window.devicePixelRatio || 1, 2);

        const rand = (min: number, max: number) => min + Math.random() * (max - min);

        const images: HTMLImageElement[] = [];
        let cancelled = false;

        const loadAll = async () => {
            const loaded = await Promise.all(
                iconList.map(
                    (it) =>
                        new Promise<HTMLImageElement>((resolve) => {
                            const img = new Image();
                            img.onload = () => resolve(img);
                            img.onerror = () => resolve(img);
                            img.src = it.src;
                        })
                )
            );
            if (!cancelled) images.push(...loaded);
        };

        let drops: Drop[] = [];

        const pickImage = () => images[Math.floor(Math.random() * images.length)];

        const makeDrop = (initial = false): Drop => {
            const size = Math.round(rand(minSize, maxSize));
            const img = pickImage();
            return {
                x: rand(0, w),
                y: initial ? rand(-h, h) : -size - rand(10, 250),
                vy: rand(0.7, 2.0) * speed,
                size,
                drift: rand(-0.35, 0.35),
                rot: rand(0, Math.PI * 2),
                rotSpeed: rand(-0.004, 0.004),
                img,
            };
        };

        const resize = () => {
            const parent = canvas.parentElement;
            const rect = parent ? parent.getBoundingClientRect() : canvas.getBoundingClientRect();
            w = Math.max(1, Math.floor(rect.width));
            h = Math.max(1, Math.floor(rect.height));
            dpr = Math.min(window.devicePixelRatio || 1, 2);

            canvas.width = Math.floor(w * dpr);
            canvas.height = Math.floor(h * dpr);
            canvas.style.width = `${w}px`;
            canvas.style.height = `${h}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const count = Math.max(12, Math.floor((w / 600) * density));
            if (images.length > 0) drops = new Array(count).fill(0).map(() => makeDrop(true));
        };

        let last = performance.now();

        const step = (now: number) => {
            const dt = Math.min(32, now - last);
            last = now;

            ctx.clearRect(0, 0, w, h);

            ctx.save();
            ctx.globalAlpha = 0.08;
            const grd = ctx.createRadialGradient(w * 0.5, h * 0.45, 10, w * 0.5, h * 0.5, Math.max(w, h) * 0.7);
            grd.addColorStop(0, "rgba(255,255,255,0.10)");
            grd.addColorStop(1, "rgba(255,255,255,0.00)");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, w, h);
            ctx.restore();

            for (let i = 0; i < drops.length; i++) {
                const d = drops[i];

                d.y += d.vy * (dt / 16);
                d.x += d.drift * (dt / 16);
                d.rot += d.rotSpeed * dt;

                if (d.y > h + 120) drops[i] = makeDrop(false);
                if (d.x < -80) d.x = w + 40;
                if (d.x > w + 80) d.x = -40;

                ctx.save();
                ctx.globalAlpha = opacity;

                ctx.shadowBlur = 14;
                ctx.shadowColor = "rgba(255,255,255,0.18)";

                ctx.translate(d.x, d.y);
                ctx.rotate(d.rot);

                if (d.img && d.img.complete && d.img.naturalWidth > 0) {
                    const s = d.size;
                    ctx.drawImage(d.img, -s / 2, -s / 2, s, s);
                }

                ctx.restore();
            }

            rafRef.current = requestAnimationFrame(step);
        };

        const onVis = () => {
            if (document.hidden) {
                if (rafRef.current) cancelAnimationFrame(rafRef.current);
                rafRef.current = null;
            } else if (!rafRef.current) {
                last = performance.now();
                rafRef.current = requestAnimationFrame(step);
            }
        };

        (async () => {
            await loadAll();
            resize();
            window.addEventListener("resize", resize);
            document.addEventListener("visibilitychange", onVis);
            rafRef.current = requestAnimationFrame(step);
        })();

        return () => {
            cancelled = true;
            window.removeEventListener("resize", resize);
            document.removeEventListener("visibilitychange", onVis);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [iconList, density, speed, opacity, minSize, maxSize]);

    return (
        <div className={className} style={{ position: "relative", width: "100%", height: "100%" }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
