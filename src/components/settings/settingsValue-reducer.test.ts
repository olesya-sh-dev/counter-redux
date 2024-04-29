import { SettingsValueReducer, setValueAC } from "./settingsValue-reducer"

test('value should be setted', () => {
    const startState: number = 0

    const action = setValueAC(-5)

    const endState = SettingsValueReducer(startState, action)
 

    expect(endState).toBe(0)
    
})


