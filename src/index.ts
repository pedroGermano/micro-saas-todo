import express from "express";
import { findOneUserController, listUsersController } from "./controllers/userController";

const app = express();
const port = 3000;

app.get("/users", listUsersController);
app.get("/users/:userId", findOneUserController)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

