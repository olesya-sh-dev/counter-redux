import {
  SettingsStateType,
  setMaxValueAC,
  setMinValueAC,
  settingsReducer,
  valuesSetWarningAC,
} from "./settings-reducer";

test("maxvalue should be setted", () => {
  const startState: SettingsStateType = {
    maxValue: 5,
    minValue: 0,
    valuesSetWarning: true,
    incorrectValue: false,
  };
  const action = setMaxValueAC(2);

  const endState = settingsReducer(startState, action);

  expect(endState.maxValue).toBe(2);
  expect(endState.minValue).toBe(0);
  expect(endState.valuesSetWarning).toBe(true);
  expect(endState.incorrectValue).toBe(false);
});
test("minvalue should be setted", () => {
  const startState: SettingsStateType = {
    maxValue: 8,
    minValue: 2,
    valuesSetWarning: true,
    incorrectValue: false,
  };
  const action = setMinValueAC(4);

  const endState = settingsReducer(startState, action);

  expect(endState.maxValue).toBe(8);
  expect(endState.minValue).toBe(4);
  expect(endState.valuesSetWarning).toBe(true);
  expect(endState.incorrectValue).toBe(false);
});
test("valuesSetWarning should be setted", () => {
  const startState: SettingsStateType = {
    maxValue: 5,
    minValue: 0,
    valuesSetWarning: true,
    incorrectValue: false,
  };
  const action = valuesSetWarningAC(false);
  const endState = settingsReducer(startState, action);

  expect(endState.maxValue).toBe(5);
  expect(endState.minValue).toBe(0);
  expect(endState.valuesSetWarning).toBe(false);
});
