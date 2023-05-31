"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueConstraintError = void 0;
const ConflictError_1 = require("./ConflictError");
class UniqueConstraintError extends ConflictError_1.ConflictError {
    constructor(e) {
        const uniqueFields = e.meta.target;
        super(`A record with this ${uniqueFields} already exists.`);
    }
}
exports.UniqueConstraintError = UniqueConstraintError;
//# sourceMappingURL=UniqueConstraintError.js.map