import { fingerPaint } from "../fonts";

export default function Gallery() {
    return (
        <>
            <div className={`h-full w-full`}>
                {/* Centered Title and Subtitle */}
                <div className={`absolute flex flex-col flex-1 items-center justify-center h-full w-full gap-6 sm:gap-7 md:gap-8`}>
                    <h1 className={`${fingerPaint.className} text-primary text-4xl sm:text-5xl md:text-6xl`}>
                        Gallery
                    </h1>
                    <h2 className={`${fingerPaint.className} text-secondary text-md sm:text-lg md:text-xl w-1/2 sm:w-1/3 text-center`}>
                        A collection of my work, some personal, and some from academic projects.
                    </h2>
                </div>

                {/* Polaroid Images */}
                <div>
                    
                </div>
            </div>
        </>
    );
}