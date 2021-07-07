import { Carousel } from 'react-responsive-carousel';
import { useStylesInfo } from '../../style'
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import NoImage from '../../assets/not.png'

export default function Carrusel({ images }) {
    const classes = useStylesInfo();
    return (
        <Carousel>
            {images.length === 0 ? (
                <div>
                    <CardMedia
                    className={classes.media}
                    image={NoImage}
                    title="No images found"
                />
                </div>
            ) : (
                images.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={index} className="images-carrusel" />
                    </div>
                ))
            )}
        </Carousel>
    )
}

Carrusel.propTypes = {
    images: PropTypes.array
};