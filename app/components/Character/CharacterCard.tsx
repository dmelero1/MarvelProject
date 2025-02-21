import type { Character } from "~/types/interfaces";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center text-white transition-transform transform hover:scale-105">
      <img
        src={
          character.thumbnail
            ? `${character.thumbnail.path}.${character.thumbnail.extension}`
            : "/placeholder-image.jpg"
        }
        alt={character.name}
        className="w-32 h-32 rounded-full object-cover border-2 border-red-500"
      />
      <h2 className="text-lg font-bold mt-3 text-center">{character.name}</h2>
      <p className="text-sm text-gray-400 text-center mt-2 line-clamp-3">
        {character.description && character.description.trim().length > 0
          ? character.description
          : "Sin descripción disponible"}
      </p>
    </div>
  );
};

export default CharacterCard;
