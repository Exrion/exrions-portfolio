'use client'

import { fingerPaint } from '../fonts';
import { BalancedMasonryGrid as MasonaryGrid } from '@masonry-grid/react';
import { getAllPostIds } from './_Server/PostManager';
import { useEffect, useState } from 'react';
import Link from 'next/link'
import ProjectPostMasonary from './_ProjectPosts/ProjectPostMasonary';

export default function Projects() {
    const [ids, setIds] = useState<string[]>([]);

    useEffect(() => {
        let active: boolean = true;
        fetchPosts();
        return () => { active = false; };

        async function fetchPosts() {
            setIds(undefined as any);
            const ids = await getAllPostIds();
            if (!active) return;
            setIds(ids);
        };
    }, []);

    function renderPosts(): React.ReactNode[] {
        let renderedPosts: React.ReactNode[] = [];

        if (ids) {
            for (let i: number = 0; i < ids.length; i++) {
                renderedPosts.push(
                    <Link
                        href={`/projects/${ids[i]}`}
                        key={ids[i]}
                    >
                        Link to {ids[i]}
                    </Link>
                );
            }
        }
        return renderedPosts;
    }

    return (
        <>
            <div className={`
                flex flex-col flex-1 items-start justify-start 
                h-full w-4/5 
                gap-4 sm:gap-5 md:gap-6
                pl-6 sm:pl-7 md:pl-8
                pr-6 sm:pr-7 md:pr-8
                pt-12 sm:pt-14 md:pt-16
                pb-16 sm:pb-20 md:pb-24`}
            >
                <h1 className={`text-primary ${fingerPaint.className} text-6xl  text-left w-full`}>My Projects</h1>
                <h2 className={`text-secondary ${fingerPaint.className} text-xl text-left w-full`}>A collection of my proudest projects!</h2>
                <div>
                    <MasonaryGrid
                        frameWidth={`200`}
                        gap={`10`}
                    >
                        {renderPosts()}
                    </MasonaryGrid>
                </div>
            </div>
        </>
    );
}