import { IShip } from "src/ships/models";

export const shipsMock: IShip[] = [
  {
    id: 1,
    name: "Floriston",
    country: {
      id: 1,
      name: "United Kingdom",
      countryCode: "UK",
      flagUrl: "flag-url",
    },
    type: {
      id: 1,
      name: "Container ship",
    },
  },
];
