'use client'

import { fingerPaint, gloriaHallelujah } from "@/app/fonts";
import { getPostData } from "@/app/projects/_Server/PostManager";
import CenterUnderline from "@/components/fancy/text/underline-center";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";

export type ProjectPostcardProps = {
    id: string;
}

export default function ProjectPostcard(
    props: ProjectPostcardProps
) {
    const { id } = props;
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

    if (metadata !== undefined) {
        return (
            <>
                <div className={`
                    shadow-lg bg-card flex flex-col flex-1 items-center justify-center p-4 text-primary ${fingerPaint.className} 
                    max-w-3xs sm:max-w-sm md:max-w-md xl:max-w-xl
                    space-y-2 sm:space=y=3 md:space-y-4`}>
                    <img
                        src={metadata?.thumbnail_url}
                        alt={metadata?.title}
                        loading="lazy"
                        className={`w-full drop-shadow-xs pointer-events-none`}
                    />
                    <div className={`flex flex-1 w-full items-center justify-between`}>
                        <div className={`w-1/5`}></div>
                        <p className={`w-3/5 text-xl text-center flex-wrap`}>{metadata.title}</p>
                        <Link
                            href={`/projects/${id}`}
                            draggable={false}
                            className={`w-1/5 text-right ${gloriaHallelujah.className} text-secondary`}
                        >
                            <CenterUnderline>
                                View Post
                            </CenterUnderline>
                        </Link>
                    </div>
                </div>
            </>
        );
    }
    else {
        return (<></>);
    }
}