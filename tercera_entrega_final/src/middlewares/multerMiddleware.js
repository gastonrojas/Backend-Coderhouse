import multer from 'multer';
import path from 'path';
import * as url from 'url';

// const __filename = url.fileURLToPath(import.meta.url);
// const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// const imagePath = path.join(__dirname, '../../images')
// console.log(imagePath)
const productImgaeStorage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, '/images' )
    },
    filename(req, file, cb){
        cb(null, `${Date.now()}_productImg${path.extname(file.originalname)}`);
    }
})

const avatarImgaeStorage = multer.diskStorage({
    destination(req, file, cb){
        cb(null, '/images')
    },
    filename(req, file, cb){
		cb(null, `${Date.now()}_avatarImg${path.extname(file.originalname)}`)
	}
})

const uploads = {
    productImage: multer({productImgaeStorage}),
    userAvatar: multer ({avatarImgaeStorage}),
}

export default uploads;