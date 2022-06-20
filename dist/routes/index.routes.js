"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasksController = require("../controllers/tasks.controller.js");

var router = (0, _express.Router)();
router.get("/", _tasksController.renderIndex);
router.post("/tasks/add", _tasksController.createTask);
router.get("/about", _tasksController.about);
router.get("/edit/:id", _tasksController.editTask);
router.post("/edit/:id", _tasksController.editTaskPost);
router.get("/Delete/:id", _tasksController.deleteTask);
router.get("/toggleDone/:id", _tasksController.toggleDone);
var _default = router;
exports["default"] = _default;