import React from "react";
import { getUser } from './../utill/sessionStorage';
import "../../css/user/Withdrawals.css"

export default function Withdrawals(){
  const userinfo = getUser();

  return(
    <div className="Withdrawals">
      {userinfo === null ? (<div>잘못된 경로로 접속하셨습니다.</div>) : (
        <form>
          <h1>회원탈퇴 신청</h1>
          <div>
            <h2>회원 탈퇴 신청에 앞서 아래 내용을 반드시 확인해주세요.</h2>
            <div>
              <div>
                <h3>회원탈퇴 시 처리내용</h3>
                <ul>
                  <li>오늘의집 포인트·쿠폰은 소멸되며 환불되지 않습니다.</li>
                  <li>오늘의집 구매 정보가 삭제됩니다.</li>
                  <li>소비자보호에 관한 법률 제6조에 의거,계약 또는 청약철회 등에 관한 기록은 5년, 대금결제 및 재화등의 공급에 관한 기록은 5년, 소비자의 불만 또는 분쟁처리에 관한 기록은 3년 동안 보관됩니다. 동 개인정보는 법률에 의한 보유 목적 외에 다른 목적으로는 이용되지 않습니다.</li>
                </ul>
              </div>
              <div>
                <h3>회원탈퇴 시 게시물 관리</h3>
                <p>
                  회원탈퇴 후 오늘의집 서비스에 입력한 게시물 및 댓글은 삭제되지 않으며, 회원정보 삭제로 인해 작성자 본인을 확인할 수 없으므로 게시물 편집 및 삭제 처리가 원천적으로 불가능 합니다. 게시물 삭제를 원하시는 경우에는 먼저 해당 게시물을 삭제 하신 후, 탈퇴를 신청하시기 바랍니다.
                </p>
              </div>
              <div>
                <h3>회원탈퇴 후 재가입 규정</h3>
                <p>탈퇴 회원이 재가입하더라도 기존의 오늘의집 포인트는 이미 소멸되었기 때문에 양도되지 않습니다.</p>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}