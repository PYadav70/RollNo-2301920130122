import { UserRepository, CreateUserDto } from "../repositories/user.repository";

export class UserService {
  private repository = new UserRepository();

  async createUser(data: CreateUserDto) {
    const existing = await this.repository.findByEmail(data.email);

    if (existing) {
      throw new Error("User already exists");
    }

    return this.repository.create(data);
  }

  async getUsers() {
    return this.repository.findAll();
  }

  async getUser(id: number) {
    return this.repository.findById(id);
  }

  async deleteUser(id: number) {
    return this.repository.delete(id);
  }
}