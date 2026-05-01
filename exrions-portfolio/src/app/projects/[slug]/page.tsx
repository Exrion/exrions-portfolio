'use client'

import { use, useState, useEffect, Suspense } from "react";
import { getPostData } from "../_Server/PostManager";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fingerPaint, geistSans, gloriaHallelujah } from "@/app/fonts";
import Link from "next/link";
import CenterUnderline from "@/components/fancy/text/underline-center";

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const [md, setMd] = useState<string>("");

    useEffect(() => {
        let active: boolean = true;
        fetchPost(slug);
        return () => { active = false; };

        async function fetchPost(id: string) {
            setMd(undefined as any);
            const content = await getPostData(id);
            if (!active) return;
            setMd(content);
        };
    }, []);

    return (
        <div className={`
                flex flex-row items-start justify-center
                w-full lg:w-250 h-full 
                pl-4 sm:pl-5 md:pl-6
                pr-4 sm:pr-5 md:pr-6
                pt-8 sm:pt-10 md:pt-12
                pb-12 sm:pb-16 md:pb-20`}
        >
            <div
                key={slug}
                className={`w-full h-full flex flex-row items-start justify-between gap-8`}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    {/* Left Column */}
                    <div className={`flex flex-col items-start justify-start gap-4 w-4/6`}>
                        <div className={`flex flex-col items-start justify-start gap-2`}>
                            <h3 className={`text-secondary text-lg ${fingerPaint.className}`}>
                                <CenterUnderline underlinePaddingRatio={0.1}><Link href="/">Home</Link></CenterUnderline>
                                &nbsp;&#62;&nbsp;
                                <CenterUnderline underlinePaddingRatio={0.1}><Link href="/projects">Projects</Link></CenterUnderline>
                                &nbsp;&#62;&nbsp;
                                <span className={`text-primary`}>{slug.replaceAll("_", " ")}</span>
                            </h3>
                            <h1 className={`text-primary text-6xl ${fingerPaint.className}`}>{slug.replaceAll("_", " ")}</h1>
                        </div>
                        <article
                            className={`
                            prose prose-sm md:prose 
                            prose-headings:font-(family-name:--font-gloria-hallelujah) prose-h1:text-primary-plus prose-h2:text-primary prose-h3:text-secondary
                            w-full h-full`}
                        >
                            <hr />
                            <Markdown remarkPlugins={[remarkGfm]}>
                                {md}
                            </Markdown>
                        </article>
                    </div>

                    {/* Right Column */}
                    <div
                        className={`
                            hidden lg:block
                            flex-col flex-1 items-end justify-center
                        `}
                    >
                        Sidebar
                    </div>
                </Suspense>
            </div>
        </div>
    );
}