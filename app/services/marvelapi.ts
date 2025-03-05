import CryptoJS from "crypto-js";
import type { ApiResponseCharacters, ApiResponseSeries, Character, Comics, Serie } from "../types/interfaces";

const publicKey = "f739cb1f8d597f885ba53ec152be4025";
const privateKey = "661b36cb6b083e746265831e6f31ab158967cc87";

export async function getCharacters(limit: number = 500, offset: number = 0): Promise<Character[]> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  
  const url = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status} - ${response.statusText}`);
    }

    const data: ApiResponseCharacters = await response.json();

    console.log(`You get ${data.data.results.length} characters`);
    return data.data.results;
  } catch (error) {
    console.error("Error in getCharacters:", error);
    return [];
  }
}

export async function getCharacterById(id: number): Promise<Character | null> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


  console.log(`Hash generated: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }

    const data: ApiResponseCharacters = await response.json();
    
    if (data.data.results.length === 0) {
      console.warn(`Didn't found character with id: ${id}`);
      return null;
    }

    console.log("Request of the API:", data);
    return data.data.results[0]; 
  } catch (error) {
    console.error("Error in getCharacterById:", error);
    return null;
  }
}

export async function getCharactersByName(startWith: string): Promise<Character[]> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  console.log(`Hash generated: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${startWith}&limit=100`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }
    const data: ApiResponseCharacters = await response.json();
    console.log("Request of the API:", data);

    return data.data.results || [];
  } catch (error) {
    console.error("Error:", error);
    return []; 
  }
}

export async function getComics(): Promise<void> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


  console.log(`Hash generated: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }
    const data: ApiResponseCharacters = await response.json();
    console.log("Request of the API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getComicsByTitle(titleStartsWith: string): Promise<Comics[]> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${encodeURIComponent(titleStartsWith)}&limit=50`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }
    const data = await response.json();

    console.log("API Response:", data);

    return data?.data?.results ?? [];
  } catch (error) {
    console.error("Error:", error);
    return []; 
  }
}

export async function getComicById(id: number) {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com/v1/public/comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error in the request: ${response.status}`);
    }
    const data = await response.json();
    return data.data.results[0];
  } catch (error) {
    console.error("Error fetching comic:", error);
    throw error;
  }
}

export async function getSeries(): Promise<any[]> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  const url = `https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la petición: ${response.status}`);
    }
    const data = await response.json();
    console.log("API Data:", data);

    return data.data?.results
      ?.map((serie: any) => ({
        id: serie.id,
        title: serie.title,
        startYear: serie.startYear ?? 0,
        thumbnail: serie.thumbnail ?? null, 
      }))
      .sort((a: any, b: any) => b.startYear - a.startYear);

  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

export const getSeriesById = async (id: number): Promise<Serie | null> => {
  const ts = Date.now().toString();  
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString(); 

  const url = `https://gateway.marvel.com/v1/public/series/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data: ApiResponseSeries = await response.json();

    if (data.data.results.length === 0) {
      console.warn(`No se encontró la serie con id: ${id}`);
      return null;
    }

    const serie = data.data.results[0];

    const formattedSerie: Serie = {
      id: serie.id,
      title: serie.title,
      description: serie.description || "No description available.",
      thumbnail: serie.thumbnail,
      characters: {
        items: serie.characters.items || [],
      },
      comics: {
        items: serie.comics.items || [],
      },
      events: {
        items: serie.events.items || [],
      },
      stories: {
        items: serie.stories.items || [],
      },
      startYear: serie.startYear,
      endYear: serie.endYear,
      items: undefined
    };

    return formattedSerie;
  } catch (error) {
    console.error("Error en getSeriesById:", error);
    return null;
  }
};

// Llamada de ejemplo
getCharactersByName("S")
  .then(() => console.log("Search completed"))
  .catch((error) => console.error("Error in the search:", error));
