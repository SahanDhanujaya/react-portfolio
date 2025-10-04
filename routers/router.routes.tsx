import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import HomePage from "../src/pages/HomePage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
}]);