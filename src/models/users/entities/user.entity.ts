export class User {
  admin: boolean;
  login: string;
  password: string;

  constructor(data: { admin: boolean; login: string; password: string }) {
    this.admin = data.admin;
    this.login = data.login;
    this.password = data.password;
  }
}
