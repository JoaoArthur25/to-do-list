import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UserController } from './users.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService, UsersRepository],
})
export class UserModule {}
