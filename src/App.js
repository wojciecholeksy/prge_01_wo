import "./App.css";
import Home from "./components/home/Home";

function App() {
  const imie = "Wojciech";
  return (
    <div className="App">
      <Home text={imie}></Home>{" "}
    </div>
  );
}

export default App;
