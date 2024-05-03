// export type SetValueActionCreatorType = ReturnType<typeof setValueAC>;

// export type ActionType = SetValueActionCreatorType;

// export const settingsValueReducer = (
//   state: number = 0,
//   action: ActionType
// ): number => {
//   switch (action.type) {
//     case "SET-VALUE": {
//       if (action.payload.value < -1) {
//         return 0;
//       } else return action.payload.value;
//     }
//     default:
//       return state;
//   }
// };

// export const setValueAC = (value: number) => {
//   return {
//     type: "SET-VALUE",
//     payload: {
//       value,
//     } as const,
//   };
// };
