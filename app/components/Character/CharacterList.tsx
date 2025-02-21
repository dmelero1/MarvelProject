import { useEffect, useState } from "react";
import { Link } from "react-router";
import CharacterCard from "../Character/CharacterCard";
import { getCharacters } from "../../services/marvelapi"; 
import type { Character } from "~/types/interfaces";

const CharacterList = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(100, 0); 
        setCharacters(data);
      } catch (error) {
        console.error("Error al obtener los personajes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {loading ? (
        <p className="text-white text-center col-span-full">Cargando personajes...</p>
      ) : characters.length === 0 ? (
        <p className="text-white text-center col-span-full">Characters not found</p>
      ) : (
        characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            className="block transform transition duration-300 hover:scale-105"
          >
            <CharacterCard character={character} />
          </Link>
        ))
      )}
    </div>
  );
};

export default CharacterList;

