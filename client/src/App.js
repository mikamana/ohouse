import React from "react";
import {RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./css/common/reset.css";
import "./css/common/mixin.css";
import "./css/common/common.css";
import "./css/layout/banner.css";
import "./css/layout/header.css";
import "./css/layout/footer.css";
import "./css/main/dealimg/dealimg.css";
import "./css/main/iconmenu/iconmenu.css";
import "./css/main/shopcate/shopcate.css";
import "./css/main/shopitem/shopitem.css";
import "./css/main/skyimg/skyimg.css";
import "./css/main/snsimg/snsimg.css";
import "./css/main/subtitle_more/subtitle_more.css";
import "./css/main/userimg/userimg.css";
import "./css/main/visual/visual.css";
import Main from "./components/main/Main";
import Contents from './components/main/contents/Contents';
import SkyImg from './pages/main/skyimg/SkyImg';

const router = createBrowserRouter([

  {
    path: "/",
    element:<Main />,
    children : [
      { path : '/', element : 
        <Contents>
          <SkyImg />
        </Contents>
      },
      { path : '/store', element : 
        <Contents>
        </Contents>
      }
    ]
  }

])


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
