import { myTheme } from "../../styles/Theme.styled";
import { Button } from "../button/Button";
import { S } from "./Counter_Styles";
import { Wrapper } from "../Wrapper";

import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../redux";
import { StateType, incrementAC, resetAC } from "./counter-reducer";
import { SettingsStateType } from "../settings/settings-reducer";

type CounterPropsType = {
  
};
export const Counter = ({
  //warning2,
}: CounterPropsType) => {
  const counterData = useSelector<AppRootStateType, StateType>(
    (state) => state.counter
  );
const settingsData = useSelector<AppRootStateType, SettingsStateType>(
  (state) => state.settings
);
const warning = settingsData.minValue === settingsData.maxValue||
  settingsData.maxValue < settingsData.minValue ||
  settingsData.minValue < 0 ||
  settingsData.maxValue < 0;

   const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(incrementAC());
  };
  const resetHandler = () => {
    dispatch(resetAC(settingsData.minValue));
  };
  // useEffect(() => {
  //   setNumber(minValue);
  // }, [minValue]);

  return (
    <S.Counter>
      <S.Number
        color={
          counterData.number === counterData.maxValue
            ? myTheme.colors.dark
            : myTheme.colors.primary
        }
      >
        {warning ? (
          <S.Warning color={myTheme.colors.dark}>
            {"Incorrect value!"}
          </S.Warning>
        ) : settingsData.valuesSet ? (
           <S.Warning color={myTheme.colors.primary}>
             {"set values and press 'set'"}
          </S.Warning>
        ) : (
          
            counterData.number
        )}
      </S.Number>
      <Wrapper>
        <Button onClick={incrementHandler} disabled={counterData.number === counterData.maxValue}>
          {"inc"}
        </Button>
        <Button onClick={resetHandler}>{"reset"}</Button>
      </Wrapper>
    </S.Counter>
  );
};
