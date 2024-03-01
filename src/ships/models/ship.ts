import { IEntity } from "src/shared-module/models/entity";

export interface IShip {
  id: number;
  name: string;
  flag: IEntity;
  type: IEntity;
}
