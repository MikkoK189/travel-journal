import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {data.map((item) => {
        return <Card {...item} />;
      })}
    </div>
  );
}

export default App;
