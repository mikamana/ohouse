// import { createContext, useContext, useEffect, useState } from "react";

// export const userContext = createContext();
// // 데이터를 콘텍스트에 담는다.

// export function UsersContext({ children }) {
//   // ui적으로 뭔가를 하지는 않음

//   const [active, setActive] = useState(0);

//   const fnActive = (active) => {

//     setActive(active)

//   };

//   return (
//     <userContext.Provider value={{ active, fnActive }}>
//       {/* 자식컴포넌트를 받아오는 컴포넌트를 만들고 자식 컴포넌트들을 위에서 만든(Context에서 제공해주는) Provider로 감싸면되고,
//       자식 컴포넌트와 공유하고싶은 데이터가 있다면 value에 지정해주면 된다.
//       */}
//       {children}
//       {/* 외부로부터 받아온 자식을 보여준다. */}
//     </userContext.Provider >
//   )

// }

// export const useMenuList = () => useContext(userContext);

