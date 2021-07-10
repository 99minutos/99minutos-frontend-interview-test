import CustomCarousel from "./CustomCarousel";

export const Mission = ({ selectedMission }) => (
  <div className="derecha">
    {Object.keys(selectedMission).length > 0 ? (
      <>
        <div className="top">
          <CustomCarousel images={selectedMission?.links?.flickr_images} />
        </div>
        <h1 style={{margin:"auto"}}>{selectedMission.mission_name || "Select a Card"}</h1>
        <main>{selectedMission.details || "no further details :("}</main>
        <a
          href={selectedMission.links.video_link}
          target="_blank"
          className="btn btn-primary"
          rel="noreferrer"
        >
          See More
        </a>
      </>
    ) : (
      <>
        <div className="top"></div>
        <h1>Select a Card</h1>
        <main></main>
        <div style={{ height: "12%" }}></div>
      </>
    )}
  </div>
);

export default Mission;
