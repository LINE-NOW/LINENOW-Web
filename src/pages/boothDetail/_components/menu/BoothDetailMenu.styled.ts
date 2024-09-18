import styled from "styled-components";

export const BoothDetailMenuLayout = styled.section`
  padding: 24px 16px;
  display: flex;
  gap: 16px;
  flex-direction: column;
  margin-bottom: 10rem;
`;

export const BoothDetailMenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 95%;
`;

export const BoothDetailMenuArticleWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const BoothDetailMenuArticle = styled.article`
  overflow: hidden;
  text-overflow: ellipsis;

  color: ${({ theme }) => theme.colors.font.blackLight};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
