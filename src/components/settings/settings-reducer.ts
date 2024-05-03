const initialState = {
  maxValue: 5,
  minValue: 0,
  valuesSet: true,
};

export type SettingsStateType = typeof initialState;

export type SetMaxValueActionCreatorType = ReturnType<typeof setMaxValueAC>;
export type SetMinValueActionCreatorType = ReturnType<typeof setMinValueAC>;
export type SetWarningCreatorType = ReturnType<typeof setWarningAC>;
export type ValuesSetCreatorType = ReturnType<typeof valuesSetAC>;
export type ActionType =
  | SetMaxValueActionCreatorType
  | SetMinValueActionCreatorType
  | SetWarningCreatorType
  | ValuesSetCreatorType

export const settingsReducer = (
  state: SettingsStateType = initialState,
  action: ActionType
): SettingsStateType => {
  switch (action.type) {
    case "SET-MAX-VALUE":
      return {
        ...state,
        maxValue: action.payload.value,
      };
    case "SET-MIN-VALUE":
      return {
        ...state,
        minValue: action.payload.value,
      };
    
      case "VALUES-SET": {
        return {
          ...state,
          valuesSet: action.payload.valuesSet,
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
export const setWarningAC = (warning: boolean) => {
  return {
    type: "SET-WARNING",
    payload: {
      warning,
    },
  } as const;
};
export const valuesSetAC = (valuesSet: boolean) => {
  return {
    type: "VALUES-SET",
    payload: {
      valuesSet,
    },
  } as const;
};
