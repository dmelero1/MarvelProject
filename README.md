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
