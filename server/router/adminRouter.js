import express from 'express';
import * as controller from "../controller/adminController.js";

const router = express.Router();


/* 오름차순 정렬 */
/* router.get('/sort/:value',controller.getAscList); */

/* 회원리스트 조회 */
router.get('/:startindex/:endindex/:value',controller.getMemberList);

/* 회원리스트 조회 */
/* router.get('/sort/:value/:startindex/:endindex',controller.getMemberList); */

/* 회원정보 조회 */
router.get('/:mid',controller.getMember);

/* 회원정보 수정 */
router.put('/update',controller.updateMember);



export default router;