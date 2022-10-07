import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma/prisma.module';
import { MessageService } from './message.service';
import { MessageGateway } from './messsage.gateway';
import { MessageRepository } from './repositories/MessageRepository';

@Module({
  imports: [PrismaModule],
  providers: [MessageService, MessageRepository, MessageGateway],
})
export class MessageModule { }
