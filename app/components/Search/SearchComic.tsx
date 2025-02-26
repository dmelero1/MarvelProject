import React, { useState } from "react";
import { getComicsByTitle } from "~/services/marvelapi";
import ComicCard from "../Comic/ComicCard";
import type { Comic } from "~/types/interfaces";

interface SearchComicProps {
  setComics: React.Dispatch<React.SetStateAction<Comic[]>>;
}

const SearchComic: React.FC<SearchComicProps> = ({ setComics }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null); 

  const handleSearch = async () => {
    setError(null); 

    if (!query.trim()) {
      setError("Please enter a comic title to search.");
      setComics([]); 
      return;
    }

    try {
      const data = await getComicsByTitle(query);

      if (data.length === 0) {
        setError("No comics found. Try another title.");
      } else {
        setError(null);
      }

      setComics(data);
    } catch (error) {
      console.error("Error searching comics:", error);
      setError("An error occurred while fetching comics. Please try again.");
      setComics([]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mt-8">
      <div className="flex items-center gap-5 w-full max-w-80">
        <input
          type="search"
          placeholder="Search a comic..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-md text-gray-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {error && (
        <p className="text-red-500 mt-4 font-semibold">{error}</p>
      )}
    </div>
  );
};

export default SearchComic;
