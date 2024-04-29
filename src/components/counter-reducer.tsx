import { ChangeEvent } from "react";

const initialState = {
  maxValue: 5,
  minValue: 0,
  number: 0,
  warning2: true,
};

type StateType = typeof initialState;

export type AddMaxActionCreatorType = ReturnType<typeof addMaxAC>;
export type AddMinActionCreatorType = ReturnType<typeof addMinAC>;
export type StartActionCreatorType = ReturnType<typeof startAC>;
export type Warning2CreatorType = ReturnType<typeof warning2AC>;

type ActionType =
  | AddMaxActionCreatorType
  | AddMinActionCreatorType
  | StartActionCreatorType
  | Warning2CreatorType;
export const CounterReducer = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case "ADD_MAX": {
      return {
        ...state,
        [state.maxValue]: action.payload.maxValue,
      };
    }
    case "ADD_MIN":  {
        return{
            ...state,
            [state.minValue]: action.payload.minValue,
          };
        }
    case "START": {
        return{
            ...state,
            [state.number]: action.payload.number,
          };
    }
    case "WARN2": {
     
        return{
            ...state,
            // [state.warning2]: action.payload.warning2,
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
        maxValue
    },
  } as const;
};
export const addMinAC = (minValue: number) => {
  return {
    type: "ADD_MIN",
    payload: {
      minValue,
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
export const warning2AC = () => {
  return {
    type: "WARN2",
    payload: {
      warning2: true,
    },
  } as const;
};
