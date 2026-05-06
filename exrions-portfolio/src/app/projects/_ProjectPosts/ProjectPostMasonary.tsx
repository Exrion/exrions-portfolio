'use client'

import matter from "gray-matter";
import { JSX, useEffect, useRef, useState } from "react";
import { getPostData } from "../_Server/PostManager";
import { fingerPaint, geistSans, gloriaHallelujah } from "@/app/fonts";
import { STR_PROJECTPOSTS_ID } from "@/app/_Utilities/constants";

export type ProjectPostMasonaryProps = {
    id: string;
}

export default function ProjectPostMasonary(
    props: ProjectPostMasonaryProps
) {
    const { id } = props;
    const [tagElements, setTagElements] = useState<JSX.Element[]>([]);
    const [tagStrings, setTagStrings] = useState<string[]>([]);
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
        };
    }, []);

    useEffect(() => {
        if (!metadata) return;
        const tagElementsList: JSX.Element[] = [];
        const tagStringsList: string[] = [];
        let count: number = 0;
        metadata.tags?.map((tag: string, index: number) => {
            tagStringsList.push(tag);
            tagElementsList.push(
                <span key={index}>
                    {count > 0 ? ', ' : ''}{tag}
                </span>
            );
            count++;
        });
        setTagElements(tagElementsList);
        setTagStrings(tagStringsList);
    }, [metadata]);

    return (
        <>
            <div
                className={`w-full h-full flex flex-col flex-1 items-center justify-start 
                    border-3 border-secondary hover:border-primary rounded-xs
                    hover:scale-102
                    ease-in-out transition-all duration-150 
                `}
                data-tags={tagStrings}
                id={STR_PROJECTPOSTS_ID}
            >
                <img
                    src={metadata?.thumbnail_url}
                    alt={metadata?.title}
                    loading="lazy"
                    className={`w-full drop-shadow-md`}
                />
                <div
                    className={`
                        flex-col flex-1 items-start justify-start gap-6
                        pl-2 pr-2 pt-2 pb-4
                    `}
                >
                    <div className={`flex flex-col md:flex-row items-start md:items-start justify-start md:justify-between`}>
                        <h3 className={`text-2xl md:text-3xl text-primary-plus ${geistSans.className} text-wrap`}>{metadata?.title}</h3>
                        <p className={`text-md md:text-xl text-secondary ${geistSans.className}`}>{metadata?.date}</p>
                    </div>
                    <p className={`text-lg md:text-xl text-primary ${geistSans.className} text-wrap`}>{metadata?.brief}</p>
                    {/* <div className={`text-xs text-secondary opacity-70 ${geistSans.className}`}>{tagElements}</div> */}
                </div>
            </div >
        </>
    );
}