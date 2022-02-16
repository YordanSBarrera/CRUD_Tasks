import { Router } from "express";
import Task from "../models/Task";

const router = Router();

router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  // console.log(tasks, "++++INDEX++++");

  res.render("index", { tasks: tasks });
  // res.render("index");
});
router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    // console.log(task, "++++BUSKEDA+++++");
    res.render("edit", { task });
  } catch (err) {
    console.log(err, "++ERROR++");
  }
});
router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id, "++ID", req.body);
  try {
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (e) {
    console.log(e.message, " ->ERROR");
  }
});
router.get("/Delete/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
});

export default router;
