import express from "express";
import * as usuarioController from "../controllers/usuarioController.js";

const router = express.Router();

router.get("/", usuarioController.getAll);
router.post("/", usuarioController.create);
router.put("/:id", usuarioController.update);
router.delete("/:id", usuarioController.remove);

export default router;
