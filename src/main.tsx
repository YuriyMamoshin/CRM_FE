import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "~/assets/styles/index.scss";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./pages";
import { SignIn } from "./pages";
import { AppRoutes } from "./common/enums";

const router = createBrowserRouter([
    {
        children: [
            {
                element: <MainPage />,
                path: AppRoutes.ROOT,
            },
            { element: <SignIn />, path: AppRoutes.SIGN_IN },
        ],
        path: AppRoutes.ROOT,
        element: <App />,
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
