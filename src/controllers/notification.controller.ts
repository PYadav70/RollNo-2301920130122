import prisma from "../config/database";
import {
  NotificationPriority,
  NotificationType,
} from "@prisma/client";

export interface CreateNotificationDto {
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  userId: number;
}

export class NotificationRepository {
  // Create Notification
  async create(data: CreateNotificationDto) {
    return prisma.notification.create({
      data,
      include: {
        user: true,
      },
    });
  }

  // Get All Notifications
  async findAll() {
    return prisma.notification.findMany({
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Get Notification By ID
  async findById(id: number) {
    return prisma.notification.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
      },
    });
  }

  // Pagination
  async findPaginated(page: number, limit: number) {
    return prisma.notification.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        user: true,
      },
    });
  }

  // Get Unread Notifications
  async getUnread(userId: number) {
    return prisma.notification.findMany({
      where: {
        userId,
        isRead: false,
      },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  // Count Unread Notifications
  async unreadCount(userId: number) {
    return prisma.notification.count({
      where: {
        userId,
        isRead: false,
      },
    });
  }

  // Mark Single Notification Read
  async markAsRead(id: number) {
    return prisma.notification.update({
      where: {
        id,
      },
      data: {
        isRead: true,
      },
    });
  }

  // Mark All Notifications Read
  async markAllRead(userId: number) {
    return prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });
  }

  // Delete Notification
  async delete(id: number) {
    return prisma.notification.delete({
      where: {
        id,
      },
    });
  }
}