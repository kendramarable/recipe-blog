import Markdown from "markdown-to-jsx"
import getMetadata from "@/utils/getMetadata"
import fs from "fs"
import matter from "gray-matter"
import React from "react"

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
export async function generateMetadata({params, searchParams}: {params: {slug: string}, searchParams: URLSearchParams}) {
    const id = params?.slug ? ' | ' + params?.slug : '';
    return {
        title: `Recipe Blog${id.replaceAll('_', ' ')}`
    }

}

interface RecipeBlogpostProps {
    params: {
        slug: string;
    };
}
interface BlogpostContent {
    content: string;
}

export default function RecipeBlogpost(props: RecipeBlogpostProps) {
    const slug = props.params.slug;
    const blogpost: BlogpostContent = getBlogpostContent(slug);

    return (
        <main>
            <article>
                <Markdown>{blogpost.content}</Markdown>
            </article>
        </main>
    );
}