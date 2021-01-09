import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Launch({launch}) {
    const {id, mission_name} = launch;
    return (
        <div >
            {id}
            {mission_name}
            <button><Link to={`/mission/${id}`}>See More</Link></button>
        </div>
    )
}

Launch.propTypes = {
    launch: PropTypes.object
}

export default Launch
