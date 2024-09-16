import { Outlet } from "react-router-dom";

import Navigation from "@components/navigation/Navigation";
import styled from "styled-components";

const DefaultPageLayout = () => {
  return (
    <>
      <Navigation />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default DefaultPageLayout;

const OutletWrapper = styled.section`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.colors.background.white};
`;
