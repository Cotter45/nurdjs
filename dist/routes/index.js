"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const router_1 = require("../lib/server/router");
const path_1 = __importDefault(require("path"));
const index_1 = require("./api/index");
const router = new router_1.Router();
exports.router = router;
router.get('/', [], (req, res) => {
    return res.status(200).sendFile(path_1.default.resolve('dist', 'build', 'index.html'));
});
router.addRouter("/api", index_1.apiRouter);
