import { makeAutoObservable, runInAction } from "mobx";

import { eventBus } from "src/event-bus";

import { authApiService, ISignInRequest } from "../api";

class AuthStore {
  private _isLogged = !!localStorage.getItem("token");

  constructor() {
    makeAutoObservable(this);
    eventBus.on("logout", this._clear.bind(this));
  }

  public get isLogged() {
    return this._isLogged;
  }

  async signIn(data: ISignInRequest): Promise<void> {
    await authApiService.signIn(data);

    runInAction(() => {
      this._isLogged = true;
      eventBus.emit("login");
    });
  }

  private _clear() {
    this._isLogged = false;
  }
}

export const authStore = new AuthStore();
