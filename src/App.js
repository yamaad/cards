import Cards from "./Cards";

function App() {
  const cards = "Cards";
  return (
    <div className="App">
      <div className="content">
        <h1>{cards}</h1>
        <Cards />
      </div>
    </div>
  );
}

export default App;
