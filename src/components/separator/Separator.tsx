import styled from "styled-components";

const SeparatorLine = styled.div`
  display: flex;

  width: 100%;

  height: 4px;

  background-color: ${({ theme }) => theme.colors.background.grayLight};
`;

const Separator = () => {
  return <SeparatorLine />;
};

export default Separator;
