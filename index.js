const redis = require("redis");
//port Number
const client = redis.createClient();

client.on("error", function (error) {
  console.error(err);
});

client.hmset("fruit", {
  lemon: 500,
  apple: 600,
});

client.hgetall("fruit", (err, res) => {
  console.log(res);
});
