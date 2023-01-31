import { Router } from "express";

import imageController from "../controllers/imageController.js";
import { upload } from "../middlewares/uploadImage.js";

const imageRouter = new Router();

imageRouter.post('/api/images', upload.single('img'), imageController.uploaded)

export default imageRouter;