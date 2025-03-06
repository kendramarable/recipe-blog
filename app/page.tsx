import getMetadata from "@/utils/getMetadata";
import SearchResult from "@/components/SearchResult";

export default function Home() {
  const postMetadata = getMetadata('recipes');
  return (
    <main>
      <SearchResult postMetadata={postMetadata} />
    </main>
  );
}
