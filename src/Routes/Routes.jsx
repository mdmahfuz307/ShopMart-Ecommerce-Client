import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Root from "../pages/Root/Root.jsx";
import Home from "../pages/Home/Home.jsx";
import Blog from "../pages/Blog/Blog.jsx";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/blog", element: <Blog /> },
    ],
  },
]);
