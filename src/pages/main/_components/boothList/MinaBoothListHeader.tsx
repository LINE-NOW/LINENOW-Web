import Select, { OptionProps } from "@components/select/Select";
import * as S from "./MainBoothList.styled";

interface MainBoothListHeaderProps {
  sortBoothOptions: OptionProps[];
  boothCount: number;
  currentSortBoothOption: string;
  handleSortBoothOptionChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

const MainBoothListHeader = ({
  boothCount,
  sortBoothOptions,
  currentSortBoothOption,
  handleSortBoothOptionChange,
}: MainBoothListHeaderProps) => {
  return (
    <S.MainBoothListHeaderWrapper>
      <S.MainBoothListHeaderTitleLabel>
        2024년 동국대학교 가을 축제
      </S.MainBoothListHeaderTitleLabel>

      <S.MainBoothListHeaderOptionWrapper>
        <p>{boothCount}개의 부스</p>
        <Select
          options={sortBoothOptions}
          onChange={handleSortBoothOptionChange}
          value={currentSortBoothOption}
        />
      </S.MainBoothListHeaderOptionWrapper>
    </S.MainBoothListHeaderWrapper>
  );
};

export default MainBoothListHeader;
