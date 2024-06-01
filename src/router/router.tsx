import {createBrowserRouter} from "react-router-dom";
import App from "../App.tsx";
import BlogFeed from "../components/BlogFeed/BloogFeed.tsx";
import {BlogPage} from "../components/BlogPage/BlogPage.tsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <BlogFeed />
            },
            {
                path: '/blog/:id',
                element: <BlogPage />
            }
        ]
    },
]);