'use client'

import { useState } from "react";
import PullChain from "./_Navbar/pullChain";
import Link from "next/link";
import { gloriaHallelujah } from "../fonts";

export default function Navbar() {
    const [navState, setNavState] = useState<boolean>(false)

    return (
        <div className={`absolute flex flex-col flex-1 items-center justify-start w-full transition-all duration-500 ease-in-out ${navState ? "top-0" : "-top-60"}`}>
            <div className={`flex flex-col flex-1 items-center justify-start w-full`}>
                {/* Nav Menu */}
                <div
                    className={`flex flex-col items-center justify-start w-full`}
                    id="Nav_Menu"
                >
                    <div className={`w-full h-60 z-10 bg-[#FFFDF6] shadow-md`}>
                        <div className={`flex flex-col flex-1 items-center justify-center ${gloriaHallelujah.className} text-primary text-xl gap-6 h-full`}>
                            <Link 
                                href={`/`} 
                                onClick={() => {setNavState(false)}}
                                className={``}
                            >
                                Home
                            </Link>
                            <Link 
                                href={`/about`} 
                                onClick={() => {setNavState(false)}}
                                className={``}
                            >
                                About
                            </Link>
                            <Link 
                                href={`/gallery`} 
                                onClick={() => {setNavState(false)}}
                                className={``}
                            >
                                Gallery
                            </Link>
                            <Link 
                                href={`/showcases`} 
                                onClick={() => {setNavState(false)}}
                                className={``}
                            >
                                Showcases
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Pulldown Drawstring */}
                <div
                    className={`w-full relative z-0`}
                    id="Nav_Drawstring"
                >
                    <PullChain
                        navState={navState}
                        setNavState={setNavState}
                    />
                </div>
            </div>
        </div>
    );
}
