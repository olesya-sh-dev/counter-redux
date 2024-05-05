import { ChangeEvent} from "react";
import { Wrapper } from "../Wrapper";
import { Button } from "../button/Button";
import { S } from "./Settings_styles";
import { SettingsValue } from "./SettingsValue";
import { myTheme } from "../../styles/Theme.styled";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "../redux";
import { SettingsStateType, setMaxValueAC, setMinValueAC, valuesSetWarningAC} from "./settings-reducer";
import { startResetAC } from "../counter/counter-reducer";

export const Settings = () => {
  const state = useSelector((state: AppRootStateType) => state.settings);
  const warning = useSelector((state: SettingsStateType) => state.incorrectValue)
  const dispatch = useDispatch();
  const handleMinValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMinValueAC(event.currentTarget.valueAsNumber));
  }

  const handleMaxValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setMaxValueAC(event.currentTarget.valueAsNumber));
  };

  const setButtonHandler = () => {
    dispatch(startResetAC(state.minValue));
    dispatch(valuesSetWarningAC(false));
    };

    // const warning =
    // state.maxValue === state.minValue ||
    // state.maxValue < state.minValue ||
    // state.minValue < 0 ||
    // state.maxValue < 0;

  return (
    <div>
      <S.Settings>
        <S.SettingsField>
          <S.SettingsBox color={warning ? `${myTheme.colors.dark}` : ""}>
            <SettingsValue
              title="max value"
              value={state.maxValue}
              onChange={handleMaxValueChange}
            />
            <SettingsValue
              title="start value"
              value={state.minValue}
              onChange={handleMinValueChange}
            />
          </S.SettingsBox>
        </S.SettingsField>
        <Wrapper>
          <Button
          onClick={setButtonHandler}
          disabled={warning}
          >
            set
          </Button> 
        </Wrapper>
      </S.Settings>
    </div>
  );
};
