import { Injectable } from '@nestjs/common';
import { Message } from './message.entity';
import { MessageRepository } from './repositories/MessageRepository';

@Injectable()
export class MessageService {
  constructor(private messageRepository: MessageRepository) { }

  public async getAllMessages(): Promise<Message[]> {
    return await this.messageRepository.getAllMessages();
  }

  public async createMessages(
    sender: string,
    message: string,
  ): Promise<Message> {
    const messageCreate = await this.messageRepository.createMessages(
      sender,
      message,
    );
    return messageCreate;
  }
}
