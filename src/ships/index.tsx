import React from "react";

import { IRoute } from "src/core-module/routes";
import Ships from "./pages/ships";
import ShipDetails from "./pages/ship-details";

export const ShipsRoutes = {
  ships: "/ships",
  shipDetails: "/ships/:id",
};

const routes: IRoute[] = [
  {
    path: ShipsRoutes.ships,
    element: <Ships />,
    isPrivate: true,
  },
  {
    path: ShipsRoutes.shipDetails,
    element: <ShipDetails />,
    isPrivate: true,
  },
];

const shipsModule = {
  routes,
};

export default shipsModule;
