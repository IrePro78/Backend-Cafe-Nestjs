export interface RegisterUserResponse {
  name: string;
  email: string;
  id: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  password: string;
  role?: string;
}