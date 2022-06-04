import { Router } from "../../lib/server/router";
const { Park } = require('../../db/models');
import { Req } from "../../lib/util/parsers";
import { Res } from "../../lib/server/response";

const parksRouter = new Router();


parksRouter.get('/', [], async (req: Req, res: Res) => {
  // throw new Error('API ROUTE MIDDLEWARE 1');
  // get parks from db
  const parks = await Park.findAll();
  return res.status(200).json(parks);
})

parksRouter.get('/test/:id', [], async (req: Req, res: Res) => {
  const id = req.params.get('id');
  console.log(id, "ID");
  // throw new Error('API ROUTE MIDDLEWARE 1');
  // get parks from db
  const parks = await Park.findAll();
  return res.status(200).json({ test: 'test' });
})

export { parksRouter };

