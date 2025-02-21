import { useEffect, useState } from "react";
import Search from "~/components/Search/SearchBox";
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
      <Search />      
    </div>
  );
};

export default App;
