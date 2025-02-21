import CryptoJS from "crypto-js";
import type { ApiResponse, Character } from "../types/interfaces";

const publicKey = "f739cb1f8d597f885ba53ec152be4025";
const privateKey = "661b36cb6b083e746265831e6f31ab158967cc87";

export async function getCharacters(limit: number = 20, offset: number = 0): Promise<Character[]> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  
  const url = `https://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status} - ${response.statusText}`);
    }

    const data: ApiResponse = await response.json();

    console.log(`Se obtuvieron ${data.data.results.length} personajes`);
    return data.data.results;
  } catch (error) {
    console.error("Error en getCharacters:", error);
    return [];
  }
}

export async function getCharacterById(id: number): Promise<Character | null> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }

    const data: ApiResponse = await response.json();
    
    if (data.data.results.length === 0) {
      console.warn(`No se encontró un personaje con ID ${id}`);
      return null;
    }

    console.log("Respuesta de la API:", data);
    return data.data.results[0]; 
  } catch (error) {
    console.error("Error en getCharacterById:", error);
    return null;
  }
}

export async function getCharactersByName(startWith: string): Promise<void> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${startWith}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
    console.log("Respuesta de la API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getComics(): Promise<void> {
  const ts = Date.now().toString();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();


  console.log(`Hash generado: ${hash}`);

  const url = `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.status}`);
    }
    const data: ApiResponse = await response.json();
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
    const data: ApiResponse = await response.json();
    console.log("Respuesta de la API:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Llamada de ejemplo
getCharactersByName("S")
  .then(() => console.log("Busqueda completada"))
  .catch((error) => console.error("Error en la busqueda:", error));
