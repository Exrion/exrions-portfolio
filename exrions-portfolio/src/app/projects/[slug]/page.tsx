'use client'

import { use, useState, useEffect, Suspense } from "react";
import { getPostData } from "../_Server/PostManager";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = use(params);
    const [innerHTML, setInnerHTML] = useState<string>("");

    useEffect(() => {
        let active: boolean = true;
        fetchPost(slug);
        return () => { active = false; };

        async function fetchPost(id: string) {
            setInnerHTML(undefined as any);
            const content = await getPostData(id);
            if (!active) return;
            setInnerHTML(content);
        };
    }, []);

    return (
        <div key={slug}>
            <Suspense fallback={<div>Loading...</div>}>
                <Markdown remarkPlugins={[remarkGfm]}>
                    {innerHTML}
                </Markdown>
            </Suspense>
        </div>
    );
}