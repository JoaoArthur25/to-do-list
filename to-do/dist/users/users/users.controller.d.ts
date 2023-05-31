import { UserService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./entity/user.entity").UserEntity>;
    findAll(): Promise<import("./entity/user.entity").UserEntity[]>;
    findOne(id: number): Promise<import("./entity/user.entity").UserEntity>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./entity/user.entity").UserEntity>;
    remove(id: number): Promise<import("./entity/user.entity").UserEntity>;
}
