
const initialState = {
  maxValue: 5,
  number: 0,
  warningSet: true,
};

export type StateType = typeof initialState;

export type AddMaxActionCreatorType = ReturnType<typeof addMaxAC>;
export type StartActionCreatorType = ReturnType<typeof startAC>;
export type Warning2CreatorType = ReturnType<typeof warning2AC>;
export type IncrementActionCreatorType = ReturnType<typeof incrementAC>;
export type ResetActionCreatorType = ReturnType<typeof resetAC>;

type ActionType =
  | AddMaxActionCreatorType
  | StartActionCreatorType
  | IncrementActionCreatorType
  | Warning2CreatorType
  | ResetActionCreatorType;

export const counterReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_MAX": {
      return {
        ...state,
        maxValue: action.payload.maxValue,
      };
    }
    case "START": {
      return {
        ...state,
        number: action.payload.number,
      };
    }
    case "INCREMENT": {
      return {
        ...state,
        number: state.number + 1,
      };
    }
    case "RESET": {
      return {
        ...state,
        number: action.payload.value,
      };
    }
    case "WARN2": {
      return {
        ...state,
        warningSet: action.payload.warningSet,
      };
    }

    default:
      return state;
  }
};

export const addMaxAC = (maxValue: number) => {
  return {
    type: "ADD_MAX",
    payload: {
      maxValue,
    },
  } as const;
};
export const startAC = (number: number) => {
  return {
    type: "START",
    payload: {
      number,
    },
  } as const;
};
export const incrementAC = () => {
  return {
    type: "INCREMENT",
  } as const;
};
export const resetAC = (value: number) => {
  return {
    type: "RESET",
    payload: {
      value,
    },
  } as const;
};
export const warning2AC = (warningSet: boolean) => {
  return {
    type: "WARN2",
    payload: {
      warningSet
    }
  } as const;
};
