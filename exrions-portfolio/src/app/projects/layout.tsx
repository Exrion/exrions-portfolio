export default function ShowcasesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
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
                {children}
            </div>
        </>
    );
}