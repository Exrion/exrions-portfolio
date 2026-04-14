// import Image from "next/image";
import { fingerPaint, geistSans, gloriaHallelujah } from "./layout";

export default function Home() {
  return (
    // #region OG
    // <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    //   <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={100}
    //       height={20}
    //       priority
    //     />
    //     <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
    //       <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
    //         To get started, edit the page.tsx file.
    //       </h1>
    //       <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
    //         Looking for a starting point or more instructions? Head over to{" "}
    //         <a
    //           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Templates
    //         </a>{" "}
    //         or the{" "}
    //         <a
    //           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //           className="font-medium text-zinc-950 dark:text-zinc-50"
    //         >
    //           Learning
    //         </a>{" "}
    //         center.
    //       </p>
    //     </div>
    //     <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
    //       <a
    //         className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={16}
    //           height={16}
    //         />
    //         Deploy Now
    //       </a>
    //       <a
    //         className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Documentation
    //       </a>
    //     </div>
    //   </main>
    // </div>
    // #endregion
    <div className={`flex flex-col flex-1 items-center justify-between ${geistSans.className} font-sans pl-6 pr-6 pt-16 pb-16  text-red-600 caret-transparent`}>
      <div></div>
      <div className={`flex flex-col items-center gap-4 sm:gap-12 md:gap-16 h-full`}>
        <div className={`flex flex-row flex-1 justify-start sm:justify-center w-[380px] sm:w-full text-[#101010]`}>
          <h1 className={`${fingerPaint.className} text-5xl sm:text-center leading-20 whitespace-pre-line md:whitespace-normal`}>
            Welcome to
            Cai Xuan's
            Portfolio
          </h1>
        </div>
        <div className={`flex flex-row flex-1 items-center justify-center gap-1.5 sm:gap-3 md:gap-4 w-full text-[#404040]`}>
          <h2 className={`${gloriaHallelujah.className} text-3xl text-nowrap`}>
            Let's visit
          </h2>
          <h2 className={`${gloriaHallelujah.className} text-[64px]`}>
            &#123;
          </h2>
          <div className={`flex flex-col flex-1 items-center justify-start pt-8 pb-8 ${gloriaHallelujah.className} mask-y-from-60% mask-y-to-100% text-3xl h-25 gap-3 text-[#202020] overflow-auto no-scrollbar scroll-smooth snap-y`}>
            <div className={`snap-center`}>
              <p>
                About
              </p>
            </div>
            <div className={`snap-center`}>
              <p>
                Gallery
              </p>
            </div>
            <div className={`snap-center`}>
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
      <div>
        <button>
          CONTINUE
        </button>
      </div>
    </div>
  );
}
