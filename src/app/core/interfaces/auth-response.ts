import { DataAuth } from "./data-auth";
import { ResponseApi } from "./response-api";

export interface AuthResponse extends ResponseApi {
  data: DataAuth;
}
