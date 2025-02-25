import fs from 'fs';
import matter from 'gray-matter';

export default function getMetadata(basePath: string): {
    title: string; 
    prep_time: string; 
    cook_time: string; 
    servings: string; 
    type: string; 
    source: string; 
    slug: string; 
}[] {
    const folder: string = basePath + '/';
    const files: string[] = fs.readdirSync(folder);
    const mdPosts: string[] = files.filter((file) => file.endsWith('.md'));
    const posts = mdPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`${basePath}/${fileName}`, 'utf8');
        const result = matter(fileContents);
        return {
            title: result.data.title,
            prep_time: result.data.prep_time,
            cook_time: result.data.cook_time,
            servings: result.data.servings,
            type: result.data.type,
            source: result.data.source,
            slug: fileName.replace('.md', ''),
        }
    });
    return posts;
}