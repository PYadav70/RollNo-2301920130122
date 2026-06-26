import { Router } from "express";
import NotificationController from "../controllers/notification.controller";

const router = Router();
const controller = new NotificationController();

router.post("/", controller.create.bind(controller));

router.get("/", controller.getPaginated.bind(controller));

router.patch( "/read-all/:userId",controller.markAllRead.bind(controller)
);
router.get("/:id", controller.getById.bind(controller));

router.patch("/:id/read", controller.markAsRead.bind(controller));

router.delete("/:id", controller.delete.bind(controller));

export default router;