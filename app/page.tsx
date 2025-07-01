import getMetadata from "@/utils/getMetadata";
import SearchResultPagination from "@/components/SearchResultPagination";

export default function Home() {
  const postMetadata = getMetadata('recipes');

  return (
    <main>
      <SearchResultPagination postMetadata={postMetadata} />
    </main>
  );
}
