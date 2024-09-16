import { Outlet } from "react-router-dom";

import Navigation from "@components/navigation/Navigation";

const DefaultPageLayout = () => {
  return (
    <section>
      <Navigation />
      <section>
        <Outlet />
      </section>
    </section>
  );
};

export default DefaultPageLayout;
