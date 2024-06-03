import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";
//import { settingsValueReducer } from "./settings/settingsValue-reducer";
import { settingsReducer } from "./settings/settings-reducer";
import { CommonStateType, commonReducer } from "./common-reducer";

const rootReducer = combineReducers({
  // counter: counterReducer,
  // settings: settingsReducer,
  commonData: commonReducer,
});

const localMin = localStorage.getItem("min");
const localMax = localStorage.getItem("max");

let preloadedMin = localMin ? JSON.parse(localMin) : 0;
let preloadedMax = localMax ? JSON.parse(localMax) : 5;


let preloadedState: any = {
  maxValue: preloadedMax,
  minValue: preloadedMin,
  valuesSetWarning: true,
  incorrectValue: false,
  number: 0,
};


if (localMin && localMax) {
  preloadedMin = JSON.parse(localMin);
  preloadedMax = JSON.parse(localMax);
}

export const store = legacy_createStore(
  rootReducer,
  {
    commonData: preloadedState,
  },
  applyMiddleware()
);
export type AppRootStateType = ReturnType<typeof rootReducer>;

store.subscribe(() => {
  localStorage.setItem(
    "min",
    JSON.stringify(store.getState().commonData.minValue)
  );
  localStorage.setItem(
    "max",
    JSON.stringify(store.getState().commonData.maxValue)
  );
});
//@ts-ignore
window.store = store;
