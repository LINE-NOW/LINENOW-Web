import styled from 'styled-components';

export const SettingComponentsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.background.white};
`;

export const SettingContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 1.25rem;
`;
