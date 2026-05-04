'use client'

import matter from "gray-matter";
import { JSX, useEffect, useState } from "react";
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
            console.log(matterResult.data);
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
            <img src={metadata?.thumbnailSrc} alt={metadata?.title} loading="lazy" />
            <h3 className={`text-2xl text-primary-plus ${geistSans.className}`}>{metadata?.title}</h3>
            <p className={`text-lg text-primary ${geistSans.className}`}>{metadata?.brief}</p>
            <p className={`text-sm text-secondary ${geistSans.className}`}>{metadata?.date}</p>
            <div className={`text-xs text-secondary opacity-70 ${geistSans.className}`}>
                {tagElements}
            </div>
        </>
    );
}