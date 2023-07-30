const express = require("express");
const app = express();
const server = require("http").createServer(app);

app.use(express.json()); /* bodyParser.json() is deprecated */


app.get("/gethello", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.status(200).send({
    message: "hello node",
  });
});


server.listen(2000, () => {
  console.log(`Server is running on port 2000.`);
});
