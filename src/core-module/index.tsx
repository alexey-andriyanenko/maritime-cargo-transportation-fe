import React from "react";

import Home from "./pages/home";
import { IRoute } from "./routes";

export const CoreRoutes = {
  home: "/",
};

const routes: IRoute[] = [
  {
    path: CoreRoutes.home,
    element: <Home />,
    isPrivate: true,
  },
];

const homeModule = {
  routes,
};

export default homeModule;
