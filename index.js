import express from "express";
import cors from "cors";
import { getComputingCourses, getAllCourses } from "./services/coursesServices.js"
const PORT = 3000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  res.send({ message: "test" });
});

app.get("/cursos/todos", async (req, res) => {
  const content = await getAllCourses();

  res.send(content);
});

app.get("/cursos/informatica", async (req, res) => {
  const content = await getComputingCourses();

  res.send(content);
});

app.get("/cursos/diversos", (req, res) => {
  res.send({ message: "test" });
});

app.get("/cursos/musica", (req, res) => {
  res.send({ message: "test" });
});

app.get("/cursos/sports", (req, res) => {
  res.send({ message: "test" });
});

app.listen(PORT, console.log(`Servidor rodando na porta ${PORT}`));
