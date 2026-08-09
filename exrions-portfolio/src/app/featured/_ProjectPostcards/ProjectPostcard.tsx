'use client'

import { fingerPaint } from "@/app/fonts";
import { getPostData } from "@/app/projects/_Server/PostManager";
import matter from "gray-matter";
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
                <div className={`shadow-lg bg-card flex flex-col flex-1 items-center justify-center p-4 text-primary ${fingerPaint.className} max-w-100 space-y-4`}>
                    <img
                    src={metadata?.thumbnail_url}
                    alt={metadata?.title}
                    loading="lazy"
                    className={`w-full drop-shadow-xs pointer-events-none`}
                />
                    <p className={`text-xl`}>{metadata.title}</p>
                </div>
            </>
        );
    }
    else {
        return (<></>);
    }
}