import React from "react";

import Auth from "./pages/auth";
import { IRoute } from "../core-module/routes";

export const AuthRoutes = {
  login: "/login",
};

const routes: IRoute[] = [
  {
    path: AuthRoutes.login,
    element: <Auth />,
  },
];

const authModule = {
  routes,
};

export default authModule;
