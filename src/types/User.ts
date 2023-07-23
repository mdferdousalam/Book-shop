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
  address?: string;
  budget?: number;
  income?: number;
  createdAt?: Date;
  updatedAt?: Date;
  books?: string[]; // Assuming the book IDs are stored as strings
};

export enum UserRole {
  Guest = "guest",
  RegisteredUser = "registeredUser",
  Admin = "admin",
  AuthorPublisher = "authorPublisher",
  Moderator = "moderator",
}

export type IUserLoginInput = {
  email: string;
  password: string;
};