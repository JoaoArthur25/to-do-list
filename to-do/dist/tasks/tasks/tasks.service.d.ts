import { CreateTaskDto } from './dto/create-task.dto';
import { TaskEntity } from './entity/tasks.entity';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksRepository } from './repositories/tasks.repository';
export declare class TasksService {
    private readonly repository;
    constructor(repository: TasksRepository);
    create(createTaskDto: CreateTaskDto): Promise<TaskEntity>;
    findAll(): Promise<TaskEntity[]>;
    findOne(id: number): Promise<TaskEntity>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<TaskEntity>;
    remove(id: number): Promise<TaskEntity>;
}
