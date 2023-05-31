import { DatabaseError } from '../types/DatabaseError';
import { PrismaClientError } from '../types/PrismaClientError';
import { UniqueConstraintError } from '../types/UniqueConstraintError';

enum PrismaErrors {
  UniqueConstraintFail = 'P2002',
}

export const handleDatabaseErrors = (e: PrismaClientError): Error => {
  console.log(e);
  if (e) {
    if (e.code === PrismaErrors.UniqueConstraintFail) {
      return new UniqueConstraintError(e);
    }

    if (e.message) {
      return new DatabaseError(e.message);
    }
  }

  return new Error('Unknown error occurred');
};
