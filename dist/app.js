"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
// import { Server } from "./lib/server";
const nurdjs_1 = require("./nurdjs");
const static_1 = require("./routes/static");
const api_1 = require("./routes/api");
const app = new nurdjs_1.Server();
app.useStatic('/static', path_1.default.resolve('dist', 'build'));
app.useRouter("/", static_1.staticRouter);
app.useRouter("/api", api_1.apiRouter);
module.exports = app;
