import styled from 'styled-components';

export const SettingDeleteIDComponentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0.75rem 0.25rem;
`;

export const SettingDeleteIDComponentText = styled.span`
  ${({ theme }) => theme.fonts.chip};
  color: ${({ theme }) => theme.colors.font.gray};

  cursor: pointer;
`;
