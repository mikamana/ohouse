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
  console.log(mid);
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

/* 상품정보 조회 */
export async function getProduct(req,res){
  const pid = req.params.pid;
  console.log(pid);
  const result = await repository.getProduct(pid)
  res.json(result)
}

/* 상품정보 수정 */
export async function updateProduct(req,res){
  //update oh_product set pid = ?, c.category_name as category_name = ?, product_name = ?, price_sale = ?, price_origin = ?, ifnull(delivery_type,'') as delivery_type = ? where pid = ?
  const { pid, category_id, product_name, price_origin, price_sale, delivery_type } = req.body;
  const params = [ category_id, product_name, price_origin, price_sale, delivery_type, pid ]
  //console.log(params);
  const result = await repository.updateProduct(params)
  res.json(result)
};