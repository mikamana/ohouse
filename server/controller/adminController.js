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

/* 상품정보 조회 */
export async function getProduct(req,res){
  const pid = req.params.pid;
  const result = await repository.getProduct(pid)
  res.json(result)
}

/* 상품정보 수정 */
export async function updateProduct(req,res){
  const { pid, category_id, product_name, product_image, price_origin, price_sale, delivery_type } = req.body;
  const params = [ category_id, product_name, product_image, price_origin, price_sale, delivery_type, pid ]
  const result = await repository.updateProduct(params)
  res.json(result)
};

/* 상품등록 */
export async function insertProduct(req,res){
  const { category_id, brand_name, product_name, product_image, price_origin, price_sale, tag_free, delivery_type } = req.body;
  const params = [ category_id, brand_name, product_name, product_image, price_origin, price_sale, tag_free, delivery_type ]
  const result = await repository.insertProduct(params)
  res.json(result)
};

/* 삭제 */
export async function removeProduct(req,res){
  const pid = req.params.pid;
  const result = await repository.removeProduct(pid)
  res.json(result);
};

/* 문의리스트 조회 */
export async function getInquiryList(req,res){
  const {value, startindex, endindex} = req.params;
  console.log({value, startindex, endindex});
  const result = await repository.getInquiryList({value, startindex, endindex});
  res.json(result)
}

/* 답변등록 */
export async function updateInquiry(req,res){
  const qid = req.params.qid;
  const { acontent } = req.body;
  const result = await repository.updateInquiry({qid, acontent})
  res.json(result)
}

/* 주문리스트 조회 */
export async function getOrderList(req,res){
  const {startindex, endindex, value} = req.params;
  console.log({value, startindex, endindex});
  const result = await repository.getOrderList({startindex, endindex, value})
  res.json(result)
}