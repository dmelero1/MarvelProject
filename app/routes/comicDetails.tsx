import React from "react";
import { useParams } from "react-router";
import type { Comic } from "~/types/interfaces";

const ComicDetails = () => {
  const { comicId } = useParams<{ comicId: string }>();
  const [comic, setComic] = React.useState<Comic | null>(null);

  React.useEffect(() => {
    // Fetch comic details by ID
    const fetchComic = async () => {
      try {
        const response = await fetch(`/api/comics/${comicId}`);
        const data = await response.json();
        setComic(data);
      } catch (error) {
        console.error("Error fetching comic details:", error);
      }
    };

    fetchComic();
  }, [comicId]);

  if (!comic) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      <h1 className="text-3xl font-bold text-white my-6">{comic.title}</h1>
      <p>{comic.description}</p>
      {/* Add more comic details here */}
    </div>
  );
};

export default ComicDetails;