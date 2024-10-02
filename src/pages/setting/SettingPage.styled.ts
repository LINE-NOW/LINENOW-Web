import styled from "styled-components";

export const SettingPageWrapper = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`;
export const SettingComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.25rem;
  padding: 1rem 1.25rem;
`;

export const SettingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SettingFooterWrapper = styled.section`
  width: 100%;
  padding: 1.5rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  background-color: ${({ theme }) => theme.colors.background.black};
  color: ${({ theme }) => theme.colors.background.grayLight};
  img {
    width: 104px;
    padding-bottom: 1rem;
  }
`;
