import { DataAuth } from "./data-auth";

export interface AuthResponse {
  statusCode: number;
  data: DataAuth;
  message: string;
  success: boolean;
}
