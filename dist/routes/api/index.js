"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const router_1 = require("../../lib/server/router");
const test_1 = require("./test");
const apiRouter = new router_1.Router();
exports.apiRouter = apiRouter;
apiRouter.useRouter("/test", test_1.testRouter);
