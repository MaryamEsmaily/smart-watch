import AnalogClock from "./components/AnalogClock";
import Footer from "./components/Footer";
import Options from "./components/Options";

function App() {
  return (
    <div className="App">
      {/* <div className="border-3 border-light">Maryam's Watch</div> */}
      <AnalogClock />
      <Options />
      <Footer />
    </div>
  );
}

export default App;
