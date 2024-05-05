import { myTheme } from "../../styles/Theme.styled";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";
import { Wrapper } from "../Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../redux";
import { CommonStateType, incrementAC, startResetAC } from "../common-reducer";

export const Counter = () => {
  const counterData = useSelector<AppRootStateType, CommonStateType>(
    (state) => state.commonData
  );

  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(incrementAC());
  };
  const resetHandler = () => {
    dispatch(startResetAC(counterData.minValue));
  };
  return (
    <S.Counter>
      <S.Number
        color={
          counterData.number === counterData.maxValue
            ? myTheme.colors.dark
            : myTheme.colors.primary
        }
      >
        {counterData.incorrectValue ? (
          <S.Warning color={myTheme.colors.dark}>
            {"Incorrect value!"}
          </S.Warning>
        ) : counterData.valuesSetWarning ? (
          <S.Warning color={myTheme.colors.primary}>
            {"set values and press 'set'"}
          </S.Warning>
        ) : (
          counterData.number
        )}
      </S.Number>
      <Wrapper>
        <Button
          onClick={incrementHandler}
          disabled={counterData.number === counterData.maxValue}
        >
          {"inc"}
        </Button>
        <Button onClick={resetHandler}>{"reset"}</Button>
      </Wrapper>
    </S.Counter>
  );
};
