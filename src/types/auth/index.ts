export interface SignUpTypes {
  username: string;
  email: string;
  password: string;
}

export interface LoginTypes {
  email: string;
  password: string;
}

export interface dataUser {
  id: string;
  username: string;
  email: string;
  password: string;
  amount: number;
  capital: number;
}

export interface payloadToken {
  id: string;
  username: string;
  email: string;
}

export interface ResponseApiUser {
  status: "failed" | "success";
  statusCode: number;
  message: string;
  data?: any;
}
