import { Task } from '@prisma/client';
export declare class TaskEntity implements Task {
    content: string;
    updatedAt: Date;
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    createdAt: Date;
}
