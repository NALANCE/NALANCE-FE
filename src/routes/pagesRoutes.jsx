import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { routes } from "./routes.jsx";
import NavLayout from "layout/NavLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <routes.Onboarding />,
  },
  {
    path: "/user1",
    element: <routes.User1 />,
  },
  {
    path: "/user2",
    element: <routes.User2 />,
  },
  {
    path: "/login",
    element: <routes.Login />,
  },
  {
    element: <NavLayout />,
    children: [
      {
        path: "/todo",
        element: <routes.Todo />,
      },
      {
        path: "/daily",
        element: <routes.Daily />,
      },
      {
        path: "/monthly",
        element: <routes.Monthly />,
      },
      {
        path: "/mypage",
        element: <routes.Mypage />,
      },
    ],
  },
  {
    path: "/mypage",
    children: [
      {
        path: "email",
        element: <routes.ModEmail />,
      },
      {
        path: "password",
        element: <routes.ModPass />,
      },
      {
        path: "category",
        element: <routes.ModCategory />,
      },
      {
        path: "notice",
        element: <routes.Notice />,
      },
      {
        path: "ask",
        element: <routes.Ask />,
      },
      {
        path: "logout",
        element: <routes.Logout />,
      },
      {
        path: "drop",
        element: <routes.Drop />,
      },
    ],
  },
]);

export default router;
