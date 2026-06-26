import prisma from "../config/database";

export interface CreateUserDto {
  name: string;
  email: string;
}

export class UserRepository {
  async create(data: CreateUserDto) {
    return prisma.user.create({
      data,
    });
  }

  async findAll() {
    return prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findById(id: number) {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async delete(id: number) {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }
}