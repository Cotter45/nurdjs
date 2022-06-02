"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticRouter = void 0;
const router_1 = require("../../lib/server/router");
const path_1 = __importDefault(require("path"));
const staticRouter = new router_1.Router();
exports.staticRouter = staticRouter;
staticRouter.get('/', [], (req, res) => {
    return res.status(200).sendFile(path_1.default.resolve('dist', 'build', 'index.html'));
});
