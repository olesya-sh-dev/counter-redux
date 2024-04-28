import { myTheme } from "../../styles/Theme.styled";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";
import { Wrapper } from "../Wrapper";
import { useEffect } from "react";

type CounterPropsType = {
  maxValue: number;
  minValue: number;
  setNumber: (value: number) => void;
  incrementHandler: () => void;
  resetHandler: () => void;
  number: number;
  warning: boolean;
  warning2: boolean;
};

export const Counter = ({
  maxValue,
  minValue,
  incrementHandler,
  resetHandler,
  setNumber,
  number,
  warning,
  warning2,
}: CounterPropsType) => {
  useEffect(() => {
    setNumber(minValue);
  }, [minValue]);

  return (
    <S.Counter>
      <S.Number
        color={
          number === maxValue ? myTheme.colors.dark : myTheme.colors.primary
        }
      >
        {warning ? (
          <S.Warning color={myTheme.colors.dark}>
            {"Incorrect value!"}
          </S.Warning>
        ) : warning2 ? (
          <S.Warning color={myTheme.colors.primary}>
            {"set values and press 'set'"}
          </S.Warning>
        ) : (
          number
        )}
      </S.Number>
      <Wrapper>
        <Button onClick={incrementHandler} disabled={number === maxValue}>
          {"inc"}
        </Button>
        <Button onClick={resetHandler}>{"reset"}</Button>
      </Wrapper>
    </S.Counter>
  );
};
