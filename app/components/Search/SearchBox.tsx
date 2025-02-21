import React, { useState } from "react";
import { getCharactersByName } from "~/services/marvelapi";
import CharacterCard from "../Character/CharacterCard";
import type { Character } from "~/types/interfaces";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState<Character[]>([]); 

  const handleSearch = async () => {
    if (!query.trim()) return; 
    try {
      const data = await getCharactersByName(query);
      setCharacters(data || []); 
    } catch (error) {
      console.error("Error searching characters:", error);
      setCharacters([]); 
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mt-10">
      <div className="flex items-center gap-5 w-full max-w-80">
        <input
          type="search"
          placeholder="Search a character..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg shadow-md text-gray-200 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-200"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-200"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {characters.length > 0 && (
        <div className="justify-center text-center">
            <h1 className="text-3xl font-bold text-white my-6">Marvel Characters</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
              {characters.map((character) => (
                <CharacterCard key={character.id} character={character} />
              ))}
            </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
