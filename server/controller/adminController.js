import * as repository from "../repository/adminRepository.js"

/* 회원리스트 조회 */
export async function getMemberList(req, res) {
  const {value, startindex, endindex} = req.params;
  //console.log({value, startindex, endindex});
  const result = await repository.getMemberList({value, startindex, endindex});
  res.json(result)
};

/* 회원정보 조회 */
export async function getMember(req,res){
  const mid = req.params.mid;
  console.log(mid);
  //console.log(JSON.stringify(mid));
  const result = await repository.getMember(mid)
  //console.log(result);
  res.json(result)
}

/* 회원정보 수정 */
export async function updateMember(req,res){
  const { mid, nickname, phone, birthday} = req.body;
  console.log({ mid, nickname, phone, birthday});
  const params = [ mid, nickname, phone, birthday, mid ]
  const result = await repository.updateMember(params)
  res.json(result)
};

/* 오름차순 정렬 */
export async function getAscList(req,res){
  const {value, startindex, endindex} = req.params;
  console.log(value);
  const result = await repository.getAscList(value, startindex, endindex);
  console.log(result);
  res.json(result)
}

/* 상품리스트 조회 */
export async function getProductList(req, res) {
  const {value, startindex, endindex} = req.params;
  //console.log({value, startindex, endindex});
  const result = await repository.getProductList({value, startindex, endindex});
  //console.log(result);
  res.json(result)
};