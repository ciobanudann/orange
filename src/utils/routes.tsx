import { createBrowserRouter } from "react-router-dom";
import Layout from "../views/Layout";
import BooksList from "../pages/BooksList";
import BookDetails from "../pages/BookDetails";
import Favorites from "../pages/Favorites";

export enum Routes {
  Base = "*",
  Home = "/",
  Favorites = "favorites",
  BookDetails = "books/:id",
  Books = "books",
}

export const router = createBrowserRouter([
  {
    path: Routes.Base,
    element: <Layout />,
    children: [
      {
        path: Routes.Base,
        element: <BooksList />,
      },
      {
        path: Routes.Books,
        element: <BooksList />,
      },
      {
        path: Routes.BookDetails,
        element: <BookDetails />,
      },
      {
        path: Routes.Favorites,
        element: <Favorites />,
      },
    ],
  },
]);
