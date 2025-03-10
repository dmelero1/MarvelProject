# Daniel Melero & Jesus Moreno
We develop a Single Page Application (SPA) using React with multiple routes. This will be achieved using React Router and TypeScript. The application retrieve data via the [Marvel API](https://developer.marvel.com/).

## Project structure
### routes/

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

    ├── index.tsx 
- **index.tsx**: Contains the main layout structure for the application

### components/

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

    ├── marvelapi.ts
- **marvelapi.ts**: Contains functions that interact with the Marvel API to fetch data.

### types/

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


### Installation and deployment

```bash
npm install
```

```bash
npm install crypto-js
```

```bash
npm run dev
```

```bash
npm install react-icons
```

## Figma
We followed this [Figma Design](https://www.figma.com/design/JcdjdBVNLqiqLmSFGucRey/MarvelProject?node-id=1-37&t=7IXjS58ezKBWJztl-1)
