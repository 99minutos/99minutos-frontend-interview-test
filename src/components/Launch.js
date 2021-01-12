import PropTypes from "prop-types"
import styled from "styled-components"
import { useHistory } from "react-router-dom";
import {truncateString, transformDate} from "../helpers/index"

const Container = styled.div`
    max-width: 450px;
    height: 120px;
    padding: 18px;
    margin: 10px;
    border: 2px solid #c3cfd9;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    background-color: white;

    &:hover {
        border: 2px solid black;
        background-color: #c3cfd9;
    }

    h3 {
        padding-bottom: 7px;
    }

    p {
        line-height: 1.5;
    }
}

`
const DetailsLaunch = styled.p`
    padding-top: 7px;
    align-self: flex-end;
    font-style: italic;
`

function Launch({launch}) {
    const {mission_name, details, launch_date_local, id} = launch;
    let history = useHistory()

    function handleClick(){
        history.push(`/mission/${id}`)
    }

    return (
        <Container onClick={handleClick}>
            <h3>{mission_name}</h3>
            <p>
                {details?.length ? 
                truncateString(details, 110) : 
                "Details not available"}
            </p>
            <DetailsLaunch>{transformDate(launch_date_local)}</DetailsLaunch>
        </Container>
    )
}

Launch.propTypes = {
    launch: PropTypes.shape({
        id: PropTypes.string,
        mission_name: PropTypes.string,
        details: PropTypes.string,
        launch_date_local: PropTypes.string
    })
}

export default Launch
