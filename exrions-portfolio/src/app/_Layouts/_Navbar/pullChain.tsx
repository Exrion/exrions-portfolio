'use client'

type PullChainProps = {
    navState: Boolean,
    setNavState: Function
}

export default function PullChain(props: PullChainProps) {
    const { navState, setNavState } = props;

    const handlePull = () => {
        setNavState(!navState);
        // console.log(navState);
    }

    return (
        <>
            <div
                className={`
                    absolute flex flex-col right-10 sm:right-14 md:right-20 w-4 
                    cursor-pointer 
                    ease-in-out duration-300 transition-all 
                    -top-12 ${navState ? "hover:-top-26" : "hover:top-0"} ${navState ? "-top-32" : "-top-12"}`}
                onClick={handlePull}
            >
                <div className={`border-2 sm:border-3 md:border-4 h-40 sm:h-50 md:h-58 border-dotted border-transparent border-l-secondary`} />
                <div className={`w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-secondary rounded-full relative -left-2 sm:-left-3 md:-left-3.5`} />
            </div>
        </>
    );
}