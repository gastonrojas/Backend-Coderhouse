import { Router } from "express";

import imageController from "../controllers/imageController.js";
import { upload } from "../middlewares/uploadImage.js";
import multer from 'multer';
import path from 'path';


// const storage = multer.diskStorage({
//     destination(req, file, cb){
//         cb(null, path.join(process.cwd(), '/images') )
//     },
//     filename(req, file, cb){
//         cb(null, `${Date.now()}_productImg${path.extname(file.originalname)}`);
//     }
// })

// const upload = multer({storage});

const imageRouter = new Router();

imageRouter.post('/', upload.single('buenas'), imageController.uploaded)

export default imageRouter;