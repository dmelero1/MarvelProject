import type { Comic } from "~/types/interfaces";
import defaultImage from "./imgComic/defaultmarvel.jpg";

interface ComicCardProps {
  comic: Comic;
}

const ComicCard = ({ comic }: ComicCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-white transition-transform transform hover:scale-105">
      <img
        src={
          comic.thumbnail
            ? `${comic.thumbnail.path}.${comic.thumbnail.extension}`
            : defaultImage
        }
        alt={comic.title}
        className="w-32 h-32 rounded object-cover border-2 border-red-500"
      />
      <h2 className="text-lg font-bold mt-3 text-center">{comic.title}</h2>
      <p className="text-sm text-gray-400 text-center mt-2 line-clamp-3">
        {comic.description && comic.description.trim().length > 0
          ? comic.description
          : "No description available"}
      </p>
      <p className="text-sm text-gray-400 text-center mt-1">
        Issue #{comic.issueNumber} - {comic.series.items[0].name}
      </p>
    </div>
  );
};

export default ComicCard;
