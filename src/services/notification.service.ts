import {
  CreateNotificationDto,
  NotificationRepository,
} from "../repositories/notification.repository";

export class NotificationService {
  private repository = new NotificationRepository();

  async create(data: CreateNotificationDto) {
    return this.repository.create(data);
  }

  async getAll() {
    return this.repository.findAll();
  }

  async getById(id: number) {
    return this.repository.findById(id);
  }

  async markAsRead(id: number) {
    return this.repository.markAsRead(id);
  }

 async getPaginated(page: number, limit: number) {
    return this.repository.findPaginated(page, limit);
}


async markAllRead(userId: number) {
    return this.repository.markAllRead(userId);
}

  async delete(id: number) {
    return this.repository.delete(id);
  }
}

