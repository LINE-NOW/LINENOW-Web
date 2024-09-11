// component
import {
  ModalBackground,
  ModalContainer,
  ModalTextSub,
  ModalTextTitle,
  ModalTextWrapper,
} from "./Modal.styled";

import Button, { ButtonProps } from "@components/button/Button";
import ButtonLayout from "@components/button/ButtonLayout";

// atom
import { useAtom } from "jotai";
import { modalAtom } from "@atoms/modal";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  sub?: string;
  secondButton?: ButtonProps;
  primaryButton?: ButtonProps;
}

const Modal = () => {
  const [modal, setModal] = useAtom(modalAtom);
  const colseModal = () => {
    setModal({ isOpen: false });
  };
  return modal.isOpen ? (
    <ModalBackground>
      <ModalContainer>
        {/* 텍스트 부분 */}
        <ModalTextWrapper>
          <ModalTextTitle>{modal.title}</ModalTextTitle>
          <ModalTextSub>{modal.sub}</ModalTextSub>
        </ModalTextWrapper>

        {/* 버튼 부분 */}
        <ButtonLayout $col={2}>
          <Button
            onClick={colseModal}
            size="large"
            scheme="grayLight"
            shape="outline"
            {...modal.secondButton}
          >
            {modal.secondButton?.children}
          </Button>

          <Button
            onClick={colseModal}
            size="large"
            scheme="blue"
            shape="fill"
            {...modal.primaryButton}
          >
            {modal.primaryButton?.children}
          </Button>
        </ButtonLayout>
      </ModalContainer>
    </ModalBackground>
  ) : null;
};

export default Modal;
