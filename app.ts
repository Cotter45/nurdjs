import path from 'path';
import { Server } from "./lib/server";
import { staticRouter } from "./routes/static";
import { apiRouter } from "./routes/api";
import { cors } from './lib/middleware/cors';
import { cookieParser } from './lib/middleware/cookie-parser';

const app = new Server();

app.useStatic('/static', path.resolve('dist', 'build'));

app.useRouter("/", staticRouter);
app.useRouter("/api", apiRouter);
app.use(cors());
app.use(cookieParser());

export = app;