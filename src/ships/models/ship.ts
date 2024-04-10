import { IEntity, ICountry } from "src/shared-module/models";

export interface IShip {
  id: number;
  name: string;
  country: ICountry;
  type: IEntity;
}
