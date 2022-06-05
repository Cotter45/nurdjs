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
exports.redisClient = void 0;
// const redis = require("redis");
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: process.env.REDIS_URL,
    // auth_pass: process.env.REDIS_PASSWORD,
    password: process.env.REDIS_PASSWORD
});
exports.redisClient = redisClient;
// let redisClient: any;
// if (process.env.NODE_ENV === "production") {
//   redisClient = redis.createClient({
//     url: process.env.REDISTOGO_URL,
//   });
// } else {
//   redisClient = redis.createClient({
//     url: process.env.REDIS_URL,
//     auth_pass: process.env.REDIS_PASSWORD,
//     password: process.env.REDIS_PASSWORD
//   })
// }
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield redisClient.connect();
    }
    catch (e) {
        console.log(e);
    }
    yield redisClient.set("test", "Redis connected");
    console.log(yield redisClient.get("test"));
    redisClient.on('error', (err) => console.log('Redis Client Error', err));
}))();
