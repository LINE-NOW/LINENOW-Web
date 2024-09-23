import { ReactNode } from 'react';

// component
import {
  BottomsheetBackground,
  BottomsheetContainer,
} from './Bottomsheet.styled';

// hook
import useBottomsheet from '@hooks/useBottomsheet';

export interface BottomsheetProps {
  isOpen: boolean;
  children?: ReactNode;
}

const Bottomsheet = () => {
  const { bottomsheet, closeBottomsheet } = useBottomsheet();

  const handleBackgroundClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeBottomsheet();
    }
  };

  return bottomsheet.isOpen ? (
    <BottomsheetBackground onClick={handleBackgroundClick}>
      <BottomsheetContainer>{bottomsheet.children}</BottomsheetContainer>
    </BottomsheetBackground>
  ) : null;
};

export default Bottomsheet;
