import { Module } from '@nestjs/common';
import { MessageModule } from './message/message.module';
import { PrismaModule } from './prisma/prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({ rootPath: `${process.cwd()}/public` }),
    PrismaModule,
    MessageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
