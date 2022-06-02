import { Router } from "../../nurdjs";

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

testRouter.get('/', [mid1], (req: Req, res: Res) => {
  return res.status(200).json(data);
})

testRouter.get('/poop/:id', [], (req: Req, res: Res) => {
  const id = req.params.get('id');
  console.log(id, "ID");
  return res.status(200).json(data);
})

export { testRouter };

