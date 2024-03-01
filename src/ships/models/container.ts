import { IEntity } from "src/shared-module/models";
import { ICargo } from "./cargo";

export interface IContainer {
  id: number;
  shipId: number;
  type: IEntity;
  cargo: ICargo;
}
