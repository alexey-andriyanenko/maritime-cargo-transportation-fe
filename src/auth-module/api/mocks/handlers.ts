import { http, HttpResponse } from "msw";

import { fulfilledSessionMock } from "src/auth-module/models/mocks";
import { companiesMock } from "./companies.mock";

export const createAuthMockHandlers = (baseUrl: string) => {
  return [
    http.post(baseUrl + "/auth/login", () => HttpResponse.json(null, { status: 200 })),
    http.post(baseUrl + "/auth/session", () => HttpResponse.json(null, { status: 200 })),
    http.get(baseUrl + "/companies", () => HttpResponse.json(companiesMock, { status: 200 })),
    http.get(baseUrl + "/auth/session", () =>
      HttpResponse.json(fulfilledSessionMock, { status: 200 }),
    ),
  ];
};
