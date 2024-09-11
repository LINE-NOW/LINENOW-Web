import { createBrowserRouter } from "react-router-dom";

// components
import Layout from "@components/layout/Layout";

// pages
import MainPage from "@pages/main/MainPage";
import BoothDetailPage from "@pages/boothDetail/BoothDetailPage";
import SettingPage from "@pages/setting/SettingPage";
import WaitingCheckPage from "@pages/waitingCheck/WaitingCheckPage";
import WaitingDetailPage from "@pages/waitingDetail/WaitingDetailPage";
import MyWaitingListPage from "@pages/myWaitingList/MyWaitingListPage";

const router = createBrowserRouter([
  { path: "/", children: [{ path: "", element: <MainPage /> }] },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "booth/:boothID", element: <BoothDetailPage /> },
      { path: "check", element: <WaitingCheckPage /> },
      { path: "waiting/:waitingID", element: <WaitingDetailPage /> },
      { path: "my-waiting", element: <MyWaitingListPage /> },
      { path: "setting", element: <SettingPage /> },
    ],
  },
]);

export default router;
