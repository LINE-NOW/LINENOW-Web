import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

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
    element: <RootLayout />,
    children: [
      { path: "", element: <MainPage /> },
      {
        element: <DefaultLayout />,
        children: [
          { path: "signup", element: <SignupPage /> },
          { path: "booth/:boothId", element: <BoothDetailPage /> },
          {
            element: <ProtectedRoute />,
            children: [
              { path: "check", element: <WaitingCheckPage /> },
              { path: "waiting/:waitingID", element: <WaitingDetailPage /> },
              { path: "my-waiting", element: <MyWaitingListPage /> },
              { path: "setting", element: <SettingPage /> },
            ],
          },
        ],
      },
    ],
  },
]);
export default router;
