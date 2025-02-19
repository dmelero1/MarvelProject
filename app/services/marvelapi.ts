import crypto from "crypto";

const publicKey = "f739cb1f8d597f885ba53ec152be4025";
const privateKey = "661b36cb6b083e746265831e6f31ab158967cc87";

// Definimos los tipos para las respuestas de la API
interface MarvelCharacter {
  id: number;
  name: string;
  description: string;
  [key: string]: any;
}

interface MarvelApiResponse<T> {
  data: {
    results: T[];
  };
}

export async function getCharacterById(id: number): Promise<void> {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");

  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data: MarvelApiResponse<MarvelCharacter> = await response.json();
    console.log("Respuesta de la API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getCharactersByName(startWith: string): Promise<void> {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");

  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${startWith}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data: MarvelApiResponse<MarvelCharacter> = await response.json();
    console.log("Respuesta de la API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getComics(): Promise<void> {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");

  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data: MarvelApiResponse<any> = await response.json();
    console.log("Respuesta de la API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getMovies(): Promise<void> {
  const ts = Date.now().toString();
  const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");

  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/movies?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data: MarvelApiResponse<any> = await response.json();
    console.log("Respuesta de la API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamada de ejemplo
getCharactersByName("S")
  .then(() => console.log("Busqueda completada"))
  .catch((error) => console.error("Error en la busqueda:", error));
