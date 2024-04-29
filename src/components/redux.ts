import { combineReducers, createStore } from "redux";
import { CounterReducer } from "./counter-reducer";
import { SettingsValueReducer } from "./settings/settingsValue-reducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    settingsValue: SettingsValueReducer 
})

export const store = createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store