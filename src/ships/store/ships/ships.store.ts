import { makeAutoObservable, runInAction } from "mobx";

import { IShip, TShipsFilters } from "src/ships/models";
import { shipsApiService } from "src/ships/api";

import { eventBus } from "src/event-bus";

class ShipsStore {
  private _ships: IShip[] = [];
  private _totalPages = 0;
  private _totalCount = 0;
  private _isLoading = false;
  private _filters: TShipsFilters = {
    page: 1,
    limit: 10,
  };
  private _details: IShip | null = null;

  constructor() {
    makeAutoObservable(this);
    eventBus.on("logout", this._clear.bind(this));
  }

  public get ships() {
    return this._ships;
  }

  public get totalPages() {
    return this._totalPages;
  }

  public get totalCount() {
    return this._totalCount;
  }

  public get isLoading() {
    return this._isLoading;
  }

  public get filters() {
    return this._filters;
  }

  public get details() {
    return this._details;
  }

  public async loadShips() {
    runInAction(() => {
      this._isLoading = true;
    });

    try {
      const result = await shipsApiService.loadShips();

      runInAction(() => {
        this._ships = result;
      });
    } catch (e) {
      console.error(e);
    } finally {
      runInAction(() => {
        this._isLoading = false;
      });
    }
  }

  public async loadDetails(id: number) {
    this._details = await shipsApiService.loadDetails(id);
  }

  private _clear() {
    this._ships = [];
    this._totalPages = 0;
    this._totalCount = 0;
    this._isLoading = false;
    this._filters = {
      page: 1,
      limit: 10,
    };
  }
}

export const shipsStore = new ShipsStore();
