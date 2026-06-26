import { Request, Response } from "express";
import { NotificationService } from "../services/notification.service";

const service = new NotificationService();

export class NotificationController {
  // Create Notification
  async create(req: Request, res: Response) {
    try {
      const notification = await service.create(req.body);

      return res.status(201).json({
        success: true,
        data: notification,
      });
    } catch (error: any) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get Paginated Notifications
  async getPaginated(req: Request, res: Response) {
    try {
      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;

      const notifications = await service.getPaginated(page, limit);

      return res.status(200).json({
        success: true,
        page,
        limit,
        data: notifications,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Get Notification By ID
  async getById(req: Request, res: Response) {
    try {
      const notification = await service.getById(
        Number(req.params.id)
      );

      return res.status(200).json({
        success: true,
        data: notification,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Mark Single Notification As Read
  async markAsRead(req: Request, res: Response) {
    try {
      const notification = await service.markAsRead(
        Number(req.params.id)
      );

      return res.status(200).json({
        success: true,
        data: notification,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Mark All Notifications As Read
  async markAllRead(req: Request, res: Response) {
    try {
      const result = await service.markAllRead(
        Number(req.params.userId)
      );

      return res.status(200).json({
        success: true,
        message: "All notifications marked as read",
        updatedCount: result.count,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  
  // Delete Notification
  async delete(req: Request, res: Response) {
    try {
      await service.delete(Number(req.params.id));

      return res.status(200).json({
        success: true,
        message: "Notification deleted successfully",
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}