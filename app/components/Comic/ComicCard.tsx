import React from "react";
import type { Comic } from "~/types/interfaces";

interface ComicCardProps {
  comic: Comic;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  if (!comic) return null; 

  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-white transition-transform transform hover:scale-105">
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className="w-full h-48 object-cover rounded-xl border-1 border-white"
      />
      <h3 className="text-lg font-bold text-white mt-2">{comic.title || "Untitled"}</h3>
    </div>
  );
};

export default ComicCard;
