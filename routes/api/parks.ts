import { Router } from "../../lib/server/router";
const { Park } = require('../../db/models');
import { Req } from "../../lib/util/parsers";
import { Res } from "../../lib/server/response";
import { redisClient } from "../../redis"

const parksRouter = new Router();


parksRouter.get('/', [], async (req: Req, res: Res) => {
  // throw new Error('API ROUTE MIDDLEWARE 1');
  // get parks from db
  const parks = await Park.findAll();
  return res.status(200).json(parks);
})

parksRouter.get('/park/:id', [], async (req: Req, res: Res) => {
  const id = req.params.get('id');
  console.log(id, "ID", process.env.NODE_ENV);
  // throw new Error('API ROUTE MIDDLEWARE 1');
  // get parks from db
  const park = await Park.findByPk(+id);
  return res.status(200).json(park);
  // let parks = await redisClient.get('parks');
  // if (parks) return res.status(200).send(parks);

  // parks = await Park.findAll();
  // await redisClient.set('parks', JSON.stringify(parks));
  // return res.status(200).json(parks);
})

export { parksRouter };

