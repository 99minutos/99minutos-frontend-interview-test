import PropTypes from 'prop-types'
import styled from "styled-components"
import Button from "../components/Button"

const Container = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    justify-content: center;
    object-fit: contain;
    background-size: cover;
    background-image: url("https://wallpapercave.com/wp/wp2284543.jpg");
    }
`

const MissionDetails = styled.div`
    max-width: 600px;
    border: 2px solid #c3cfd9;
    min-width: 450px;
    background-color: white;

    p{
        padding: 15px;
        line-height: 1.5;
    }

    img{
        max-height: 500px;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
`
function Details({launch}) {
    const {mission_name,details, links} = launch
    const {flickr_images, video_link, article_link} = links
    const spaceXImageExtra = "https://wallpapercave.com/wp/wp2284537.jpg"
    return (
        <Container>
            <MissionDetails>
                <img 
                    src={flickr_images.length ? flickr_images[0] : spaceXImageExtra} 
                    alt={mission_name}
                />
                <h3>{mission_name}</h3>
                <p>{details?.length ? details : "Details not available" }</p>
                <Button onClick={() => window.open(article_link || video_link )}>
                    See More
                </Button>
            </MissionDetails>
        </Container>
    )
}

Details.propTypes = {
    launch: PropTypes.exact({
        mission_name: PropTypes.string,
        details: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.string)
    })
}

export default Details
