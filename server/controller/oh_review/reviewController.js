import * as reviewRepository from "../../repository/oh_review/reviewRepository.js";


export async function getReview(req, res) {

    const pid = req.params.pid

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

export async function getReviewCount(req, res) {

    const pid = req.params.pid

    const rows = await reviewRepository.getReviewCount(pid);

    res.json(rows);

}

export async function getReviewAvg(req, res) {

    const pid = req.params.pid

    const rows = await reviewRepository.getReviewAvg(pid);

    res.json(rows);

}

export async function getReviewBest(req, res) {

    const pid = req.params.pid

    const rows = await reviewRepository.getReviewBest(pid);

    res.json(rows);

}

export async function getReviewLatest(req, res) {

    const pid = req.params.pid

    const rows = await reviewRepository.getReviewLatest(pid);

    res.json(rows);

}

