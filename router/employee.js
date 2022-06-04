const express = require("express");
const router = express.Router();
const moduleEmployee = require("../modules/employee");

router.get("/get",moduleEmployee.getEmployees);
router.post("/create",moduleEmployee.createEmployees);
router.put("/update/:id",moduleEmployee.updateEmployees);
router.delete("/delete/:id",moduleEmployee.deleteEmployees);

module.exports = router;