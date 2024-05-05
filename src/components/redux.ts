import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "./counter/counter-reducer";
//import { settingsValueReducer } from "./settings/settingsValue-reducer";
import { settingsReducer } from "./settings/settings-reducer";
import { commonReducer } from "./common-reducer";


const rootReducer = combineReducers({
  // counter: counterReducer,
  // settings: settingsReducer,
  commonData: commonReducer
 
});

export const store = legacy_createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
