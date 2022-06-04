import { Router } from "../../lib/server/router";
import { testRouter } from "./test";
import { parksRouter } from "./parks";

const apiRouter = new Router();
apiRouter.useRouter("/test", testRouter);
apiRouter.useRouter("/parks", parksRouter);

export { apiRouter};

