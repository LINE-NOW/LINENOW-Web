import Bottomsheet from "@components/bottomsheet/Bottomsheet";
import Modal from "@components/modal/Modal";

import { Outlet } from "react-router-dom";

const RootLayout = () => (
  <>
    <Modal />
    <Bottomsheet />
    <Outlet />
  </>
);

export default RootLayout;
