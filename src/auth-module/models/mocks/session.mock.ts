import { ISession } from "../session";
import { userMock } from "./user.mock";
import { companyMock } from "./company.mock";

export const notFulfilledSessionMock: ISession<false> = {
  user: userMock,
  company: null,
};

export const fulfilledSessionMock: ISession = {
  user: userMock,
  company: companyMock,
};
