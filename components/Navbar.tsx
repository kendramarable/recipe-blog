import Link from "next/link";
import { cn } from "@/lib/utils"

export default function Navbar() {
    return (
        <nav className={cn(
            "w-full max-w-800 m-auto my-2 pl-10 flex h-20 items-center justify-between space-x-1 rounded-base border-2 border-border bg-main"
        )}>
            <Link href='/'>
                <h1 className="text-3xl font-bold">Cindy's Cookbook</h1>
            </Link>
            <Link href='/about'>
                <h1 className="text-lg font-semibold pr-10 hover:underline">About</h1>
            </Link>
        </nav>
    )
}