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

// hook
import useModal from "@hooks/useModal";

export interface ModalProps {
  isOpen: boolean;
  title?: string;
  sub?: string;
  secondButton?: Omit<ButtonProps, "size" | "scheme" | "shape">;
  primaryButton?: Omit<ButtonProps, "size" | "scheme" | "shape">;
}

const Modal = () => {
  const { closeModal, modal } = useModal();

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
            onClick={closeModal}
            size="large"
            scheme="grayLight"
            shape="outline"
            {...modal.secondButton}
          >
            {modal.secondButton?.children || "이전으로"}
          </Button>

          <Button
            onClick={closeModal}
            size="large"
            scheme="blue"
            shape="fill"
            {...modal.primaryButton}
          >
            {modal.primaryButton?.children || "확인"}
          </Button>
        </ButtonLayout>
      </ModalContainer>
    </ModalBackground>
  ) : null;
};

export default Modal;
