import React from "react";
import { Link } from "react-router";
import type { Comic } from "~/types/interfaces";

interface ComicCardProps {
  comic: Comic;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
<div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-white transition-transform transform hover:scale-105">
    <Link to={`/comics/${comic.id}`} className="block">
      <div className="bg-gray-800 rounded-lg p-4">
        <img src={comic.thumbnail.path + "." + comic.thumbnail.extension} alt={comic.title} className="w-full h-auto rounded-lg" />
        <h3 className="text-lg font-bold text-white mt-2">{comic.title}</h3>
      </div>
    </Link>
</div>
  );
};

export default ComicCard;