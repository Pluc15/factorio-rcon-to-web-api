import { Rcon } from "rcon-client";
import express from "express";
require("dotenv").config();

const app = express();
const port = parseInt(process.env.API_PORT as string);
const rconHost = process.env.RCON_HOST as string;
const rconPort = parseInt(process.env.RCON_PORT as string);
const rconPassword = process.env.RCON_PASSWORD as string;

console.log(rconHost, rconPort, rconPassword);

app.get("/", (req, res) => {
  res.send("TODO");
});

app.get("/player-count", async (req, res) => {
  const rcon = await Rcon.connect({
    host: rconHost,
    password: rconPassword,
    port: rconPort,
  });
  const result = await rcon.send("/players online count");
  res.send(result);
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
