import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("./entity/tasks.entity").TaskEntity>;
    findAll(): Promise<import("./entity/tasks.entity").TaskEntity[]>;
    findOne(id: string): Promise<import("./entity/tasks.entity").TaskEntity>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("./entity/tasks.entity").TaskEntity>;
    remove(id: string): Promise<import("./entity/tasks.entity").TaskEntity>;
}
