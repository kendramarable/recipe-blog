"use client";

import { useState } from "react";
import SearchResult from "./SearchResult";
import { cn } from "@/lib/utils"

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
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(postMetadata.length / 10);
    const start = (currentPage - 1) * 10;
    const paginatedPostMetadata = postMetadata.slice(start, start + 10);

    return (
        <div>
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