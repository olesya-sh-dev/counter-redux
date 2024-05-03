import "./App.css";
import { Counter } from "./components/counter/Counter";
import { Settings } from "./components/settings/Settings";
function AppWithRedux() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
        }}
      >
        <Settings/>
         <Counter/> 
      </div>
    </div>
  );
}
export default AppWithRedux;
