import { PrismaService } from '../../prisma/prisma/prisma.service';
import { Message } from '../message.entity';
import { IMessageRepository } from './interfaces/IMessageRepository';

export class MessageRepository implements IMessageRepository {
  constructor(private prisma: PrismaService) { }

  public createMessages(sender: string, message: string): Promise<Message> {
    const messageCreate = this.prisma.message.create({
      data: {
        sender: sender,
        message: message,
      },
    });
    return messageCreate;
  }

  public async getAllMessages(): Promise<Message[]> {
    const listAdmin = await this.prisma.message.findMany();
    return listAdmin;
  }
}
