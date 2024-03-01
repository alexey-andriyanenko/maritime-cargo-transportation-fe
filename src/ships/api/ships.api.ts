import { httpClient } from "src/shared-module/api";
import { IShip } from "../models";

class ShipsApiService {
  loadShips(): Promise<IShip[]> {
    return httpClient.get<IShip[]>("/ships").send();
  }
}

export const shipsApiService = new ShipsApiService();
