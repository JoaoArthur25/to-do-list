import { user } from '@prisma/client';

export class UserEntity implements user {
  id: number;
  email: string;
  name: string;
  admin: boolean;
  createdAt: Date;
}
