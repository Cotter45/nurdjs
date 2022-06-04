const redis = require("redis");

// const redisClient = redis.createClient({
//   url: process.env.REDIS_URL,
//   auth_pass: process.env.REDIS_PASSWORD,
//   password: process.env.REDIS_PASSWORD
// })
let redisClient: any;
if (process.env.NODE_ENV === "production") {
  redisClient = redis.createClient({
    url: process.env.REDISTOGO_URL,
  });
} else {
  redisClient = redis.createClient({
    url: process.env.REDIS_URL,
    auth_pass: process.env.REDIS_PASSWORD,
    password: process.env.REDIS_PASSWORD
  })
}

(async () => {
  try {
    await redisClient.connect();
  } catch (e) {
      console.log(e);
  }
  await redisClient.set("test", "Redis connected");
  console.log(await redisClient.get("test"));
  redisClient.on('error', (err: Error) => console.log('Redis Client Error', err));
})();

export = redisClient;