import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/index.tsx", [
        index("routes/characters.tsx"),
        route("comics", "routes/comics.tsx", [
            route(":comicId", "routes/comicDetails.tsx"), // Ensure this line is correct
        ]),
        route("series", "./routes/series.tsx"),
    ]),
] satisfies RouteConfig;