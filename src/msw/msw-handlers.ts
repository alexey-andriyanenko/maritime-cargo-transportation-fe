import { apiUrl } from "src/shared-module/constants";

import { createAuthMockHandlers } from "src/auth-module/api/mocks";
import { createShipsMockHandlers } from "src/ships/api/mocks";

export const createHandlers = () => {
  return [...createAuthMockHandlers(apiUrl), ...createShipsMockHandlers(apiUrl)];
};
