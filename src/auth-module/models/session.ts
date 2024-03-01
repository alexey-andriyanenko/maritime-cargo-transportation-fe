import { IUser } from "./user";
import { ICompany } from "./company";

export interface ISession<Fulfilled extends boolean = true> {
  user: IUser;
  company: Fulfilled extends true ? ICompany : null;
}
