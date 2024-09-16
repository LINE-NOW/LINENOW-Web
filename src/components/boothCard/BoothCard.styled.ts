import styled from "styled-components";
import * as A from "@styles/animation";

export const BoothCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
  box-sizing: border-box;

  padding: 0.75rem 0.25rem 1rem 0.25rem;

  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.border.gray075};

  ${A.onClickButtonAnimation}
`;

export const BoothCardInformationWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const BoothCardInformationImage = styled.img`
  flex-shrink: 0;

  width: 4.5rem;
  height: 4.5rem;

  border-radius: 0.25rem;

  background-color: ${({ theme }) => theme.colors.background.blueLight};
`;

export const BoothCardInformationLabelWrapper = styled.div`
  flex-grow: 1;
  overflow-x: hidden;

  padding: 0.25rem 0rem;
`;

export const BoothCardInformationNameLabel = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${({ theme }) => theme.fonts.h3}
  color:${({ theme }) => theme.colors.font.black};
`;

export const BoothCardInformationDescriptionLabel = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  padding-bottom: 0.38rem;

  ${({ theme }) => theme.fonts.b2}
  color:${({ theme }) => theme.colors.font.blackLight};
`;

export const BoothCardInformationLocationLabel = styled.div`
  ${({ theme }) => theme.fonts.b3}
  color:${({ theme }) => theme.colors.font.gray};
`;

export const BoothCardChipListWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;

  width: 100%;
`;
