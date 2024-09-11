import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;

  z-index: 30;
  width: 100%;
  max-width: 540px;
  height: 100%;
  background-color: rgb(15 15 15 / 70%);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background.white};
  padding: 1.25rem;
  border-radius: 0.75rem;

  min-width: 21rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ModalTextWrapper = styled.div`
  padding: 0 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ModalTextTitle = styled.h1`
  ${({ theme }) => theme.fonts.h1}
  color: ${({ theme }) => theme.colors.font.black};
`;

export const ModalTextSub = styled.span`
  ${({ theme }) => theme.fonts.b1}
  color: ${({ theme }) => theme.colors.font.blackLight};
  white-space: pre-line;
`;
