import { db } from "../../data/database.js";




export async function createReview(mid, pid, content, image, score) {

    const sql = "insert into oh_review(mid,pid,review_content,review_img,review_date,review_score) values(?,?,?,?,sysdate(),?)";
    return db.execute(sql, [mid, pid, content, image, score])
        .then((result) => 'ok')

}

export async function getReview(pid) {

    const sql = "select ov.rid,om.nickname,ifnull(om.userimg,'https://images.unsplash.com/photo-1624274515979-32afb09402a2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D') userimg,op.product_name,op.rating_avg,ov.review_content,ov.review_img,ov.review_score,substring(review_date,1,10) rdate from oh_review ov inner join oh_product op, oh_member om where op.pid = ov.pid and om.mid = ov.mid and op.pid = ?";
    return db.execute(sql, [pid])
        .then((rows) => rows[0])

}
