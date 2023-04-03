export interface RegisterUserResponse {
  username: string;
  email: string;
  userId: string;
}

export type User = {
  userId: string;
  username: string;
  email: string;
  contactNumber: string;
  password: string;
  role?: string;
};
