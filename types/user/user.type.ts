export type User = {
  userId: string;
  username: string;
  email: string;
  contactNumber: string;
  password: string;
  role?: string;
};

export type RegisterUserResponse = {
  username: string;
  email: string;
  userId: string;
};

export type GetListUsersResponse = User[];
export type GetOneUserResponse = User;
