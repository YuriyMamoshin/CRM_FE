import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/assets/styles/index.scss";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages/main-page/index.tsx";
import { AppRoute } from "./common/enums/app-route.enum.ts";

const router = createBrowserRouter([
    {
        children: [ {
            element: <MainPage />,
            path: AppRoute.ROOT,
        },

        ],
        path: AppRoute.ROOT,
        element: <App />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);