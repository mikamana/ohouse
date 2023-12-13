import express from 'express';
import * as controller from "../controller/adminController.js";

const router = express.Router();

/* 전체 리스트 조회 */
router.get('/member/:startindex/:endindex/:value',controller.getMemberList);
router.get('/product/:startindex/:endindex/:value',controller.getProductList);
router.get('/order/:startindex/:endindex/:value',controller.getMemberList);
router.get('/inquiry/:startindex/:endindex/:value',controller.getInquiryList);

/* 정보 조회 */
router.get('/member/:mid',controller.getMember);
router.get('/product/:pid',controller.getProduct);

/* 정보 수정 */
router.put('/update',controller.updateMember);
router.put('/product/update/:pid',controller.updateProduct);
router.put('/inquiry/update/:qid',controller.updateInquiry);

/* 정보 등록 */
router.post('/product/register',controller.insertProduct);

/* 삭제 */
router.delete('/product/remove/:pid',controller.removeProduct);

export default router;