export type IUser = {
   id?: string;
  phoneNumber?: string;
  email?: string;
  role?: UserRole;
  password?: string;
  name?: {
    firstName?: string;
    lastName?: string;
  };
  createdAt?: Date;
  updatedAt?: Date;
};

export enum UserRole {
  RegisteredUser = "registeredUser",
  Admin = "admin",
  AuthorPublisher = "authorPublisher",
  Moderator = "moderator",
}

export type IUserLoginInput = {
  email: string;
  password: string;
};

export type IUserLoginResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    accessToken: string;
  };
};