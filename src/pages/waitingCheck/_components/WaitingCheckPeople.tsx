import { useState } from "react";
import * as S from "./WaitingCheckPeople.styled";

const WaitingCheckPeople = () => {
  const [checkedPeople, setCheckedPeople] = useState<number | null>(1);

  const toggleCheck = (num: number) => {
    setCheckedPeople((prev) => (prev === num ? null : num));
  };

  return (
    <S.WaitingCheckContainer>
      {[...Array(8)].map((_, index) => {
        const num = index + 1;
        const isChecked = checkedPeople === num;

        return (
          <S.Circle
            key={num}
            onClick={() => toggleCheck(num)}
            $isChecked={isChecked}
          >
            {num}명
          </S.Circle>
        );
      })}
    </S.WaitingCheckContainer>
  );
};

export default WaitingCheckPeople;
