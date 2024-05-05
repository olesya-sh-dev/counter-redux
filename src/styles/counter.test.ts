import { StateType, counterReducer, incrementAC } from "../components/counter/counter-reducer";

test("maxvalue should be setted", () => {
    const startState: StateType = {
      number: 0,
    };
    const action = incrementAC();
  
    const endState = counterReducer(startState, action);
  
    expect(endState.number).toBe(1);
    ;
  });