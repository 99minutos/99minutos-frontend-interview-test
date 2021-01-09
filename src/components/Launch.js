import PropTypes from "prop-types"
import {Link} from "react-router-dom"

function Launch({launch, truncate, transformDate}) {
    const {mission_name, details, launch_date_local, id} = launch;
    return (
        <div>
            {mission_name}
            {truncate(details, 100)}
            {transformDate(launch_date_local)}
            <button><Link to={`/mission/${id}`}>See More</Link></button>
        </div>
    )
}

Launch.propTypes = {
    launch: PropTypes.object,
    truncate: PropTypes.func,
    transformDate: PropTypes.func
}

export default Launch
