import styled from "styled-components";

export const BoothDetailNoticeWrapper = styled.section`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  padding: 1.5rem 1rem;
`;

export const BoothDetailNoticeArticle = styled.article`
  display: flex;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.font.blackLight};

  ${({ theme }) => theme.fonts.b2}
  text-overflow: ellipsis;
  white-space: pre-line;
`;
