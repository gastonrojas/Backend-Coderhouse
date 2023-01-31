import { randomUUID } from 'crypto';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, path.join(process.cwd(), 'public/images' ))
    },
    filename(req, file, cb){
        cb(null, `${randomUUID()}${path.extname(file.originalname)}`);
    }
})

export const upload = multer({storage})