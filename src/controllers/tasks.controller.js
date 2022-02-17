import Task from "../models/Task";

export const renderIndex = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    await task.save();

    res.redirect("/");
  } catch (err) {
    console.log(err);
  }
};

export const about = (req, res) => {
  res.render("about");
};

export const editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    // console.log(task, "++++BUSKEDA+++++");
    res.render("edit", { task });
  } catch (err) {
    console.log(err, "++ERROR++");
  }
};

export const editTaskPost = async (req, res) => {
  const { id } = req.params;
  console.log(id, "++ID", req.body);
  try {
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
  } catch (e) {
    console.log(e.message, " ->ERROR");
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toggleDone = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
  } catch (err) {
    console.log(err, "ERRORRRRRRRRRRR----");
  }
};
