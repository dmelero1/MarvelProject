import React from "react";
import type { Character } from "~/types/interfaces";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-60 object-cover rounded-t-xl"
      />
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-white">{character.name}</h3>
        <p className="text-gray-400 mt-2 text-sm">
          {character.description ? character.description : "No description available"}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
