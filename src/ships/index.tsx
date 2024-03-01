import React from "react";

import { IRoute } from "src/core-module/routes";
import Ships from "./pages/ships";

export const ShipsRoutes = {
  ships: "/ships",
};

const routes: IRoute[] = [
  {
    path: ShipsRoutes.ships,
    element: <Ships />,
    isPrivate: true,
  },
];

const shipsModule = {
  routes,
};

export default shipsModule;
