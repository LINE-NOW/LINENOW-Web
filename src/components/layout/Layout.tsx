import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <section>
      <header>네비게이션</header>
      <section>
        <Outlet />
      </section>
      <footer>바텀 버튼</footer>
    </section>
  );
};

export default Layout;
