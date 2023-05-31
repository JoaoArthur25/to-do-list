"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleDatabaseErrors = void 0;
const DatabaseError_1 = require("../types/DatabaseError");
const UniqueConstraintError_1 = require("../types/UniqueConstraintError");
var PrismaErrors;
(function (PrismaErrors) {
    PrismaErrors["UniqueConstraintFail"] = "P2002";
})(PrismaErrors || (PrismaErrors = {}));
const handleDatabaseErrors = (e) => {
    console.log(e);
    if (e) {
        if (e.code === PrismaErrors.UniqueConstraintFail) {
            return new UniqueConstraintError_1.UniqueConstraintError(e);
        }
        if (e.message) {
            return new DatabaseError_1.DatabaseError(e.message);
        }
    }
    return new Error('Unknown error occurred');
};
exports.handleDatabaseErrors = handleDatabaseErrors;
//# sourceMappingURL=handle-database-errors.util.js.map