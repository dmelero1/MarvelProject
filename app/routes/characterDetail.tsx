import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCharacterById } from "~/services/marvelapi";
import type { Character } from "~/types/interfaces";

const CharacterDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setLoading(true);
        const data = await getCharacterById(Number(id));
        if (!data) {
          setError("Character not found.");
        } else {
          setCharacter(data);
        }
      } catch (err) {
        setError("Error loading character details.");
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  if (error || !character) {
    return <p className="text-red-500 text-center mt-10">{error || "Character not found."}</p>;
  }

  return (
    <div className="flex flex-col items-center text-white p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">{character.name}</h1>
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
      />

      <p className="text-gray-300 mt-4 max-w-2xl text-center">
        {character.description || "No description available."}
      </p>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Series</h2>
        {character.series.items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {character.series.items.map((series: { resourceURI: React.Key | null | undefined; name: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
              <li key={series.resourceURI}>{series.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No series available.</p>
        )}
      </div>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Comics</h2>
        {character.comics.items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {character.comics.items.map((comic) => (
              <li key={comic.resourceURI}>{comic.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comics available.</p>
        )}
      </div>
    </div>
  );
};

export default CharacterDetail;
