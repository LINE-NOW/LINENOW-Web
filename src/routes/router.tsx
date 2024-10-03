import { createBrowserRouter } from "react-router-dom";

// layouts
import RootLayout from "@layouts/RootLayout";
import DefaultLayout from "@layouts/DefaultLayout";

// pages
import MainPage from "@pages/main/MainPage";
import BoothDetailPage from "@pages/boothDetail/BoothDetailPage";
import SettingPage from "@pages/setting/SettingPage";
import WaitingCheckPage from "@pages/waitingCheck/WaitingCheckPage";
import WaitingDetailPage from "@pages/waitingDetail/WaitingDetailPage";
import MyWaitingListPage from "@pages/myWaitingList/MyWaitingListPage";
import SignupPage from "@pages/signup/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // 공통 요소는 RootLayout에서 한 번만 적용
    children: [
      { path: "", element: <MainPage /> },
      {
        element: <DefaultLayout />, // DefaultPageLayout을 필요한 경로에만 적용
        children: [
          { path: "booth/:boothId", element: <BoothDetailPage /> },
          { path: "check", element: <WaitingCheckPage /> },
          { path: "waiting/:waitingID", element: <WaitingDetailPage /> },
          { path: "my-waiting", element: <MyWaitingListPage /> },
          { path: "setting", element: <SettingPage /> },
          { path: "signup", element: <SignupPage /> },
        ],
      },
    ],
  },
]);
export default router;
