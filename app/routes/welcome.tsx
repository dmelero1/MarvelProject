import { useEffect, useState } from "react";
import Search from "~/components/Search/Search";
import CharacterList from "../components/Character/CharacterList";
import { getCharacters } from "../services/marvelapi";
import type { Character } from "../types/interfaces";

const App = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const data = await getCharacters(30, 0);
        setCharacters(data);
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Search
        placeholder="Search a character..."
        onSearchChange={(text) => setSearchText(text)}
      />
      <h1 className="text-3xl font-bold text-white my-6">Marvel Characters</h1>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <CharacterList characters={filteredCharacters} />
      )}
    </div>
  );
};

export default App;
