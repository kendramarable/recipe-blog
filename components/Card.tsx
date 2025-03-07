import Link from "next/link";
import { cn } from "@/lib/utils"

interface Post {
    slug: string;
    title: string;
    prep_time: string;
    cook_time: string;
    servings: string;
    type: string;
    source: string;
}
interface CardProps {
    post: Post;
}

export default function Card(props: CardProps) {
    const { post } = props;
    return (
        <Link className="no-underline" href={`/recipe/${post.slug}`}>
            <div
                className={cn(
                    "h-full flex flex-col rounded-base shadow-shadow border-2 border-border bg-main text-mtext hover:shadow-lg p-4 my-2 gap-16 duration-200",
                    )}
            >
                <h3 className="text-2xl font-bold">{post.title}</h3>
                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <h5 className="text-lg font-semibold">Prep Time:</h5>
                        <p>{post.prep_time}</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Cook Time:</h5>
                        <p>{post.cook_time}</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Servings:</h5>
                        <p>{post.servings}</p>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Type:</h5>
                        <p>{post.type}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}