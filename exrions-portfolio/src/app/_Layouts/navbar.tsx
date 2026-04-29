'use client'

import { useState } from "react";
import PullChain from "./_Navbar/pullChain";
import Link from "next/link";
import { gloriaHallelujah } from "../fonts";
import CenterUnderline from "@/components/fancy/text/underline-center";
import { STR_INDEX_ROUTE, STR_INDEX_TITLE, STR_LINK1_ROUTE, STR_LINK1_TITLE, STR_LINK2_ROUTE, STR_LINK2_TITLE, STR_LINK3_ROUTE, STR_LINK3_TITLE } from '../_Utilities/constants';

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
                                href={STR_INDEX_ROUTE}
                                onClick={() => { setNavState(false) }}
                                className={``}
                            >
                                <CenterUnderline underlinePaddingRatio={0.1}>
                                    {STR_INDEX_TITLE}
                                </CenterUnderline>
                            </Link>
                            <Link
                                href={STR_LINK1_ROUTE}
                                onClick={() => { setNavState(false) }}
                                className={``}
                            >
                                <CenterUnderline underlinePaddingRatio={0.1}>
                                    {STR_LINK1_TITLE}
                                </CenterUnderline>
                            </Link>
                            <Link
                                href={STR_LINK2_ROUTE}
                                onClick={() => { setNavState(false) }}
                                className={``}
                            >
                                <CenterUnderline underlinePaddingRatio={0.1}>
                                    {STR_LINK2_TITLE}
                                </CenterUnderline>
                            </Link>
                            <Link
                                href={STR_LINK3_ROUTE}
                                onClick={() => { setNavState(false) }}
                                className={``}
                            >
                                <CenterUnderline underlinePaddingRatio={0.1}>
                                    {STR_LINK3_TITLE}
                                </CenterUnderline>
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
