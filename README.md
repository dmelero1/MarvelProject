# Daniel Melero & Jesus Moreno
## 1. Objective
The main goal of the project is retrieve data of the [Marvel API](https://developer.marvel.com/) using React Router and TypeScript. We want to browse and explore Marvel characters, comics and series.

## 2. Features
✅ Search for Marvel characters, comics, and series.

✅ View detailed information about characters, including appearances in comics and series.

✅ Explore individual comics with details and related characters.

✅ Browse series with start and end dates, character appearances, and related  comics.

✅ Responsive and user-friendly UI.


## 3. Figma Prototype
We followed this [Figma MarvelApi Design](https://www.figma.com/design/JcdjdBVNLqiqLmSFGucRey/MarvelProject?node-id=1-37&t=7IXjS58ezKBWJztl-1)

## 4. Technologies Used
- **Frontend:** React, TypeScript, Tailwind CSS

- **Routing:** React Router

- **Icons:** React Icons
    ```bash
    npm install react-icons
    ```
- **Crypto-JS:** Data encryption and hashing
    ```bash
    npm install crypto-js
    ```
- **API:** Marvel API

- **Deployment:** Vercel

## 5.Installation Instruction
```
git clone https://github.com/dmelero1/MarvelProject.git
cd MarvelProject
```
```
npm install
```
```
npm run dev
```
The application should be accessible at http://localhost:5173.

## 6.Usage Guide
1. **Home Page:** Displays a search-box for Characters that is set like the Home page.
2. **Navigation:** Use the header menu to quickly switch between different sections (Characters-Comics-Series).
3. **Search Feature:** Allows users to find specific characters, comics, or series. Is going to display a list with the coincidences of the search
4. **Details Page:** Clicking on a character, comic, or series shows additional details, including links that match with other entitys.

## 7. API Documentation
MarvelApi works with keys so we need to declare a const for the keys.
```
    const publicKey = "...";
    const privateKey = "...";
```
We also need a timestamp to make the request unique and prevent duplicate requests:
```
   const ts = Date.now().toString();
```
We use CryptoJS to generate an MD5 hash for authentication:
```
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
```
### Example of endpoint
- Get Characters by ID
```
GET https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash={hash} HTTP/1.1
```
- Get Characters by name that name starts with ?
```
GET https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${startWith}&limit=100` HTTP/1.1
```

- Get Comics
```
GET https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}` HTTP/1.1
```

- Get Comics that title starts with ?
```
GET https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${encodeURIComponent(titleStartsWith)}&limit=50` HTTP/1.1
```

- Get Series (limiy 50)
```
GET https://gateway.marvel.com/v1/public/series?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50` HTTP/1.1
```
## 8. Project structure
### routes/ 
App routing (character, comic, and series pages)

    ├── characterDetail.tsx 
    ├── characters.tsx 
    ├── comicDetail.tsx 
    ├── comics.tsx 
    ├── serieDetail.tsx 
    ├── series.tsx
- **characterDetail.tsx**: Displays detailed information about a specific character (id)
- **characters.tsx**: Shows a list of all characters
- **comicDetail.tsx**: Displays detailed information about a specific comic (id)
- **comics.tsx**: Shows a list of all comics.
- **serieDetail.tsx**: Displays detailed information about a specific series (id)
- **series.tsx**:Shows a list of all series.

### layout/
Layout components (Header, Outlet, etc...)

    ├── index.tsx 
- **index.tsx**: Contains the main layout structure for the application

### components/
Reusable UI components

    ├── Character/
        ├──CharacterCard.tsx
        ├──CharacterList.tsx
    ├── Comic/
        ├──ComicCard.tsx
        ├──ComicList.tsx
    ├── Header/
        ├──ImgHeader/
            ├──MarvelLogo.png
        ├──Header.tsx
    ├── Search/
        ├──SearchCharacter.tsx
        ├──SearchComic.tsx
    ├── Serie/
        ├──SerieCard.tsx
        ├──SerieList.tsx

- **CharacterCard.tsx**: Displays individual character information in a card.
- **CharacterList.tsx**: Render multiple CharacterCard components. 
- **ComicCard.tsx**: Displays individual comic information in a card.
- **ComicList.tsx**: Render multiple ComicCard components.
- **ImgHeader/MarvelLogo.png**:  The image file for the Marvel logo.
- **Header.tsx**: Defines the header of the application, containing the logo and navigation links.
- **SearchCharacter.tsx**: Component dedicated to searching for characters.
- **SearchComic.tsx**: Component designed for searching comics.
- **SerieCard.tsx**: Displays individual serie information in a card.
- **SerieList.tsx**: Render multiple SerieCard components.

### services/
API calls (Marvel API integration)

    ├── marvelapi.ts
- **marvelapi.ts**: Contains functions that interact with the Marvel API to fetch data.

### types/
TypeScript interfaces

    ├── interfaces.ts
- **interfaces.ts**: Define the structure of the data objects used throughout the application

## Component Organization
Atomic Components

![Captura de pantalla 2025-03-10 121339](https://github.com/user-attachments/assets/f83725f8-6bae-4e2e-8148-306e75c1a29c)

Molecular Components

![molecular](https://github.com/user-attachments/assets/25c3c9cc-da81-4c9d-9bdc-837ed3490961)

Organism Components

![organism](https://github.com/user-attachments/assets/52693f4c-e862-400f-b97c-a04e651cebc6)

Layout Components

![layout](https://github.com/user-attachments/assets/7953647c-9b5b-4db7-b5b0-cf40b66aaaab)

Route Components

![route](https://github.com/user-attachments/assets/fc92ffb3-9345-41bd-97b0-22085ebee16a)

## 9. Deployed Application

MarvelAPI on Vercel (https://marvel-project-snowy.vercel.app/)
