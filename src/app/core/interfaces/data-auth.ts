import { LoginRequest } from "./login-request";
import { UserRole } from "./user-role";

export interface DataAuth {
  access_token: string;
  resource: LoginRequest;
  token_type: string;
  expires_at: string;
}
