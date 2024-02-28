import { makeAutoObservable, runInAction } from "mobx";

import { eventBus } from "src/event-bus";

import { authApiService, ILoginRequest } from "../api";
import { ICompany, ISession } from "../models";

class AuthStore {
  private _isLogged = false;
  private _isSessionFulfilled = false;

  private _companies: ICompany[] = [];

  constructor() {
    makeAutoObservable(this);
    eventBus.on("logout", this._clear.bind(this));
  }

  public get isLogged() {
    return this._isLogged;
  }

  public get isSessionFulfilled() {
    return this._isSessionFulfilled;
  }

  public get companies() {
    return this._companies;
  }

  async checkSession() {
    try {
      const result = await authApiService.getSession();

      runInAction(() => {
        this._isLogged = !!result.user;
        this._isSessionFulfilled = !!result.company;
      });
    } catch (e) {
      eventBus.emit("logout");
    }
  }

  async login(data: ILoginRequest): Promise<void> {
    await authApiService.login(data);

    runInAction(() => {
      this._isLogged = true;
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
      this._isSessionFulfilled = true;
      eventBus.emit("session-fulfilled");
    });
  }

  private _clear() {
    this._isLogged = false;
    this._isSessionFulfilled = false;
  }
}

export const authStore = new AuthStore();
