import { settingsValueReducer, setValueAC } from "./settingsValue-reducer"

test('value should be setted', () => {
    const startState: number = 5

    const action = setValueAC(-5)

    const endState = settingsValueReducer(startState, action)
 

    expect(endState).not.toBe(5)
    expect(endState).toBe(0)
    
})


