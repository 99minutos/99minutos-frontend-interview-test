import "./App.css";
import Launch from "./components/Launch";
import { useState } from "react";
import Button from "react-bootstrap/Button";
function App() {
  const [info, setInfo] = useState({
    mission_name: "",
    details: "",
    links: "",
    launch_site: "",
  });
  const getInfo = (mission_name, details, links, launch_site) => {
    setInfo({
      mission_name: mission_name,
      details: details,
      links: links,
      launch_site: launch_site,
    });
  };
  const getRandomImg = (imgs) => imgs[Math.floor(Math.random() * imgs.length)];
  return (
    <div className="App">
      <div class="container-fluid">
        <div class="main-container">
          <div class="col-sm-5 launches">
            <div class="row ">
              <h1 id="titleLaunches">Last Launches</h1>
              <Launch getInfo={getInfo} />
            </div>
          </div>
          <div class="col-sm-7 mission">
            <div class="row imageMission">
              {" "}
              {!info.links ? (
                <img
                  src="https://dummyimage.com/900x600/696669/fff.png&text=Image"
                  className="size"
                  alt="dummy"
                />
              ) : info.links.flickr_images.length === 0 ? (
                <img
                  src="https://dummyimage.com/900x600/696669/fff.png&text=No+Image"
                  className="size"
                  alt="noimage"
                />
              ) : (
                <img
                  src={info.links.flickr_images[0]}
                  className="size"
                  alt={info.mission_name}
                />
              )}
            </div>

            {!info ? (
              <div> </div>
            ) : (
              <div class="row infoMission">
                <h1>{info.mission_name}</h1>
                <p>
                  {info.details === null
                    ? "There is not description"
                    : info.details}
                </p>
                <Button
                  href={info.links.video_link}
                  target="_blank"
                  variant="danger"
                >
                  See More
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
