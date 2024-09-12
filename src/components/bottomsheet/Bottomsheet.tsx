import { ReactNode } from "react";

// component
import {
  BottomsheetBackground,
  BottomsheetContainer,
} from "./Bottomsheet.styled";

// hook
import useBottomsheet from "@hooks/useBottomsheet";

export interface BottomsheetProps {
  isOpen: boolean;
  children?: ReactNode;
}

const Bottomsheet = () => {
  const { bottomsheet } = useBottomsheet();

  return bottomsheet.isOpen ? (
    <BottomsheetBackground>
      <BottomsheetContainer>{bottomsheet.children}</BottomsheetContainer>
    </BottomsheetBackground>
  ) : null;
};

export default Bottomsheet;
