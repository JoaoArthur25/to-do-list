import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskEntity } from '../entity/tasks.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { Prisma } from '@prisma/client';
import { NotFoundError } from 'src/common/errors/types/NotFoundError';

@Injectable()
export class TasksRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { userId } = createTaskDto;

    delete createTaskDto.userId;

    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundError('Author not found');
    }
    const data: Prisma.TaskCreateInput = {
      ...createTaskDto,
      user: {
        connect: {
          id: userId,
        },
      },
    };
    return this.prisma.task.create({
      data,
    });
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.prisma.task.findMany({
      include: {
        user: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<TaskEntity> {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity> {
    const { userId } = updateTaskDto;
    if (!userId) {
      return this.prisma.task.update({
        data: updateTaskDto,
        where: {
          id,
        },
      });
    }

    delete updateTaskDto.userId;
    const user = await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new NotFoundError('Author not found');
    }

    const data: Prisma.TaskUpdateInput = {
      ...updateTaskDto,
      user: {
        connect: {
          id: userId,
        },
      },
    };

    return this.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: number): Promise<TaskEntity> {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
