import { useDaumPostcodePopup } from 'react-daum-postcode';

export default function OrdersAdressBtn({ form, setForm, zonecodeBox, mainAdressBox }) {
  const open = useDaumPostcodePopup('https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';
    let zonecode = data.zonecode

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setForm({ ...form, reciever_address_main: fullAddress, reciever_address_zonecode: zonecode })

    zonecodeBox.current.classList.remove('valcheck')
    mainAdressBox.current.classList.remove('valcheck')
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <button className="orders_form_box_input_contents_address_search_btn" type="button" onClick={handleClick}>주소찾기</button>
  );
};