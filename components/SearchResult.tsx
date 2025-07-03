'use client';
import React, {useState} from 'react';
import SearchBar from './SearchBar';
import Card from './Card';
import { cn } from "@/lib/utils"

interface PostMetadata {
    title: string; 
    prep_time: string; 
    cook_time: string; 
    servings: string; 
    type: string; 
    source: string; 
    slug: string; 
}

// searchResult displays all the recipes that match the searchValue
export default function SearchResult({ postMetadata }: { postMetadata: PostMetadata[] }) {
    return (
        <main>
            <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24"
            )}>
                {postMetadata.map((post: PostMetadata, postIndex: number) => {
                return (
                    <Card key={postIndex} post={post}/>
                )
                })}
            </div>
        </main>
    );
}