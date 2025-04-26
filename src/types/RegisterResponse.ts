export interface RegisterResponse {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
  };
}
