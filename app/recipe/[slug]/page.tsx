import Markdown from "markdown-to-jsx"
import getMetadata from "@/utils/getMetadata"
import fs from "fs"
import matter from "gray-matter"
import React from "react"
import { cn } from "@/lib/utils"

function getBlogpostContent(slug: string) {
    const folder = 'recipes/';
    const file = folder + `${slug}.md`;
    const fileContents = fs.readFileSync(file, 'utf8');
    const result = matter(fileContents);
    return result;
}

// get all the blogposts then create a url for each slug
export const generateStaticParams = async () => {
    const postMetadata = getMetadata('recipes');
    return postMetadata.map((post) => ({ slug: post.slug }));
}

// will change the blog title according to the slug, helps with SEO
export async function generateMetadata(
    props: {params: Promise<{slug: string}>, searchParams: Promise<URLSearchParams>}
) {
    const params = await props.params;
    const id = params?.slug ? ' | ' + params?.slug : '';
    return {
        title: `Cindy's Cookbook${id.replaceAll('_', ' ')}`
    }
}

interface RecipeBlogpostProps {
    params: Promise<{
        slug: string;
    }>;
}
interface BlogpostContent {
    content: string;
}

export default async function RecipeBlogpost(props: RecipeBlogpostProps) {
    const slug = (await props.params).slug;
    const blogpost: BlogpostContent = getBlogpostContent(slug);

    return (
        <main className={cn(
            "flex flex-1 flex-col justify-center",
        )}>
            <article 
                className={cn(
                    "w-[340px] sm:w-[850px] m-auto sm:m-0 pr-4 sm:pr-2 rounded-base shadow-shadow border-2 border-border bg-main",
            )}>
                <Markdown>{blogpost.content}</Markdown>
            </article>
        </main>
    );
}