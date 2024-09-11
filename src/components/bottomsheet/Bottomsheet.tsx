import { ReactNode } from "react";

// component
import {
  BottomsheetBackground,
  BottomsheetContainer,
} from "./Bottomsheet.styled";

// atom
import { useAtomValue } from "jotai";
import { bottomsheetAtom } from "@atoms/bottomsheet";

export interface BottomsheetProps {
  isOpen: boolean;
  children?: ReactNode;
}

const Bottomsheet = () => {
  const bottomsheet = useAtomValue(bottomsheetAtom);

  return bottomsheet.isOpen ? (
    <BottomsheetBackground>
      <BottomsheetContainer>{bottomsheet.children}</BottomsheetContainer>
    </BottomsheetBackground>
  ) : null;
};

export default Bottomsheet;
