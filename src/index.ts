import app from "./app";
import { connectToDB } from "./database";
import { PORT } from "./config/config";

async function start() {
  await connectToDB();
  app.listen(process.env.PORT || 3000);

  console.log("Server on port", PORT);
}

start();