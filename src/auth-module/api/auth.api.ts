import { httpClient } from "src/shared-module/api";

import { ISignInRequest } from "./auth.types";

class AuthApiService {
  signIn(data: ISignInRequest) {
    return httpClient.post<ISignInRequest, void>("/auth/sign-in").send(data);
  }
}

export const authApiService = new AuthApiService();
