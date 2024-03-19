import express from "express";
import { listUsersController } from "./controllers/userController";

const app = express();
const port = 3000;

app.get("/users", listUsersController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
