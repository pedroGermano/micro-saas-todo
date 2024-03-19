import express from "express";
import {
  createUserController,
  findOneUserController,
  listUsersController,
} from "./controllers/userController";
import { createTodoController } from "./controllers/todoController";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/users", listUsersController);
app.get("/users/:userId", findOneUserController);
app.post("/users", createUserController);
app.post("/todos", createTodoController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
