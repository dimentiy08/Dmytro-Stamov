import './App.css'

function App() {
  return (
    <div className="container">
      <h1>SWAPI Interface</h1>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: Luke Skywalker</h5>
          <p className="card-text">Height: 172</p>
          <p className="card-text">Mass: 77</p>
          <p className="card-text">Hair Color: Blond</p>
          <p className="card-text">Skin Color: Fair</p>
          <p className="card-text">Eye Color: Blue</p>
          <p className="card-text">Birth Year: 19BBY</p>
          <p className="card-text">Gender: Male</p>
          {/* Добавьте больше информации при необходимости */}
        </div>
      </div>
    </div>
  );
}

export default App;