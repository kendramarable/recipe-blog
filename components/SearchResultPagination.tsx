"use client";

import { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import { cn } from "@/lib/utils"
import SearchBar from "./SearchBar";

type PostMetadata = {
    title: string; 
    prep_time: string; 
    cook_time: string; 
    servings: string; 
    type: string; 
    source: string; 
    slug: string; 
}

export default function SearchResultPagination({postMetadata}: {postMetadata: PostMetadata[]}) {
    const [currentPage, setCurrentPage] = useState(() => {
        if (typeof window !== "undefined") {
        const saved = sessionStorage.getItem("searchPage");
        return saved ? Number(saved) : 1;
        }
        return 1;
    });

    const [searchValue, setSearchValue] = useState(() => {
        if (typeof window !== "undefined") {
        return sessionStorage.getItem("searchValue") || "";
        }
        return "";
    });

    useEffect(() => {
        sessionStorage.setItem("searchPage", String(currentPage));
    }, [currentPage]);

    useEffect(() => {
        sessionStorage.setItem("searchValue", searchValue);
    }, [searchValue]);

    const filteredMetadata = postMetadata.filter((val: PostMetadata) => {
        return (val.title.toLowerCase().includes(searchValue.toLowerCase()) 
            || val.type.toLowerCase().includes(searchValue.toLowerCase()) 
            || val.source.toLowerCase().includes(searchValue.toLowerCase()));
    });

    const totalPages = Math.ceil(filteredMetadata.length / 10);
    const start = (currentPage - 1) * 10;
    const paginatedPostMetadata = filteredMetadata.slice(start, start + 10);

    return (
        <div>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={(value) => {
                    setSearchValue(value);
                }}
            />
            <SearchResult postMetadata={paginatedPostMetadata} />
            <div className="flex justify-center mt-12 mb-2 sm:mb-4 gap-4">
                <button
                    onClick={() => {
                        setCurrentPage((prev) => Math.max(prev - 1, 1));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === 1}
                    className={cn(
                        "h-10 m-auto sm:m-1 w-24 flex items-center justify-center rounded-base shadow-shadow border-2 border-border bg-main text-mtext hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none duration-200",
                    )}
                >
                    &larr; Prev
                </button>
                <span className="py-4">Page {currentPage} of {totalPages}</span>
                <button
                    onClick={() => {
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    disabled={currentPage === totalPages}
                    className={cn(
                        "h-10 m-auto sm:m-1 w-24 flex items-center justify-center rounded-base shadow-shadow border-2 border-border bg-main text-mtext hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none duration-200",
                    )}
                >
                    Next &rarr;
                </button>
            </div>
        </div>
    )
}