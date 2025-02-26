import Link from "next/link";

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
        <Link className="unstyled" href={`/recipe/${post.slug}`}>
            <div className="card">
                <h3>{post.title}</h3>
                <div className="statsContainer">
                    <div>
                        <h5>Prep Time:</h5>
                        <p>{post.prep_time}</p>
                    </div>
                    <div>
                        <h5>Cook Time:</h5>
                        <p>{post.cook_time}</p>
                    </div>
                    <div>
                        <h5>Servings:</h5>
                        <p>{post.servings}</p>
                    </div>
                    <div>
                        <h5>Type:</h5>
                        <p>{post.type}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}