'use client'

import { Frame } from "@masonry-grid/react";

export default function ProjectPostMasonary(
    imgSrc: string,
    title: string,
    briefDescription: string,
    technologiesUsed: string[]
) {
    return (
        <>
            <Frame width={4} height={3}>
                <img src={imgSrc} alt={title} />
                <h3>{title}</h3>
                <p>{briefDescription}</p>
                <div>
                    {technologiesUsed.map((tech, idx) => (
                        <span key={idx}>{tech} </span>
                    ))}
                </div>
            </Frame>
        </>
    );
}