import { Router } from "../../nurdjs";
import { testRouter } from "./test";

const apiRouter = new Router();
apiRouter.useRouter("/test", testRouter);

export { apiRouter};

