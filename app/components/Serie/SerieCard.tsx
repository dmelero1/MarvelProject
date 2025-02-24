import React from "react";

interface Serie {
  id: number;
  title: string;
  thumbnail?: {
    path: string;
    extension: string;
  } | null; 
}

const SerieCard = ({ serie }: { serie: Serie }) => {
  const placeholderImage = "https://via.placeholder.com/150";

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
      <img
        src={serie.thumbnail?.path && serie.thumbnail?.extension 
              ? `${serie.thumbnail.path}.${serie.thumbnail.extension}` 
              : placeholderImage}
        alt={serie.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-lg text-white mt-2">{serie.title}</h2>
    </div>
  );
};

export default SerieCard;
