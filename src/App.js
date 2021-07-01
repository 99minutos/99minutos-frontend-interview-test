import "./App.css";
import Launch from "./components/Launch";
function App() {
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="main-container">
          <div class="col-sm-5 launches">
            <div class="row ">
              <h1>Last Launches</h1>
              <Launch />
            </div>
          </div>
          <div class="col-sm-7 mission">
            <div class="row imageMission h-50">row 1</div>
            <div class="row infoMission h-50">row 2</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
