import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout ("./layouts/index.tsx" , [
        index("routes/welcome.tsx"),
        route("comics", "routes/comics.tsx"),
        route("series", "./routes/series.tsx"),
    ]),
] satisfies RouteConfig;
