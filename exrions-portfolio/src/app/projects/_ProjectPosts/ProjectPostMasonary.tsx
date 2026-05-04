'use client'

import matter from "gray-matter";
import { JSX, useEffect, useRef, useState } from "react";
import { getPostData } from "../_Server/PostManager";
import { fingerPaint, geistSans, gloriaHallelujah } from "@/app/fonts";

export type ProjectPostMasonaryProps = {
    id: string;
}

export default function ProjectPostMasonary(
    props: ProjectPostMasonaryProps
) {
    const { id } = props;
    const [tagElements, setTagElements] = useState<JSX.Element[]>([])
    const [metadata, setMetadata] = useState<{ [key: string]: any; }>({});
    const postParent = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let active: boolean = true;
        fetchPost(id);
        return () => { active = false; };

        async function fetchPost(id: string) {
            setMetadata(undefined as any);
            const content = await getPostData(id);
            if (!active) return;
            const matterResult: matter.GrayMatterFile<string> = JSON.parse(content);
            setMetadata(matterResult.data);
        };
    }, []);

    useEffect(() => {
        if (!metadata) return;
        const tagElementsList: JSX.Element[] = [];
        let count: number = 0;
        metadata.tags?.map((tag: string, index: number) => {
            tagElementsList.push(
                <span key={index}>
                    {count > 0 ? ', ' : ''}{tag}
                </span>
            );
            count++;
        });
        setTagElements(tagElementsList);
    }, [metadata]);

    return (
        <>
            <div
                className={`w-full h-full flex flex-col flex-1 items-start justify-start 
                    border-2 border-secondary rounded-xs
                    ease-in-out transition-all duration-150 
                    bg-black/65
                `}
                ref={postParent}
            >
                {/* Data */}
                <div
                    className={`
                        h-full w-full flex flex-col flex-1 items-start justify-start
                        opacity-0 hover:opacity-100 z-1
                    `}
                >
                    <div className={`
                            flex-col items-start justify-start absolute bg-amber-400 
                            w-[${postParent.current?.getBoundingClientRect().width}px]
                            h-[${postParent.current?.getBoundingClientRect().height}px]
                        `}
                    >
                        <h3 className={`text-2xl text-primary-plus ${geistSans.className} text-wrap`}>{metadata?.title}</h3>
                        <p className={`text-lg text-primary ${geistSans.className} text-wrap`}>{metadata?.brief}</p>
                        <p className={`text-sm text-secondary ${geistSans.className}`}>{metadata?.date}</p>
                        <div className={`text-xs text-secondary opacity-70 ${geistSans.className}`}>
                            {tagElements}
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div
                    className={`
                        w-full h-full flex flex-col flex-1 items-start justify-start 
                    `}
                >
                    <div
                        className={`
                            w-full h-full flex flex-col flex-1 items-start justify-start
                        `}
                    >
                        <img
                            src={metadata?.thumbnail_url}
                            alt={metadata?.title}
                            loading="lazy"
                            className={`mask-b-from-70% mask-b-to-100%`} />
                    </div>
                </div>
            </div>
        </>
    );
}