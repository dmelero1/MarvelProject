import React from "react";
import SerieCard from "./SerieCard";

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

const SeriesList = ({ series = [], hasSearched }: SeriesListProps) => {
  if (!hasSearched) return null;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-white my-6">Marvel Series</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {series.length === 0 ? (
          <p className="text-white text-center col-span-full">No series found</p>
        ) : (
          series.map((serie) => <SerieCard key={serie.id} serie={serie} />)
        )}
      </div>
    </div>
  );
};

export default SeriesList;
