import React, { useState } from "react";
import { getCharactersByName } from "~/services/marvelapi";
import type { Character } from "~/types/interfaces";

interface SearchCharacterProps {
  setCharacters: React.Dispatch<React.SetStateAction<Character[]>>;
}

const SearchCharacter: React.FC<SearchCharacterProps> = ({ setCharacters }) => {
  const [query, setQuery] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSearch = async () => {
    setErrorMessage("");
    if (!query.trim()) {
      setErrorMessage("Please enter a character name to search.");
      setCharacters([]); 
      return;
    }
    try {
      const data = await getCharactersByName(query);
      if (data.length === 0) {
        setErrorMessage("No characters found. Try another name.");
      } else {
        setErrorMessage("");
      }
      setCharacters(data || []);
    } catch (error) {
      console.error("Error searching characters:", error);
      setErrorMessage("An error occurred while searching. Please try again.");
      setCharacters([]);
    }
  };

  return (
    <div className="bg-gray-800 shadow-lg rounded-2xl p-6 max-w-lg w-full text-center">
      <h3 className="text-2xl font-bold text-red-500 mb-4">Search for a Character</h3>

      <div className="flex items-center gap-5 w-full">
        <input
          type="search"
          placeholder="Search a character..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-md text-gray-200 bg-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200 cursor-pointer"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {errorMessage && <p className="text-red-500 mt-4 font-semibold">{errorMessage}</p>}
    </div>
  );
};

export default SearchCharacter;
