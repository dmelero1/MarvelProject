import React from "react";
import { Link } from "react-router";
import { FaInfoCircle } from "react-icons/fa";

interface Serie {
  id: number;
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

interface SeriesListProps {
  series: Serie[];
  hasSearched: boolean;
}

const SeriesList: React.FC<SeriesListProps> = ({ series }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {series.map((serie) => (
        <div key={serie.id} className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col h-full">
          <img
            src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
            alt={serie.title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <h3 className="text-xl text-center text-white mt-3 mb-2 truncate">{serie.title}</h3>

          <div className="flex justify-end mt-auto">
            <Link
              to={`/series/${serie.id}`}
            >
              <FaInfoCircle className="text-red-500 hover:text-red-700 transition duration-200" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeriesList;
