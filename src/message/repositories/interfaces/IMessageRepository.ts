import { Message } from '../../message.entity';

export interface IMessageRepository {
  getAllMessages(): Promise<Message[]>;
  createMessages(sender: string, message: string): Promise<Message>;
}
