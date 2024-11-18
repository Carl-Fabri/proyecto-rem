import { UserRole } from "./user-role";

export interface LoginRequest {
  sub: number;
  name: string;
  email :string;
  roles: UserRole[];
}
