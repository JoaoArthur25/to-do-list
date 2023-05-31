import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { TaskEntity } from '../entity/tasks.entity';
import { UpdateTaskDto } from '../dto/update-task.dto';
export declare class TasksRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createTaskDto: CreateTaskDto): Promise<TaskEntity>;
    findAll(): Promise<TaskEntity[]>;
    findOne(id: number): Promise<TaskEntity>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity>;
    remove(id: number): Promise<TaskEntity>;
}
