import * as repository from "../repository/adminRepository.js"

/* 회원리스트 조회 */
export async function getMemberList(req, res) {
  const {value, startindex, endindex} = req.params;
  const result = await repository.getMemberList({value, startindex, endindex});
  res.json(result)
};

/* 회원정보 조회 */
export async function getMember(req,res){
  const mid = req.params.mid;
  const result = await repository.getMember(mid)
  res.json(result)
}

/* 회원정보 수정 */
export async function updateMember(req,res){
  const { mid, nickname, phone, birthday} = req.body;
  const params = [ mid, nickname, phone, birthday, mid ]
  const result = await repository.updateMember(params)
  res.json(result)
};

/* 오름차순 정렬 */
export async function getAscList(req,res){
  const {value, startindex, endindex} = req.params;
  const result = await repository.getAscList(value, startindex, endindex);
  res.json(result)
}

/* 상품리스트 조회 */
export async function getProductList(req, res) {
  const {value, startindex, endindex} = req.params;
  const result = await repository.getProductList({value, startindex, endindex});
  res.json(result)
};