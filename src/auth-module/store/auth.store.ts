import { makeAutoObservable, runInAction } from "mobx";

import { eventBus } from "src/event-bus";

import { authApiService, ILoginRequest } from "../api";
import { ICompany } from "../models";

class AuthStore {
  private _isLogged = false;
  private _isCompanySelected = false;

  private _companies: ICompany[] = [];

  constructor() {
    makeAutoObservable(this);
    eventBus.on("logout", this._clear.bind(this));
  }

  public get isLogged() {
    return this._isLogged;
  }

  public get isCompanySelected() {
    return this._isCompanySelected;
  }

  public get companies() {
    return this._companies;
  }

  async checkSession() {
    try {
      const result = await authApiService.getSession();

      runInAction(() => {
        this._isLogged = !!result.user;
        this._isCompanySelected = !!result.company;
      });
    } catch (e) {
      eventBus.emit("logout");
    }
  }

  async login(data: ILoginRequest): Promise<void> {
    await authApiService.login(data);

    runInAction(() => {
      this._isLogged = true;
      eventBus.emit("login");
    });
  }

  async getListOfCompanies(): Promise<void> {
    const result = await authApiService.getListOfCompanies();

    runInAction(() => {
      this._companies = result;
    });
  }

  async fulfillSession(companyId: number): Promise<void> {
    await authApiService.fulfillSession(companyId);

    runInAction(() => {
      this._isCompanySelected = true;
    });
  }

  private _clear() {
    this._isLogged = false;
    this._isCompanySelected = false;
  }
}

export const authStore = new AuthStore();
