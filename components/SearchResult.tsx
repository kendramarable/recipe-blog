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
// (looks for recipe titles that match the user's text input into the SearchBar)
export default function SearchResult(props: { postMetadata: PostMetadata[]; }) {
    const {postMetadata} = props;
    const [searchValue, setSearchValue] = useState('');
    return (
        <main>
            <SearchBar 
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-24"
            )}>
                {postMetadata.filter((val: PostMetadata) => {
                    return (val.title.toLowerCase().includes(searchValue.toLowerCase()) 
                        || val.type.toLowerCase().includes(searchValue.toLowerCase()) 
                        || val.source.toLowerCase().includes(searchValue.toLowerCase()));
                }).map((post: PostMetadata, postIndex: number) => {
                return (
                    <Card key={postIndex} post={post}/>
                )
                })}
            </div>
        </main>
    );
}