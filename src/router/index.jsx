import { createBrowserRouter } from "react-router-dom";

import User from "../pages/Users.page";
import NotFound from "../pages/NotFound.page";
import Login from "../pages/Login.page";
import UserDetail from "../pages/UserDetail.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/users",
    children: [
      {
        index: true,
        element: <User />,
      },
      {
        path: ":id",
        element: <UserDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
