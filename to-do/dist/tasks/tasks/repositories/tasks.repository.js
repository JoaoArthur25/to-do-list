"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../prisma/prisma.service");
const NotFoundError_1 = require("../../../common/errors/types/NotFoundError");
let TasksRepository = class TasksRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createTaskDto) {
        const { userId } = createTaskDto;
        delete createTaskDto.userId;
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
        });
        if (!user) {
            throw new NotFoundError_1.NotFoundError('Author not found');
        }
        const data = Object.assign(Object.assign({}, createTaskDto), { user: {
                connect: {
                    id: userId,
                },
            } });
        return this.prisma.task.create({
            data,
        });
    }
    async findAll() {
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
    async findOne(id) {
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
    async update(id, updateTaskDto) {
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
            throw new NotFoundError_1.NotFoundError('Author not found');
        }
        const data = Object.assign(Object.assign({}, updateTaskDto), { user: {
                connect: {
                    id: userId,
                },
            } });
        return this.prisma.task.update({
            where: {
                id,
            },
            data,
        });
    }
    async remove(id) {
        return this.prisma.task.delete({
            where: {
                id,
            },
        });
    }
};
TasksRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TasksRepository);
exports.TasksRepository = TasksRepository;
//# sourceMappingURL=tasks.repository.js.map