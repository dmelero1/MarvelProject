import React, { useState, useMemo } from "react";
import { getCharacters } from "~/services/marvelapi";
import SearchBox from "../components/Search/SearchBox";
import CharacterList from "../components/Character/CharacterList";
import type { Character } from "../types/interfaces";
import { useLoaderData } from "react-router";

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

function Search() {
  const loaderData = useLoaderData() as { characters: Character[] };

  const [search, setSearch] = useState<string>("");

  const filteredCharacters = useMemo(() => {
    return loaderData.characters.filter((char) =>
      char.name.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, loaderData.characters]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <header className="bg-gray-800 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Search for a Character</h3>
        <Search />
      </header>

      {/* Mostrar resultados */}
      {filteredCharacters.length === 0 ? (
        <p className="text-gray-400 mt-4">No characters found.</p>
      ) : (
        <CharacterList characters={filteredCharacters} hasSearched={false} />
      )}
    </div>
  );
}

export default Search;
