'use client'

import { use, useState, useEffect, Suspense, useRef, JSX } from "react";
import { getPostData } from "../_Server/PostManager";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { fingerPaint, geistSans } from "@/app/fonts";
import Link from "next/link";
import CenterUnderline from "@/components/fancy/text/underline-center";
import matter from "gray-matter";
import { LuArrowUpToLine } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const [md, setMd] = useState<string>("");
    const [meta, setMeta] = useState<{ [key: string]: any; }>({});
    const [outlineTree, setOutlineTree] = useState<JSX.Element[]>([]);
    const refMarkdown = useRef<HTMLElement>(null);

    useEffect(() => {
        let active: boolean = true;
        fetchPost(slug);
        return () => { active = false; };

        async function fetchPost(id: string) {
            setMd(undefined as any);
            const content = await getPostData(id);
            if (!active) return;
            const matterResult: matter.GrayMatterFile<string> = JSON.parse(content);
            setMd(matterResult.content);
            setMeta(matterResult.data);
        };
    }, []);

    useEffect(() => {
        if (!md || !refMarkdown.current) return;
        const elements = refMarkdown.current.querySelectorAll("h1, h2, h3");
        let outlineElements: JSX.Element[] = [];
        let count: number = 0;
        elements.forEach((ele) => {
            count++;
            switch (ele.tagName) {
                case "H1":
                    outlineElements.push(
                        <li key={count}>
                            <button
                                className={`flex flex-row gap-2 items-start justify-start text-wrap text-left min-h-6 hover:text-primary-plus`}
                                onClick={() => window.scrollTo({ top: ele.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })}
                            >
                                <div className={`flex flex-col flex-1 items-center justify-center h-full`}>
                                    <MdKeyboardArrowRight className={`text-[1.5rem]`} />
                                </div>
                                <span>{ele.textContent}</span>
                            </button>
                        </li>);
                    break;
                case "H2":
                    outlineElements.push(
                        <li key={count}>
                            <button
                                className={`pl-4 flex flex-row gap-2 items-start justify-start text-wrap text-left min-h-6 hover:text-primary-plus`}
                                onClick={() => window.scrollTo({ top: ele.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })}
                            >
                                <div className={`flex flex-col flex-1 items-center justify-center h-full`}>
                                    <MdKeyboardDoubleArrowRight className={`text-[1.5rem]`} />
                                </div>
                                <span>
                                    {"\t" + ele.textContent}
                                </span>
                            </button>
                        </li>);
                    break;
                case "H3":
                    outlineElements.push(
                        <li key={count}>
                            <button
                                className={`pl-16 flex flex-row gap-2 items-start justify-start text-wrap text-left min-h-6 hover:text-primary-plus`}
                                onClick={() => window.scrollTo({ top: ele.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })}
                            >
                                <span>
                                    {"\t" + ele.textContent}
                                </span>
                            </button>
                        </li>);
                    break;
            }
        });
        setOutlineTree(outlineElements);
    }, [md]);

    function DisplayOutline(): JSX.Element {
        if (outlineTree)
            return (
                <>
                    {outlineTree}
                </>
            );
        else
            return (
                <>
                    <p>Error fetching outline</p>
                </>
            );
    }

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
                className={`w-full h-full flex flex-row items-start justify-between gap-16`}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    {/* Left Column */}
                    <div className={`flex flex-col items-start justify-start gap-4 w-full lg:w-4/6`}>
                        <div className={`flex flex-col items-start justify-start gap-2`}>
                            <h3 className={`text-secondary text-sm sm:text-md md:text-lg ${fingerPaint.className}`}>
                                <CenterUnderline underlinePaddingRatio={0.1}><Link href="/">Home</Link></CenterUnderline>
                                &nbsp;&#62;&nbsp;
                                <CenterUnderline underlinePaddingRatio={0.1}><Link href="/projects">Projects</Link></CenterUnderline>
                                &nbsp;&#62;&nbsp;
                                <span className={`text-primary`}>{meta.title}</span>
                            </h3>
                            <h1 className={`text-primary text-4xl sm:text-5xl md:text-6xl ${fingerPaint.className}`}>{meta.title}</h1>
                            <h3 className={`text-secondary text-sm sm:text-md md:text-lg ${fingerPaint.className}`}>{meta.date}</h3>
                        </div>
                        <article
                            className={`
                            prose prose-sm md:prose 
                            prose-headings:font-(family-name:--font-gloria-hallelujah) prose-h1:text-primary-plus prose-h2:text-primary prose-h3:text-secondary
                            w-full h-full`}
                            ref={refMarkdown}
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
                            flex-col flex-1 items-center justify-center 
                        `}
                    >
                        <div
                            className={`
                                fixed
                                flex-col flex-1 items-start justify-start space-y-2
                            `}
                        >
                            <div className={`text-primary text-3xl ${fingerPaint.className}`}>
                                Content
                            </div>
                            <div>
                                <ul className={`list-inside text-secondary text-md ${geistSans.className}`}>
                                    {DisplayOutline()}
                                </ul>
                            </div>
                            <div>
                                <CenterUnderline underlinePaddingRatio={0.1} className={`text-secondary text-sm ${geistSans.className}`}>
                                    <button
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    >
                                        Back to top
                                    </button>
                                </CenterUnderline>
                            </div>
                        </div>
                    </div>

                    {/* Scroll to top */}
                    <div className={`lg:hidden fixed bottom-4 md:bottom-6 right-4 md:right-8`}>
                        <button
                            className={`
                                px-2 md:px-3 py-2 md:py-3 rounded-md flex items-center justify-center
                                bg-primary-plus opacity-80 text-background
                            `}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <LuArrowUpToLine className={`text-[1.5rem] md:text-[1.5rem]`} />
                        </button>
                    </div>
                </Suspense>
            </div>
        </div>
    );
}