import { Request, Response } from "express";
import { UserService } from "../services/user.services";

const service = new UserService();

export class UserController {
  async create(req: Request, res: Response) {
    try {
      const user = await service.createUser(req.body);

      return res.status(201).json({
        success: true,
        data: user,
      });
    } catch (err: any) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }

  async getAll(req: Request, res: Response) {
    const users = await service.getUsers();

    return res.json({
      success: true,
      data: users,
    });
  }

  async getById(req: Request, res: Response) {
    const user = await service.getUser(Number(req.params.id));

    return res.json({
      success: true,
      data: user,
    });
  }

  async delete(req: Request, res: Response) {
    await service.deleteUser(Number(req.params.id));

    return res.json({
      success: true,
      message: "User deleted successfully",
    });
  }
}