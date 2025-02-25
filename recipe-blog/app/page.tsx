import Card from "@/components/Card";
import getMetadata from "@/utils/getMetadata";

export default function Home() {
  const postMetadata = getMetadata('recipes');
  return (
    <main>
      <div className="postsContainer">
        {postMetadata.map((post, postIndex) => {
          return (
            <Card key={postIndex} post={post}/>
          )
        })}
      </div>
    </main>
  );
}
