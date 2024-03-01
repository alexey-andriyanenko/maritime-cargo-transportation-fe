import { IEntity } from "src/shared-module/models";
import { IShip } from "./ship";
import { IContainer } from "./container";

export interface IContainerShip extends IShip {
  size: IEntity;
  containers: IContainer[];
}
