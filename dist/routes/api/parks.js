"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parksRouter = void 0;
const router_1 = require("../../lib/server/router");
const { Park } = require('../../db/models');
const parksRouter = new router_1.Router();
exports.parksRouter = parksRouter;
parksRouter.get('/', [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // throw new Error('API ROUTE MIDDLEWARE 1');
    // get parks from db
    const parks = yield Park.findAll();
    return res.status(200).json(parks);
}));
parksRouter.get('/park/:id', [], (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.get('id');
    console.log(id, "ID", process.env.NODE_ENV);
    // throw new Error('API ROUTE MIDDLEWARE 1');
    // get parks from db
    const park = yield Park.findByPk(+id);
    return res.status(200).json(park);
    // let parks = await redisClient.get('parks');
    // if (parks) return res.status(200).send(parks);
    // parks = await Park.findAll();
    // await redisClient.set('parks', JSON.stringify(parks));
    // return res.status(200).json(parks);
}));
