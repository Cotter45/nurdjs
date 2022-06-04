import { Router } from "../../lib/server/router";
const { Park } = require('../../db/models');
import { Req } from "../../lib/util/parsers";
import { Res } from "../../lib/server/response";

const testRouter = new Router();

const data = {
  wow: "I can't believe this is an api!"
}

const data2 = {
  wow: "I can't believe this is middleware!"
}

const mid1 = async (req: Req, res: Res, next: Function) => {
  // console.log('API ROUTE MIDDLEWARE 1');
  return res.status(200).json(data2);
  // return next();
}

testRouter.get('/', [], async (req: Req, res: Res) => {
  // throw new Error('API ROUTE MIDDLEWARE 1');
  // get parks from db
  const parks = await Park.findAll();
  return res.status(200).json(parks);
})

testRouter.get('/poop/:id', [], async (req: Req, res: Res) => {
  const id = req.params.get('id');
  console.log(id, "ID");
  return res.status(200).json(data);
})

export { testRouter };

