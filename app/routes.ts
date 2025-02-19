import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout ("./layouts/index.tsx" , [
        index("routes/welcome.tsx"),
        route("comunidades", "./routes/comunidades.tsx"),
        route("about", "./routes/about.tsx"),
    ]),
] satisfies RouteConfig;
