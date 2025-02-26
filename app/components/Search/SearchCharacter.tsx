import React, { useState } from "react";
import { getCharactersByName } from "~/services/marvelapi";
import type { Character } from "~/types/interfaces";

interface SearchCharacterProps {
  setCharacters: (characters: Character[]) => void;
}

const SearchCharacter: React.FC<SearchCharacterProps> = ({ setCharacters }) => {
  const [query, setQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (!query.trim()) {
      setError("Please enter a character name.");
      return;
    }
    setError(null);
    try {
      const data = await getCharactersByName(query);
      if (data.length === 0) {
        setError("No characters found.");
      }
      setCharacters(data || []);
    } catch (error) {
      console.error("Error searching characters:", error);
      setError("Something went wrong. Try again.");
      setCharacters([]);
    }
  };

  return (
    <div className="flex items-center gap-5 w-full max-w-md">
      <input
        type="search"
        placeholder="Search a character..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-md text-gray-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
      />
      <button
        className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition duration-200 cursor-pointer font-bold"
        onClick={handleSearch}
      >
        Search
      </button>

      {error && <p className="text-red-400 mt-2 text-center w-full">{error}</p>}
    </div>
  );
};

export default SearchCharacter;
