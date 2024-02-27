import { httpClient } from "src/shared-module/api";

class ShipsApiService {
  getListOfContainerShips() {
    return httpClient.get("/container-ships").send();
  }
}

export const shipsApiService = new ShipsApiService();
