import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();
const controller = new UserController();

router.post("/", controller.create.bind(controller));

router.get("/", controller.getAll.bind(controller));

router.get("/:id", controller.getById.bind(controller));

router.delete("/:id", controller.delete.bind(controller));

export default router;