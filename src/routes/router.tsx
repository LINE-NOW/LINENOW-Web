import { createBrowserRouter, Outlet } from "react-router-dom";

// components
import DefaultPageLayout from "@layouts/DefaultPageLayout";

// pages
import MainPage from "@pages/main/MainPage";
import BoothDetailPage from "@pages/boothDetail/BoothDetailPage";
import SettingPage from "@pages/setting/SettingPage";
import WaitingCheckPage from "@pages/waitingCheck/WaitingCheckPage";
import WaitingDetailPage from "@pages/waitingDetail/WaitingDetailPage";
import MyWaitingListPage from "@pages/myWaitingList/MyWaitingListPage";
import SignupPage from "@pages/signup/SignupPage";
import Modal from "@components/modal/Modal";
import Bottomsheet from "@components/bottomsheet/Bottomsheet";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Modal />
        <Bottomsheet />
        <Outlet />
      </>
    ),
    children: [{ path: "", element: <MainPage /> }],
  },
  {
    path: "/",
    element: (
      <>
        <Modal />
        <Bottomsheet />
        <Outlet />
        <DefaultPageLayout />
      </>
    ),
    children: [
      { path: "", element: <MainPage /> },
      { path: "booth/:boothID", element: <BoothDetailPage /> },
      { path: "check", element: <WaitingCheckPage /> },
      { path: "waiting/:waitingID", element: <WaitingDetailPage /> },
      { path: "my-waiting", element: <MyWaitingListPage /> },
      { path: "setting", element: <SettingPage /> },
      { path: "signup", element: <SignupPage /> },
    ],
  },
]);

export default router;
