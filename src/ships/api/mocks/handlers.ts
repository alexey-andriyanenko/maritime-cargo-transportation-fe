import { http, HttpResponse } from "msw";
import { shipsMock } from "./ships.mock";
import { containerShipMock } from "./ship-details.mock";

export const createShipsMockHandlers = (baseUrl: string) => {
  return [
    http.get(baseUrl + "/ships", () => HttpResponse.json(shipsMock, { status: 200 })),
    http.get(baseUrl + "/ships/details/:id", () =>
      HttpResponse.json(containerShipMock, { status: 200 }),
    ),
  ];
};
