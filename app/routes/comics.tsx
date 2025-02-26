import React, { useState, useMemo } from "react";
import { getComicsByTitle } from "~/services/marvelapi"; // Asegúrate de llamar la API correcta
import SearchComic from "../components/Search/SearchComic";
import ComicList from "../components/Comic/ComicList";
import type { Comic } from "../types/interfaces";
import { useLoaderData } from "react-router";

// Cargamos los cómics en lugar de los personajes
export async function clientLoader() {
  try {
    const comics: Comic[] = await getComicsByTitle(""); // Llamada inicial sin filtro
    return { comics };
  } catch (error) {
    console.error("Error fetching comics:", error);
    return { comics: [] };
  }
}

// Componente de carga
export function HydrateFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-400 border-t-red-600 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg">Loading Marvel Comics...</p>
    </div>
  );
}

function Comics() {
  const loaderData = useLoaderData() as { comics: Comic[] };
  const [comics, setComics] = useState<Comic[]>(loaderData.comics);

  const [search, setSearch] = useState<string>("");

  // Filtramos los cómics por título
  const filteredComics = useMemo(() => {
    return loaderData.comics.filter((comic) =>
      comic.title.toLowerCase().startsWith(search.toLowerCase())
    );
  }, [search, loaderData.comics]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <header className="bg-gray-800 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h3 className="text-2xl font-bold text-red-500 mb-4">Search for a Comic</h3>
        <SearchComic setComics={setComics} />
      </header>

      {/* Mostrar resultados */}
      {comics.length === 0 ? (
        <p className="text-gray-400 mt-4"></p>
      ) : (
        <ComicList comics={comics} hasSearched={true} />
      )}
    </div>
  );
}

export default Comics;
