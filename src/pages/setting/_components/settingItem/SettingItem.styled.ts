import styled from 'styled-components';

export const SettingItemComponentWrapper = styled.button`
  display: flex;

  padding: 1.25rem 0.25rem;

  border-bottom: 1px solid
    ${({ theme }) => theme.colors.scheme.grayLight.border};

  cursor: pointer;
`;

export const SettingItemComponentText = styled.h3`
  ${({ theme }) => theme.fonts.h3};
`;
