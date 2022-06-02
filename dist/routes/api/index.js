"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const nurdjs_1 = require("../../nurdjs");
const test_1 = require("./test");
const apiRouter = new nurdjs_1.Router();
exports.apiRouter = apiRouter;
apiRouter.useRouter("/test", test_1.testRouter);
