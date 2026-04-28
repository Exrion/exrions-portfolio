'use client'
import { fingerPaint, gloriaHallelujah } from "../fonts";
import { useRef } from "react";
import { redirect } from "next/navigation";

export function CheckWithinViewVertical(element: HTMLDivElement, parent: HTMLElement | null): boolean {
    if (element != null) {
        const bound = element.getBoundingClientRect();
        const boundParent = parent?.getBoundingClientRect();
        if (bound != null) {
            if (parent == null) {
                if (bound.top > -0.00001 && bound.bottom > -0.00001)
                    return true;
            }
            else {
                if (boundParent != null) {
                    // console.log(`${element.id}: ${bound.top - boundParent.top}, ${bound.bottom - boundParent.bottom}`);
                    if (bound.top - boundParent.top > -0.00001 && bound.bottom - boundParent.bottom < 0.00001) {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

export function PathFromString(location: string): string {
    switch (location) {
        case "about":
            return "/about"; 
        case "gallery":
            return "/gallery"; 
        case "showcases":
            return "/showcases"; 
        default:
            return "";
    }
}

export default function HomeScrollSelection() {
    const about = useRef<HTMLDivElement>(null);
    const gallery = useRef<HTMLDivElement>(null);
    const showcases = useRef<HTMLDivElement>(null);

    function CheckActiveSelection(): string {
        if (about.current != null && CheckWithinViewVertical(about.current, about.current.parentElement))
            return "about";
        if (gallery.current != null && CheckWithinViewVertical(gallery.current, gallery.current.parentElement))
            return "gallery";
        if (showcases.current != null && CheckWithinViewVertical(showcases.current, showcases.current.parentElement))
            return "showcases";
        return "";
    }

    function HandleContinue() {
        const url: string = PathFromString(CheckActiveSelection());
        if (url != "") {
            redirect(url, "push");
        }
    }

    return (
        <>
            <div></div>
            <div className={`flex flex-col items-center gap-4 sm:gap-12 md:gap-16 mt-25 sm:mt-0`}>
                <div className={`flex flex-row flex-1 justify-start sm:justify-center w-[380px] sm:w-full text-primary-plus`}>
                    <h1 className={`${fingerPaint.className} text-5xl sm:text-center leading-20 whitespace-pre-line md:whitespace-normal`}>
                        Welcome to
                        Cai Xuan's
                        Portfolio
                    </h1>
                </div>
                <div className={`flex flex-row flex-1 items-center justify-center gap-1.5 sm:gap-3 md:gap-4 w-full text-secondary`}>
                    <h2 className={`${gloriaHallelujah.className} text-3xl text-nowrap`}>
                        Let's visit
                    </h2>
                    <div className={`flex flex-row items-center justify-center gap-2 sm:gap-2.5 md:gap-3`}>
                        <h2 className={`${gloriaHallelujah.className} text-[64px]`}>
                            &#123;
                        </h2>
                        <div
                            className={`flex flex-col flex-1 items-center justify-start pt-8 pb-8 ${gloriaHallelujah.className} mask-y-from-60% mask-y-to-100% text-3xl h-25 gap-3 text-primary overflow-auto no-scrollbar scroll-smooth snap-y snap-mandatory`}
                        >
                            <div
                                className={`snap-center snap-always`}
                                ref={about}
                                id="about"
                            >
                                <p>
                                    About
                                </p>
                            </div>
                            <div
                                className={`snap-center snap-always`}
                                ref={gallery}
                                id="gallery"
                            >
                                <p>
                                    Gallery
                                </p>
                            </div>
                            <div
                                className={`snap-center snap-always`}
                                ref={showcases}
                                id="showcases"
                            >
                                <p>
                                    Showcases
                                </p>
                            </div>
                        </div>
                        <h2 className={`${gloriaHallelujah.className} text-[64px]`}>
                            &#125;
                        </h2>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className={`hover:cursor-pointer`}
                    onClick={() => {HandleContinue();}}
                >
                    CONTINUE
                </button>
            </div>
        </>
    );
}