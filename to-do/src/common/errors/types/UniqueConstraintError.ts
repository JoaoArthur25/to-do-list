import { ConflictError } from './ConflictError';
import { PrismaClientError } from './PrismaClientError';

export class UniqueConstraintError extends ConflictError {
  constructor(e: PrismaClientError) {
    const uniqueFields = e.meta.target;
    super(`A record with this ${uniqueFields} already exists.`);
  }
}
