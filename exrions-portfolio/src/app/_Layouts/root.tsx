import { geistSans } from "../fonts";

export default function Root({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`flex flex-col flex-1 items-center justify-between ${geistSans.className} font-sans  text-red-600 caret-transparent`}>
            {children}
        </div>
    );
}
