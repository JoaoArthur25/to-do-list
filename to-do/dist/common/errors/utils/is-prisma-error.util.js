"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrismaError = void 0;
const isPrismaError = (e) => {
    return (typeof e.code === 'string' &&
        typeof e.clientVersion === 'string' &&
        (typeof e.meta === 'object' || e.meta === 'undefined'));
};
exports.isPrismaError = isPrismaError;
//# sourceMappingURL=is-prisma-error.util.js.map