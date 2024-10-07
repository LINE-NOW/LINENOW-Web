import styled from "styled-components";

export const WaitingDetailNoInfo = styled.h1`
  display: flex;
  align-items: end;
  justify-content: center;

  transform: translate(-50%, -50%);
  position: fixed;
  top: 50%;
  left: 50%;

  ${({ theme }) => theme.fonts.b1}
`;

export const WaitingDetailPageBoothCardWrapper = styled.div`
  width: 100%;

  padding: 16px 20px 20px 20px;
  border: 1px solid red;
`;

export const WaitingDetailPageBoothCard = styled.div`
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray100};
  border-radius: 8px;
`;

export const WaitingDetailCancel = styled.div`
  display: flex;
  justify-content: center;

  padding: 0.25rem 0px;

  color: ${({ theme }) => theme.colors.font.gray};

  span {
    padding-bottom: 0.125rem;

    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colors.border.gray100};

    cursor: pointer;
  }
`;
