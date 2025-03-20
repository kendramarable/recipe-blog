'use client'
import React, {useState} from 'react';
import { cn } from "@/lib/utils"

interface SearchBarProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export default function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
    return (
        <div>
            <label
                className="font-semibold pl-1" 
                htmlFor="search">Search Recipes</label>
            <input
                id="search"
                className={cn(
                    "flex min-h-[50px] w-full rounded-base border-2 text-text font-base selection:bg-main selection:text-mtext border-border bg-bw px-3 py-2 mb-4 text-sm ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                )}
                placeholder="example: chicken"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
        </div>

    );
}