import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getComicById } from "~/services/marvelapi";
import type { Comic } from "~/types/interfaces";

const ComicDetails: React.FC = () => {
  const { comicId } = useParams<{ comicId: string }>();
  const [comic, setComic] = useState<Comic | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      if (!comicId || isNaN(Number(comicId))) {
        setError("Invalid comic ID.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        console.log(`Fetching comic with ID: ${comicId}`);
        const data = await getComicById(Number(comicId));
        if (!data) {
          setError("Comic not found.");
        } else {
          setComic(data);
        }
      } catch (err) {
        console.error("Error loading comic details:", err);
        setError("Error loading comic details.");
      } finally {
        setLoading(false);
      }
    };

    fetchComic();
  }, [comicId]);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  if (error || !comic) {
    return <p className="text-red-500 text-center mt-10">{error || "Comic not found."}</p>;
  }

  return (
    <div className="flex flex-col items-center text-white p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">{comic.title}</h1>
      <img
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        alt={comic.title}
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
      />

      <p className="text-gray-300 mt-4 max-w-2xl text-center">
        {comic.description || "No description available."}
      </p>

      {/* Display Series */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Series</h2>
        {comic.series.name ? (
          <p className="text-gray-300">{comic.series.name}</p>
        ) : (
          <p className="text-gray-500">No series available.</p>
        )}
      </div>

      {/* Display Characters */}
      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Characters</h2>
        {comic.characters.items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {comic.characters.items.map((character) => (
              <li key={character.resourceURI}>{character.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No characters available.</p>
        )}
      </div>
    </div>
  );
};

export default ComicDetails;