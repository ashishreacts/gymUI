import { APIResponse } from "@/types/api";

type UserPrefix = "MR" | "MRS" | "MISS";
type Role = "USER" | "SUPERADMIN" | "ADMIN";

type UserRole = {
  id: string;
  role: Role;
  userId: string;
  createdAt: string;
};

export type AuthUser = {
  id: string;
  prefix: UserPrefix;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  userRoles: UserRole[];
};

type Token = {
  accessToken: string;
};

type LoginResponse = {
  entity: {
    token: Token;
    user: AuthUser;
  };
};

export type LoginResponseDTO = APIResponse<LoginResponse>;
