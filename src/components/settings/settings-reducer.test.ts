import { StateType, setMaxValueAC, setMinValueAC, setWarningAC, settingsReducer } from "./settings-reducer"


test('maxvalue should be setted', () => {
    const startState:StateType = {
        maxValue: 5,
        minValue: 0,
        warning: false
    }
    const action = setMaxValueAC(2)

    const endState = settingsReducer(startState, action)
 

    expect(endState.maxValue).toBe(2)
    expect(endState.minValue).toBe(0)
    expect(endState.warning).toBe(false)
        
})
test('minvalue should be setted', () => {
    const startState:StateType = {
        maxValue: 8,
        minValue: 2,
        warning: false
    }
    const action = setMinValueAC(4)

    const endState = settingsReducer(startState, action)
 

    expect(endState.maxValue).toBe(8)
    expect(endState.minValue).toBe(4)
    expect(endState.warning).toBe(false)
        
})
test('warning should be setted', () => {
    const startState:StateType = {
        maxValue: 2,
        minValue: 2,
        warning: false
    }
    const action = setWarningAC(true)

    const endState = settingsReducer(startState, action)
 

    expect(endState.maxValue).toBe(2)
    expect(endState.minValue).toBe(2)
    expect(endState.warning).toBe(true)
        
})


