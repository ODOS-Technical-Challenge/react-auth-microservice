export interface RoleType {
  name: string;
}

export interface UserType {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;

  realmRoles: RoleType[];
  groups: string[];
}
