'use client'

import { fingerPaint } from '../fonts';
import { BalancedMasonryGrid as MasonaryGrid } from '@masonry-grid/react';
import { getAllPostData } from './_Server/PostManager';
import { useEffect, useState } from 'react';

export default function Projects() {
    const [posts, setPosts] = useState<string[]>([]);

    useEffect(() => {
        let active: boolean = true;
        fetchPosts();
        return () => { active = false; };

        async function fetchPosts() {
            setPosts(undefined as any);
            const data = await getAllPostData();
            if (!active) return;
            setPosts(data);
        };
    }, []);

    return (
        <>
            <h1 className={`text-primary ${fingerPaint.className} text-6xl  text-left w-full`}>My Projects</h1>
            <h2 className={`text-secondary ${fingerPaint.className} text-xl text-left w-full`}>A collection of my proudest projects!</h2>
            <div>
                <MasonaryGrid
                    frameWidth={`200`}
                    gap={`10`}
                >

                </MasonaryGrid>
            </div>
        </>
    );
}