import React, { useState } from "react";
import { getCharactersByName } from "~/services/marvelapi";
import SearchCharacter from "../components/Search/SearchCharacter";
import CharacterList from "../components/Character/CharacterList";
import type { Character } from "../types/interfaces";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [search, setSearch] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-900 text-white p-5">
      <div className="flex flex-col items-center w-full mt-10">
        <h3 className="text-2xl font-bold text-red-500 mb-4 text-center">
          Search for a Character
        </h3>
        <SearchCharacter setCharacters={setCharacters} />
      </div>

      <div className="w-full mt-8">
        {characters.length === 0 ? (
          <p className="text-gray-400 text-center"></p>
        ) : (
          <CharacterList characters={characters} hasSearched/>
        )}
      </div>
    </div>
  );
};

export default Characters;
