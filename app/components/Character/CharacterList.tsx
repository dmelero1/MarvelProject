import { Link } from "react-router";
import CharacterCard from "../Character/CharacterCard";
import type { Character } from "~/types/interfaces";

interface CharacterListProps {
  characters: Character[];
  hasSearched: boolean;
}

const CharacterList = ({ characters = [], hasSearched }: CharacterListProps) => {
  if (!hasSearched) return null;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white my-6">Marvel Characters</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.length === 0 ? (
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
    </div>
  );
};

export default CharacterList;
