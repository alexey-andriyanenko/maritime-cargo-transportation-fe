import { HttpMessage } from "./http-message";

export class HttpClient {
  constructor(private _baseUrl: string) {}

  public static token = null;
  public get<Response, Path extends string = string>(url: Path) {
    return HttpMessage.create<never, Response, "get", Path>((this._baseUrl + url) as Path, "get");
  }

  public post<Request, Response, Path extends string = string>(url: Path) {
    return HttpMessage.create<Request, Response, "post", Path>(
      (this._baseUrl + url) as Path,
      "post",
    );
  }

  public put<Request, Response, Path extends string = string>(url: Path) {
    return HttpMessage.create<Request, Response, "put", Path>((this._baseUrl + url) as Path, "put");
  }

  public delete<Response, Path extends string = string>(url: Path) {
    return HttpMessage.create<never, Response, "delete", Path>(
      (this._baseUrl + url) as Path,
      "delete",
    );
  }
}
