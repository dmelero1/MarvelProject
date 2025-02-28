import React, { useState } from "react";
import { getCharactersByName } from "~/services/marvelapi";
import CharacterCard from "../Character/CharacterCard";
import type { Character } from "~/types/interfaces";

interface SearchCharacterProps {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

const SearchCharacter: React.FC<SearchCharacterProps> = ({ setCharacters }) => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    if (!query.trim()) {
      setErrorMessage("Please enter a character name to search.");
      setCharacters([]); 
      return;
    }
    try {
      setErrorMessage("");
      const data = await getCharactersByName(query);
      if (data.length === 0) {
        setErrorMessage("No characters found.");
      }
      setCharacters(data || []);
    } catch (error) {
      console.error("Error searching characters:", error);
      setErrorMessage("An error occurred while searching. Please try again.");
      setCharacters([]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mt-10">
      <div className="flex flex-col items-center w-full max-w-80">
        <div className="flex items-center gap-3 w-full">
          <input
            type="search"
            placeholder="Search a character..."
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

        {errorMessage && (<p className="text-red-500 text-sm mt-2">{errorMessage}</p>)}
      </div>
    </div>
  );
};

export default SearchCharacter;
