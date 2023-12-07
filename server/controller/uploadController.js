import multer from 'multer';

const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, uniqueSuffix + '_' + file.originalname)
    }

})

const fupload = multer({ storage: storage }).single('file');
export function upload(req, res) {

    fupload(req, res, err => {
        if (err) {
            console.log(err);
        } else {
            res.json(res.req.file.path);
        }
    })

}

