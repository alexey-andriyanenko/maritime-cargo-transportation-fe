import { rest } from "msw";

import { fulfilledSessionMock } from "src/auth-module/models/mocks";
import { companiesMock } from "./companies.mock";

export const createAuthMockHandlers = (baseUrl: string) => {
  return [
    rest.post(baseUrl + "/auth/login", (req, res, ctx) => {
      return res(ctx.status(200));
    }),
    rest.post(baseUrl + "/auth/session", (req, res, ctx) => {
      return res(ctx.status(200));
    }),
    rest.get(baseUrl + "/companies", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(companiesMock));
    }),
    rest.get(baseUrl + "/auth/session", (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(fulfilledSessionMock));
    }),
  ];
};
