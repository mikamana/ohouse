import * as reviewRepository from "../../repository/oh_review/reviewRepository.js";


export async function getReview(req, res) {

    const pid = req.params.pid

    console.log(pid);

    const rows = await reviewRepository.getReview(pid);

    res.json(rows);

}

export async function createReview(req, res) {

    const { mid, pid, formObject } = req.body

    const result = await reviewRepository.createReview(mid, pid, formObject.content, formObject.image, formObject.score);

    if (result === 'ok') {

        res.status(204).send('ok')

    }



}