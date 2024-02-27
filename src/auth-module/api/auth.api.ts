import { httpClient } from "src/shared-module/api";
import { ICompany } from "src/auth-module/models";

import { IGetSessionResponse, ILoginRequest } from "./auth.types";

class AuthApiService {
  login(data: ILoginRequest) {
    return httpClient.post<ILoginRequest, void>("/auth/login").send(data);
  }

  getListOfCompanies() {
    return httpClient.get<ICompany[]>("/companies").send();
  }

  fulfillSession(companyId: number) {
    return httpClient.post("/auth/session").send({ companyId });
  }

  getSession() {
    return httpClient.get<IGetSessionResponse>("/auth/session").send();
  }
}

export const authApiService = new AuthApiService();
