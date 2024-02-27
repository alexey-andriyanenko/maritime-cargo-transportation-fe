import { ICompany } from "../models";
import { IUser } from "../models/IUser";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IGetSessionResponse {
  user: IUser;
  company?: ICompany;
}
export interface IGetListOfCompaniesResponse {
  id: number;
  name: string;
}
