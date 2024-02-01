import * as reviewRepository from "../../repository/oh_review/reviewRepository.js";


export async function getReview(req, res) {

    const pid = req.params.pid

    const result = await reviewRepository.getReview(pid)

    res.json(result);

}

export async function createReview(req, res) {

    const { mid, pid, formObject } = req.body

    const result = await reviewRepository.createReview(mid, pid, formObject.content, formObject.image, formObject.score);

    if (result === 'ok') {

        res.status(204).send('ok')

    }

}

export async function updateReview(req, res) {

    const { mid, pid, formObject } = req.body


    const result = await reviewRepository.updateReview(formObject.content, formObject.score, formObject.image, mid, pid);

    if (result === 'ok') {

        res.status(204).send('ok')

    }


}

export async function removeReview(req, res) {

    const { mid, pid } = req.body


    const result = await reviewRepository.removeReview(mid, pid);

    if (result === "ok") {

        res.status(204).send('ok');

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

export async function getBeforeReviewPage(req, res) {

    const { pid, startIndex, endIndex, kindList } = req.params

    const rows = await reviewRepository.getBeforeReviewPage(pid, startIndex, endIndex, kindList);

    res.json(rows);


}

export async function getReviewPage(req, res) {

    const { pid, startIndex, mid, endIndex, kindList } = req.params

    const rows = await reviewRepository.getReviewPage(pid, mid, startIndex, endIndex, kindList);

    res.json(rows);

}


// export async function getReview(req, res) {

//     const pid = req.params.pid

//     const rows = await reviewRepository.getReview(pid);

//     res.json(rows);

// }

// export async function getReviewBest(req, res) {

//     const { pid, startIndex, endIndex } = req.params

//     const rows = await reviewRepository.getReviewBest(pid,startIndex,endIndex);

//     res.json(rows);

// }

// export async function getReviewLatest(req, res) {

//     const { pid, startIndex, endIndex } = req.params

//     const rows = await reviewRepository.getReviewLatest(pid,startIndex,endIndex);

//     res.json(rows);

// }