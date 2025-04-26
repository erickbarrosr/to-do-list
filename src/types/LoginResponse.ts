export interface LoginResponse {
  message: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}
