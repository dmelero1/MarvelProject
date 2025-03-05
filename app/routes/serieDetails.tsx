import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getSeriesById } from "~/services/marvelapi";
import type { Serie } from "~/types/interfaces";

const SerieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [serie, setSerie] = useState<Serie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSerie = async () => {
      try {
        setLoading(true);
        const data = await getSeriesById(Number(id));
        if (!data) {
          setError("Serie not found.");
        } else {
          setSerie(data);
        }
      } catch (err) {
        setError("Error loading serie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchSerie();
  }, [id]);

  if (loading) {
    return <p className="text-white text-center mt-10">Loading...</p>;
  }

  if (error || !serie) {
    return <p className="text-red-500 text-center mt-10">{error || "Serie not found."}</p>;
  }

  return (
    <div className="flex flex-col items-center text-white p-6 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">{serie.title}</h1>
      <img
        src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
        alt={serie.title}
        className="w-64 h-64 object-cover rounded-lg shadow-lg"
      />

      <p className="text-gray-300 mt-4 max-w-2xl text-center">
        {serie.description || "No description available."}
      </p>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Characters</h2>
        {serie.characters.items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {serie.characters.items.map((character) => (
              <li key={character.resourceURI}>{character.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No characters available.</p>
        )}
      </div>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Comics</h2>
        {serie.comics.items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {serie.comics.items.map((comic) => (
              <li key={comic.resourceURI}>{comic.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No comics available.</p>
        )}
      </div>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Events</h2>
        {serie.events.items.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {serie.events.items.map((event) => (
              <li key={event.resourceURI}>{event.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No events available.</p>
        )}
      </div>

      <div className="mt-6 w-full max-w-2xl">
        <h2 className="text-2xl font-semibold text-red-400">Years of the Serie</h2>
        <p className="text-gray-300">
          <strong>Start:</strong> {serie.startYear ? serie.startYear : "N/A"}
        </p>
        <p className="text-gray-300">
          <strong>End:</strong> {serie.endYear ? serie.endYear : "N/A"}
        </p>
      </div>

      <button
        className="bg-red-900 hover:bg-red-700 transition duration-200 text-white px-4 py-2 rounded-lg mb-4 mt-10 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        Return
      </button>
    </div>
  );
};

export default SerieDetails;
