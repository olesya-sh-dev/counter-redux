
const initialState = {
  number: 0,
};

export type StateType = typeof initialState;

export type IncrementActionCreatorType = ReturnType<typeof incrementAC>;
export type ResetActionCreatorType = ReturnType<typeof startResetAC>;

type ActionType =
  | IncrementActionCreatorType
  | ResetActionCreatorType;

export const counterReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        number: state.number + 1,
      };
    }
    case "START-RESET": {
      return {
        ...state,
        number: action.payload.value,
      };
    }

    default:
      return state;
  }
};

export const incrementAC = () => {
  return {
    type: "INCREMENT",
  } as const;
};
export const startResetAC = (value: number) => {
  return {
    type: "START-RESET",
    payload: {
      value,
    },
  } as const;
};
