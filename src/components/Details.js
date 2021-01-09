import PropTypes from 'prop-types'

function Details({launch}) {
    console.log(launch)
    const {id, mission_name,details} = launch
    return (
        <div>
            {id}{mission_name}{details}
        </div>
    )
}

Details.propTypes = {
    launch: PropTypes.object
}

export default Details
