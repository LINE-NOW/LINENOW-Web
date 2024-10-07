import { Outlet } from "react-router-dom";

import Navigation from "@components/navigation/Navigation";
import styled from "styled-components";

const DefaultLayout = () => {
  return (
    <>
      <Navigation />
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
};

export default DefaultLayout;

const OutletWrapper = styled.section`
  display: flex;
  height: auto;
  flex-direction: column;
  padding-top: 3.5rem;
  background-color: ${({ theme }) => theme.colors.background.white};
`;
