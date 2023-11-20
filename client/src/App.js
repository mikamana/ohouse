import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
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
import "./css/sub/store/storehome/subvisual/subvisual.css";
import "./css/production/production.css";
import Main from "./components/main/Main";
import Contents from './components/main/contents/Contents';
import SkyImg from './pages/main/skyimg/SkyImg';
import IconMenu from "./pages/main/iconmenu/IconMenu";
import IconMenuSlide from "./pages/main/iconmenu/IconMenuSlide";
import SnsImg from "./pages/main/snsimg/components/SnsImg";
import MainVisual from "./pages/main/visual/components/MainVisual";
import SubVisual from "./pages/subpage/store/storehome/visual/SubVisual";
import Productions from "./pages/productions/Productions";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/', element:
          <Contents>
            <MainVisual />
            <IconMenu />
            <SnsImg />
            <SkyImg />
            <IconMenuSlide />
          </Contents>
      },
      {
        path: '/store', element:
          <Contents>

            <SubVisual />

          </Contents>
      },
      {
        path: '/production', element:
          <Contents>
            <Productions />
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