"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const path_1 = __importDefault(require("path"));
const server_1 = require("./lib/server");
const static_1 = require("./routes/static");
const api_1 = require("./routes/api");
const cors_1 = require("./lib/middleware/cors");
const cookie_parser_1 = require("./lib/middleware/cookie-parser");
const app = new server_1.Server();
app.useStatic('/static', path_1.default.resolve('dist', 'build'));
app.useRouter("/", static_1.staticRouter);
app.useRouter("/api", api_1.apiRouter);
app.use((0, cors_1.cors)());
app.use((0, cookie_parser_1.cookieParser)());
module.exports = app;
