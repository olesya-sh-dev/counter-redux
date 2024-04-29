import { useSelector } from "react-redux";
import { AppRootStateType } from "../redux";

export type SetValueActionCreatorType = ReturnType<typeof setValueAC>;

export type ActionType = SetValueActionCreatorType;

export const SettingsValueReducer = (
  state: number = 0,
  action: ActionType
): number => {
  switch (action.type) {
    case "SET-VALUE": {
      if (action.payload.value < -1) {
        return state;
      } else return action.payload.value;
    }
    default:
      return state;
  }
};

export const setValueAC = (value: number) => {
  return {
    type: "SET-VALUE",
    payload: {
      value,
    } as const,
  };
};
