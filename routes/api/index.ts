import { Router } from "../../lib/server/router";
import { testRouter } from "./test";

const apiRouter = new Router();
apiRouter.useRouter("/test", testRouter);

export { apiRouter};

