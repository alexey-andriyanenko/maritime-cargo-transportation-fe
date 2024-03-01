import { http, HttpResponse } from "msw";
import { shipsMock } from "./ships.mock";

export const createShipsMockHandlers = (baseUrl: string) => {
  return [http.get(baseUrl + "/ships", () => HttpResponse.json(shipsMock, { status: 200 }))];
};
