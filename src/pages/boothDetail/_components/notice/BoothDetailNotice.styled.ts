import styled from "styled-components";

export const BoothDetailNoticeWrapper = styled.section`
  display: flex;
  gap: 16px;
  flex-direction: column;

  padding: 24px 16px;
`;

export const BoothDetailNoticeArticle = styled.article`
  display: flex;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.font.blackLight};
  text-overflow: ellipsis;
  white-space: nowrap;

  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.25px;
`;
