import React, { useState } from 'react';
import { getCharactersByName} from '~/services/marvelapi';

function Search() {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    console.log('Buscando:', query);
    const data: MarvelApiResponse<MarvelCharacter> = await getCharactersByName(query);
    console.log(data);
  };

  return (
    <div className="text-center">
      <input 
        className="p-3"
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search a character..."
      />
      <button className="bg-red-500 p-2 rounded-3xl ml-4" onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
