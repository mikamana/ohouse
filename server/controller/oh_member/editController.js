import multer from "multer";
import * as repository from "../../repository/oh_member/editRepository.js";

export async function profile(req, res) {
  const id = req.params.id;
  const result = await repository.profile(id)
  res.json(result)
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, uniqueSuffix + '_' + file.originalname)
  }
})

const fupload = multer({ storage: storage }).single("file");

export function upload(req, res) {
  fupload(req, res, err => {
    if (err) {
      console.log(err);
    } else {
      res.json(res.req.file.path);
    }
  })
}

export async function edit(req, res) {
  const { mid, nickname, homepage, gender, birthday, userimg, comment } = req.body;
  const params = [nickname, homepage, gender, birthday, userimg, comment, mid]
  const result = await repository.edit(params)
  res.json(result)
}