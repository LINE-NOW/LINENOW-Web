import styled from "styled-components";

export const FontTest = () => {
  return (
    <div>
      <H1>H1</H1>
      <H2>H2</H2>
      <H3>H3</H3>

      <B1>body1</B1>
      <B2>body1</B2>
      <B3>body1</B3>

      <BTN>버튼</BTN>
      <Caption>캡션</Caption>
    </div>
  );
};

const H1 = styled.h1`
  ${({ theme }) => theme.fonts.h1};
`;

const H2 = styled.h2`
  ${({ theme }) => theme.fonts.h2};
`;

const H3 = styled.h3`
  ${({ theme }) => theme.fonts.h3};
`;

const B1 = styled.div`
  ${({ theme }) => theme.fonts.b1};
`;

const B2 = styled.div`
  ${({ theme }) => theme.fonts.b2};
`;

const B3 = styled.div`
  ${({ theme }) => theme.fonts.b3};
`;

const BTN = styled.button`
  ${({ theme }) => theme.fonts.btn};
`;

const Caption = styled.p`
  ${({ theme }) => theme.fonts.caption};
`;
