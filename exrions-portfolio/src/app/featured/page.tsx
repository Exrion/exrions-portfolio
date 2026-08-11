'use client'

import { fingerPaint } from "../fonts";
import DragElements from "@/components/fancy/blocks/drag-elements";
import ProjectPostcard from "./_ProjectPostcards/ProjectPostcard";

const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

export default function Featured() 
{
    const featuredMdFiles: string[] = [
        "EtudeMinervasAir",
        "BrahmWorkshop1"
    ]

    return (
        <>
            <div className={`h-full w-full`}>
                {/* Centered Title and Subtitle */}
                <div className={`absolute flex flex-col flex-1 items-center justify-center h-full w-full gap-6 sm:gap-7 md:gap-8`}>
                    <h1 className={`${fingerPaint.className} text-primary text-4xl sm:text-5xl md:text-6xl`}>
                        Featured
                    </h1>
                    <h2 className={`${fingerPaint.className} text-secondary text-md sm:text-lg md:text-xl w-1/2 sm:w-1/3 text-center`}>
                        A collection of my work, some personal, and some from academic projects.
                    </h2>
                    <p className={`${fingerPaint.className} text-secondary text-sm sm:text-md md:text-lg w-1/2 sm:w-1/3 text-center`}>
                        Drag the polaroid images around to view the projects! Click them to visit the blog posts.
                    </p>
                </div>

                {/* Polaroid Images */}
                <div className={`absolute flex flex-col flex-1 items-center justify-center w-full h-full`}>
                    <DragElements dragMomentum={false} className={``}>
                        {
                            featuredMdFiles.map((mdFileName: string, _: number) => {
                                const rotation = randomInt(-6, 6);
                                return (
                                    <div style={{transform: `rotate(${rotation}deg)`}} suppressHydrationWarning>
                                    <ProjectPostcard 
                                        id={mdFileName}
                                        key={mdFileName}
                                    />
                                    </div>
                                );
                            })
                        }
                    </DragElements>
                </div>
            </div>
        </>
    );
}