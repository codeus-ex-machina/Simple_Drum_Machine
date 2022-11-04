import "./App.css";
import DrumPad from "./Components.js";

function App() {
  /* DRUMPADS ******************************************/
  const drumpads = (
    <>
      {[
        ["q", "Heater 1"],
        ["w", "Heater 2"],
        ["e", "Heater 3"],
        ["a", "Heater 4"],
        ["s", "Clap"],
        ["d", "Open-HH"],
        ["y", "Kick-n'-Hat"],
        ["x", "Kick"],
        ["c", "Closed-HH"],
      ].map((el) => (
        <DrumPad key={el[0]} keyboardKey={el[0]} soundType={el[1]} />
      ))}
    </>
  );

  return (
    <div className="App">
      <div id="drum-machine">
        <h1>Here come the drums!</h1>
        <div id="display">Display</div>

        {drumpads}
        <DrumPad />

        <img src="https://images.pexels.com/photos/5650522/pexels-photo-5650522.jpeg?cs=srgb&dl=pexels-cottonbro-5650522.jpg&fm=jpg&_gl=1*hsjsxn*_ga*MTc5MDg4NDczMC4xNjQ3NDM5ODM4*_ga_8JE65Q40S6*MTY2NzMwMzU3Ni4yLjEuMTY2NzMwMzY0NS4wLjAuMA.." />
      </div>
    </div>
  );
}

export default App;
