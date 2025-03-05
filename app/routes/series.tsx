import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getSeries } from "~/services/marvelapi";
import SeriesList from "~/components/Serie/SerieList";

const Series = () => {
  interface Serie {
    id: number;
    title: string;
    thumbnail: {
      path: string;
      extension: string;
    };
  }

  const [series, setSeries] = useState<Serie[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSeries = sessionStorage.getItem("series");
    
    if (storedSeries) {
      setSeries(JSON.parse(storedSeries));
      setHasSearched(true);
    }
  }, []);

  const fetchSeries = async () => {
    try {
      const seriesData = await getSeries();
      setHasSearched(true);
      if (Array.isArray(seriesData) && seriesData.length > 0) {
        setSeries(seriesData);
        sessionStorage.setItem("series", JSON.stringify(seriesData));
      } else {
        setSeries([]);
        console.log("No series found.");
      }
    } catch (error) {
      console.error("Error fetching series:", error);
      setSeries([]);
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-5xl mx-auto mt-10">
      {!hasSearched && (
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-800 transition duration-200 cursor-pointer"
          onClick={fetchSeries}
        >
          Get Series
        </button>
      )}
      
      <SeriesList series={series} hasSearched={hasSearched} />
    </div>
  );
};

export default Series;
