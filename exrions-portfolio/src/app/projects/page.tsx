'use client'

import { fingerPaint } from '../fonts';
import { Frame, BalancedMasonryGrid as MasonaryGrid } from '@masonry-grid/react';
import { getAllPostIds } from './_Server/PostManager';
import { useEffect, useState, JSX, lazy, Suspense } from 'react';
import Link from 'next/link'

const ProjectPostMasonary = lazy(() => import('./_ProjectPosts/ProjectPostMasonary'));

export default function Projects() {
    const [ids, setIds] = useState<string[]>([]);
    const [posts, setPosts] = useState<JSX.Element[]>([]);

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

    useEffect(() => {
        let renderedPosts: JSX.Element[] = [];
        if (ids) {
            for (let i: number = 0; i < ids.length; i++) {
                renderedPosts.push(
                    <Frame width={4} height={3} key={ids[i]}>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Link
                                href={`/projects/${ids[i]}`}
                                key={ids[i]}
                            >
                                <div
                                    className={`w-full h-full flex flex-col flex-1 items-start justify-start 
                                        border-2 hover:border-4 border-secondary hover:border-primary rounded-xs
                                        ease-in-out transition-all duration-150 
                                        bg-background
                                        p-4
                                    `}
                                >
                                    <ProjectPostMasonary
                                        id={ids[i]}
                                    />
                                </div>
                            </Link>
                        </Suspense>
                    </Frame>
                );
            }
        }
        setPosts(renderedPosts);
    }, [ids]);

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
                <div className={`w-full h-full overflow-visible`}>
                    <MasonaryGrid
                        frameWidth={`20rem`}
                        gap={`1.5rem`}
                        className={`w-full h-full overflow-visible`}
                    >
                        {posts}
                    </MasonaryGrid>
                </div>
            </div>
        </>
    );
}