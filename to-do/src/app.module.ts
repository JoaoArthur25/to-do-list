import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './users/users/users.module';
import { AppController } from './app.controller';
import { TasksModule } from './tasks/tasks/tasks.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, TasksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
