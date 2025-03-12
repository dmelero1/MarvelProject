import React, { useState, useEffect } from "react";
import SearchComic from "../components/Search/SearchComic";
import ComicCard from "../components/Comic/ComicCard";
import type { Comic } from "~/types/interfaces";
import { useLoaderData } from "react-router";
import { getComicsByTitle } from "~/services/marvelapi";

export async function clientLoader() {
  try {
    const comics: Comic[] = await getComicsByTitle("");
    return { comics };
  } catch (error) {
    console.error("Error fetching comics:", error);
    return { comics: [] };
  }
}

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

const Comics = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [orderBy, setOrderBy] = useState<"oldest" | "newest">("newest");

  const sortedComics = [...comics].sort((a, b) => {
    const dateA = new Date(
      a.dates.find((d) => d.type === "onsaleDate")?.date || 0
    );
    const dateB = new Date(
      b.dates.find((d) => d.type === "onsaleDate")?.date || 0
    );
    return orderBy === "newest"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5"
      style={{
        backgroundImage: `url(/ironman-bg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <header className="bg-gray-800 shadow-lg rounded-2xl p-8 max-w-lg text-center">
        <h3 className="text-2xl font-bold text-red-500 mb-4">
          Search for a Comic
        </h3>
        <SearchComic setComics={setComics} />
      </header>

      {comics.length > 0 && (
        <div className="flex gap-4 my-6">
          <button
            onClick={() => setOrderBy("newest")}
            className={`px-4 py-2 rounded-lg ${
              orderBy === "newest"
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setOrderBy("oldest")}
            className={`px-4 py-2 rounded-lg ${
              orderBy === "oldest"
                ? "bg-red-600 text-white"
                : "bg-gray-700 text-gray-300"
            }`}
          >
            Oldest
          </button>
        </div>
      )}

      {sortedComics.length > 0 ? (
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold text-white my-6">Marvel Comics</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-3">
            {sortedComics.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white mt-4"></p>
      )}
    </div>
  );
};

export default Comics;
