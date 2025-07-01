import Link from "next/link";
import { cn } from "@/lib/utils"

export default function Navbar() {
    return (
        <nav className={cn(
            "w-full max-w-[350px] sm:max-w-full overflow-x-hidden m-auto my-2 px-4 sm:px-10 flex flex-col sm:flex-row h-20 justify-center sm:justify-between items-center gap-2 sm:gap-0 rounded-base border-2 border-border bg-main"
        )}>
            <Link href='/'>
                <h1 className="text-3xl font-bold">Cindy&apos;s Cookbook</h1>
            </Link>
            <Link href='/about'>
                <h1 className="text-lg font-semibold hover:underline">About</h1>
            </Link>
        </nav>
    )
}