import { Link } from "react-router";
import ComicCard from "../Comic/ComicCard";
import type { Comic } from "~/types/interfaces";

interface ComicListProps {
  comics: Comic[];
  hasSearched: boolean;
}

const ComicList = ({ comics = [], hasSearched }: ComicListProps) => {
  if (!hasSearched) return null;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white my-6">Marvel Comics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {comics.length === 0 ? (
          <p className="text-white text-center col-span-full">Comics not found</p>
        ) : (
          comics.map((comic) => (
            <Link
              to={`/comic/${comic.id}`}
              key={comic.id}
              className="block transform transition duration-300 hover:scale-105"
            >
              <ComicCard comic={comic} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default ComicList;
