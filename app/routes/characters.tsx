import React, { useState, useEffect } from "react";
import { getCharacters } from "~/services/marvelapi";
import CharacterList from "../components/Character/CharacterList";
import SearchCharacter from "../components/Search/SearchCharacter";
import type { Character } from "../types/interfaces";

export async function clientLoader() {
  try {
    const characters: Character[] = await getCharacters();
    return { characters };
  } catch (error) {
    console.error("Error fetching characters:", error);
    return { characters: [] };
  }
}

export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-400 border-t-red-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg">Loading Marvel Characters...</p>
    </div>
  );
}

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>(() => {
    const storedCharacters = sessionStorage.getItem("characters");
    return storedCharacters ? JSON.parse(storedCharacters) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("characters", JSON.stringify(characters));
  }, [characters]);

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
          <CharacterList characters={characters} />
        )}
      </div>
    </div>
  );
};

export default Characters;
