import { Router } from "../../lib/server/router";
import path from "path";

const staticRouter = new Router();

staticRouter.get('/', [], (req: Req, res: Res) => {
  return res.status(200).sendFile(path.resolve('dist', 'build', 'index.html'));
})

export { staticRouter };