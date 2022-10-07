import { IsOptional, IsString } from 'class-validator';
export class Message {
  @IsString()
  @IsOptional()
  id: string;

  @IsString()
  sender: string;

  @IsString()
  message: string;
}
