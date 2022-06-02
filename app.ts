import path from 'path';
import { Server } from "./lib/server";
import { staticRouter } from "./routes/static";
import { apiRouter } from "./routes/api";

const app = new Server();

app.useStatic('/static', path.resolve('dist', 'build'));

app.useRouter("/", staticRouter);
app.useRouter("/api", apiRouter);

export = app;