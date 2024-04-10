import { IContainerShip } from "src/ships/models";

export const containerShipMock: IContainerShip = {
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
  size: {
    id: 1,
    name: "Large",
  },
  containers: [],
};
