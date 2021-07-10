import { Carousel } from "react-bootstrap";
import ImageNotFound from "../../shared/ImageNotFound";

const CustomCarousel = ({ images }) => (
  <>
    {images?.length > 0 ? (
      <Carousel fade style={{margin:"auto"}}>
        {images?.map((image) => (
          <Carousel.Item >
            <img
              className="d-block w-100 center"
              src={image}
              alt="Rockets"
            />
          </Carousel.Item>

        ))}
      </Carousel>
    ) : (
      <ImageNotFound />
    )}
  </>
);

export default CustomCarousel;
