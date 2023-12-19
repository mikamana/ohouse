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
import Channel from "./pages/subpage/topics/hashtagChannel/Channel";
import Event from "./pages/subpage/competitions/feed/Event";
import Search from "./pages/subpage/search/Search";
import ProjectsWrap from "./pages/subpage/contents/projects/ProjectsWrap";
import CardCollections from "./pages/subpage/contents/cardCollections/CardCollections";
import PasswordNewNew from './pages/user/PasswordNewNew';
import Edit from './pages/user/Edit';
import Withdrawals from './pages/user/Withdrawals';
import Adminpage from "./pages/admin/Adminpage";
import Cart from './pages/cart/Cart';
import Orders from './pages/orders/Orders';
import AdminMember from "./pages/admin/AdminMember";
import AdminProduct from "./pages/admin/AdminProduct";
import AdminOrder from "./pages/admin/AdminOrder";
import AdminInquiry from './pages/admin/AdminInquiry';
import Interior3ds from './pages/subpage/interior3ds/Interior3ds';
import EditPassword from './pages/user/EditPassword';
import CartEmptyPage from "./pages/cart/CartEmptyPage";
import Users from "./pages/user/Users";
import Profile from "./pages/user/components/Profile";
import TodayDeals from "./pages/subpage/store/today_deals/TodayDeals";
import Ranks from "./pages/subpage/store/ranks/Ranks";
import OrderList from './pages/user/OrderList';

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
        path: '/topics/hashtagChannel', element:
          <Contents>
            <Channel />
          </Contents>
      },
      {
        path: '/feed/event', element:
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
        path: '/search/:searchKeyword', element:
          <Contents>
            <Search />
          </Contents>
      },
      {
        path: '/users/password/new', element:
          <Contents>
            <PasswordNew />
          </Contents>
      },
      {
        path: '/cart/:mid', element:
          <Contents>
            <Cart />
          </Contents>
      },
      {
        path: '/cart', element:
          <Contents>
            <CartEmptyPage />
          </Contents>
      },
      {
        path: '/orders', element:
          <Contents>
            <Orders />
          </Contents>
      },
      {
        path: '/interior3ds', element:
          <Contents>
            <Interior3ds />
          </Contents>
      },
      {
        path: '/users',
        element:
          <Contents>
            <Users />
          </Contents>
      },
      {
        path: "/users/profile",
        element:
          <Contents>
            <Users>
              <Profile />
            </Users>
          </Contents>
      },
      {
        path: "/users/edit",
        element:
          <Contents>
            <Users>
              <Edit />
            </Users>
          </Contents>
      },
      {
        path: "/users/editpassword",
        element:
          <Contents>
            <Users>
              <EditPassword />
            </Users>
          </Contents>
      },
      {
        path: "/users/withdrawals",
        element:
          <Contents>
            <Users>
              <Withdrawals />
            </Users>
          </Contents>
      },
      {
        path: '/users/myshop', element:
          <Contents>
            <Users>
              <OrderList />
            </Users>
          </Contents>
      },
      {
        path: '/store/todaydeals', element:
          <Contents>
            <TodayDeals />
          </Contents>
      },
      {
        path: '/store/ranks', element:
          <Contents>
            <Ranks />
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
    path: '/users/password/new1', element:
      <PasswordNewNew />
  },
  {
    path: '/search', element:
      <Contents>
        <Search />
      </Contents>
  },
  {
    path: '/admin',
    element: <Adminpage />,
    children: [
      { path: '/admin', element: <AdminMember /> },
      { path: '/admin/member', element: <AdminMember /> },
      { path: '/admin/product', element: <AdminProduct /> },
      { path: '/admin/order', element: <AdminOrder /> },
      { path: '/admin/inquiry', element: <AdminInquiry /> }
    ]
  }



])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;