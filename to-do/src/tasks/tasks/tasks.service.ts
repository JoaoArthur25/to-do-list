import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entity/tasks.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repositories/tasks.repository';

@Injectable()
export class TasksService {
  constructor(private readonly repository: TasksRepository) {}

  create(createTaskDto: CreateTaskDto) {
    return this.repository.create(createTaskDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: number): Promise<TaskEntity> {
    return this.repository.findOne(id);
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return this.repository.update(id, updateTaskDto);
  }

  remove(id: number) {
    return this.repository.remove(id);
  }
}
