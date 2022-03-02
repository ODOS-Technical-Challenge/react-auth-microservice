import { UserType } from "./user.type";

export interface UserContextType {
  user: UserType;
  token: string;
  isAuthorized: (roles?: string[]) => boolean;
  init: () => Promise<void>;
}
