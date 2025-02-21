import React from 'react';

interface SearchProps {
  placeholder: string;
  onSearchChange: (searchText: string) => void;
}

const Search = ({ placeholder, onSearchChange }: SearchProps) => {
  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    onSearchChange(e.target.value);
  }

  return (
    <div className="text-center">
      <input 
        className="p-3 mt-8 bg-red-400 rounded-3xl"
        type="search"
        onChange={onChange}
        placeholder={placeholder}
        />
      <button className="bg-red-500 p-2 rounded-3xl ml-4">Search</button>
    </div>
  );
}

export default Search;
