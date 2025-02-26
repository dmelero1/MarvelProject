import React from "react";
import ComicCard from "./ComicCard";
import type { Comic } from "~/types/interfaces";

interface ComicListProps {
  comics: Comic[];
  hasSearched: boolean;
}

const ComicList: React.FC<ComicListProps> = ({ comics = [], hasSearched }) => {
  if (comics.length === 0 && hasSearched) {
    return <p className="text-gray-400 mt-4">No comics found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
      {comics.map((comic) => (
        comic ? <ComicCard key={comic.id} comic={comic} /> : null 
      ))}
    </div>
  );
};

export default ComicList;

