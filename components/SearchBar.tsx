'use client'
import React, {useState} from 'react';

interface SearchBarProps {
    searchValue: string;
    setSearchValue: (value: string) => void;
}

export default function SearchBar({ searchValue, setSearchValue }: SearchBarProps) {
    return (
        <input
            placeholder='Search recipes...'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
        />
    );
}