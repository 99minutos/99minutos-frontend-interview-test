import PropTypes from 'prop-types'
import styled from "styled-components"

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

const Button = styled.button`
    height: 40px;
    width: 100px;
    border: none;
    background-color: #c3cfd9;
    color: #293845;
    font-size: 1em;
    border-radius: 5px;
    margin-bottom: 10px;
    cursor:pointer;

    &:hover {
        background-color:#293845;
        color: #c3cfd9
    }
    
    &:focus{
        outline:0;
    }
`
function Details({launch, fn}) {
    const {mission_name,details, links} = launch
    const {flickr_images, video_link, aricle_link} = links
    return (
        <Container>
            <MissionDetails>
                <img 
                    src={flickr_images.length ? fn.changeImage(flickr_images) : mission_name} 
                    alt={mission_name}
                />
                <h3>{mission_name}</h3>
                <p>{details?.length ? details : "Details not available" }</p>
                <Button onClick={() => window.open(video_link || aricle_link)}>
                    See More
                </Button>
            </MissionDetails>
        </Container>
    )
}

Details.propTypes = {
    launch: PropTypes.object,
    fn: PropTypes.object
}

export default Details
