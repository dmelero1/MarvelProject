import { useEffect, useState } from "react";
import Search from "~/components/Search/SearchBox";
import ComicList from "../components/Comic/ComicList";
import { getComics } from "../services/marvelapi";

import type { Comic } from "~/types/interfaces";

const App = () => {
  const [comics, setComics] = useState<Comic[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const data = await getComics();
      } catch (error) {
        console.error("Error fetching comics:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchComics();
  }, []);

  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center">
      <Search onSearch={setSearchText} />
      <ComicList comics={filteredComics} loading={loading} />
    </div>
  );
};

export default App;
