const initialState = {
  maxValue: 5,
  minValue: 0,
  valuesSetWarning: true,
  incorrectValue: false,
};

export type SettingsStateType = typeof initialState;

export type SetMaxValueActionCreatorType = ReturnType<typeof setMaxValueAC>;
export type SetMinValueActionCreatorType = ReturnType<typeof setMinValueAC>;
export type ValuesSetWarningActionCreatorType = ReturnType<
  typeof valuesSetWarningAC
>;
export type ActionType =
  | SetMaxValueActionCreatorType
  | SetMinValueActionCreatorType
  | ValuesSetWarningActionCreatorType;

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: ActionType
): SettingsStateType => {
  switch (action.type) {
    case "SET-MAX-VALUE":
      const newMax = action.payload.value
      const isIncorrectValue = newMax <= state.minValue || newMax < 0;
      return {
        ...state,
        maxValue: newMax,
        valuesSetWarning: true,
        incorrectValue: isIncorrectValue,
      };
    case "SET-MIN-VALUE":{
      const newMin = action.payload.value
      const isIncorrectValue = newMin >= state.maxValue || newMin < 0;
      return {
        ...state,
        minValue: action.payload.value,
        valuesSetWarning: true,
        incorrectValue: isIncorrectValue,
        }
      }
    case "VALUES-SET-WARNING": {
      return {
        ...state,
        valuesSetWarning: action.payload.valuesSetWarning,
      };
    }
    default:
      return state;
  }
};

export const setMaxValueAC = (value: number) => {
  return {
    type: "SET-MAX-VALUE",
    payload: {
      value,
    },
  } as const;
};
export const setMinValueAC = (value: number) => {
  return {
    type: "SET-MIN-VALUE",
    payload: {
      value,
    },
  } as const;
};

export const valuesSetWarningAC = (valuesSetWarning: boolean) => {
  return {
    type: "VALUES-SET-WARNING",
    payload: {
      valuesSetWarning,
    },
  } as const;
};
