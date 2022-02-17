import { Router } from "express";
import {
  renderIndex,
  createTask,
  about,
  editTask,
  editTaskPost,
  deleteTask,
  toggleDone,
} from "../controllers/tasks.controller.js";

const router = Router();

router.get("/", renderIndex);
router.post("/tasks/add", createTask);

router.get("/about", about);

router.get("/edit/:id", editTask);
router.post("/edit/:id", editTaskPost);

router.get("/Delete/:id", deleteTask);
router.get("/toggleDone/:id", toggleDone);

export default router;
