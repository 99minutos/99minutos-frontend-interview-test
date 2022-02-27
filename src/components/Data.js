export default function Data({ launch }) {
  return (
    <>
      <div className="rightColumn__div">
        <img
          className="rightColumn__div__image"
          src={
            launch.links.flickr_images[0]
              ? launch.links.flickr_images[0]
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
          }
        />
        <p className="rightColumn__div__p">
          Mission Name: {launch.mission_name}
        </p>
        <p className="rightColumn__div__details">
          {launch.details
            ? launch.details
            : "Sorry, there's no details about this mission"}
        </p>
        <form action={launch.links.video_link}>
          <input
            className="rightColumn__div__formButton"
            type="submit"
            value="See More"
          />
        </form>
      </div>
    </>
  );
}
