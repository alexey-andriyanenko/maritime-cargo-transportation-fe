import { IUser } from "./IUser";
import { ICompany } from "./ICompany";

export interface ISession<Fulfilled extends boolean = true> {
  user: IUser;
  company: Fulfilled extends true ? ICompany : null;
}
