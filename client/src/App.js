import React from "react";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./css/common/reset.css";
import "./css/common/mixin.css";
import "./css/common/common.css";
import Main from "./components/main/Main";
import Contents from './components/main/contents/Contents';
import SkyImg from './pages/main/skyimg/SkyImg';
import IconMenu from "./pages/main/iconmenu/IconMenu";
import IconMenuSlide from "./pages/main/iconmenu/IconMenuSlide";
import IconMenuShop from "./pages/main/iconmenu/iconMenuShop";
import IconMenuSlideShop from "./pages/main/iconmenu/iconMenuShopSlide";
import SnsImg from "./pages/main/snsimg/components/SnsImg";
import MainVisual from "./pages/main/visual/components/MainVisual";
import SubVisual from "./pages/subpage/store/storehome/visual/SubVisual";
import Productions from "./pages/productions/Productions";
import UserImg from "./pages/main/userimg/UserImg"
import Exhibitions from './pages/main/userimg/Exhibitions';
import ShopitemSection from "./pages/main/shopitem/ShopitemSection";
import ShopcateSection from "./pages/main/shopcate/ShopcateSection";
import StoreHomePopularProductsSection from "./pages/subpage/store/storehome/popularproducts/StoreHomePopularProductsSection";
import StoreHomeTodayDealSection from "./pages/subpage/store/storehome/todaydeal/StoreHomeTodayDealSection";
import Recommand from "./pages/subpage/topics/recommand/Recommand";
import Signup from './pages/user/Signup';
import Login from './pages/user/Login';
import PasswordNew from "./pages/user/PasswordNew";
import Cart from "./pages/cart/Cart";
import Orders from "./pages/orders/Orders";
import Channel from "./pages/subpage/topics/hashtag-channel/Channel";
import Event from "./pages/subpage/competitions/feed/Event";
import Search from "./pages/subpage/search/Search";
import ProjectsWrap from "./pages/subpage/contents/projects/ProjectsWrap";
import CardCollections from "./pages/subpage/contents/cardCollections/CardCollections";
import PasswordNewNew from './pages/user/PasswordNewNew';

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
            <SkyImg title={"와😮 소리 나오는 40평 이상 배치법"} />
            <SkyImg title={"써보고 추천하는 잘샀템즈 💰"} />
            <IconMenuSlide />
            <ShopitemSection />
            <UserImg />
            <Exhibitions />
            <ShopcateSection />
          </Contents>
      },
      {
        path: '/topics/recommand', element:
          <Contents>
            <Recommand />
          </Contents>,
      },
      {
        path: '/store', element:
          <Contents>
            <SubVisual />
            <IconMenuShop />
            <StoreHomeTodayDealSection />
            <IconMenuSlideShop />
            <StoreHomePopularProductsSection />
          </Contents>
      },
      {
        path: '/content/projects', element:
          <Contents>
            <ProjectsWrap />
          </Contents>
      },
      {
        path: '/content/cardCollections', element:
          <Contents>
            <CardCollections />
          </Contents>
      },
      {
        path: '/topics/hashtag-channel', element:
          <Contents>
            <Channel />
          </Contents>
      },
      {
        path: '/feed/Event', element:
          <Contents>
            <Event />
          </Contents>
      },
      {
        path: '/production/:pid', element:
          <Contents>
            <Productions />
          </Contents>
      },
      {
        path: '/users/password/new',element:
          <PasswordNew/>
      },
      {
        path: '/cart', element:
        <Contents>
          <Cart/>
        </Contents>
      },
      {
        path: '/orders', element:
          <Contents>
            <Orders/>
          </Contents>
      }
    ]
  },
  {
    path: '/normalUsers/new', element:
      <Signup />
  },
  {
    path: 'login', element:
      <Login />
  },
  {
    path: '/users/password/new1',element:
      <PasswordNewNew/>
  },
  {
    path: '/search', element:
      <Contents>
        <Search />
      </Contents>
  }


])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;