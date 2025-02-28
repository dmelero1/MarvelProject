import type { Character } from "~/types/interfaces";
import { useNavigate } from "react-router";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gray-800 rounded-lg shadow-lg p-4 cursor-pointer hover:bg-gray-700 transition"
      onClick={() => navigate(`/character/${character.id}`)}
    >
      <img
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        alt={character.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h3 className="text-white text-lg font-bold mt-3">{character.name}</h3>
    </div>
  );
};

export default CharacterCard;
