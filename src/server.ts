import express from "express";
import { CreateCourse } from "./routes";

const app = express();

/* app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
}); */
app.get('/', CreateCourse)

app.listen(2222);
