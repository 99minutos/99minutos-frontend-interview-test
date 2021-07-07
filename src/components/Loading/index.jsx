import { Dimmer, Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default function Loading({ text, loading }) {
    return (
        <Dimmer active={loading} >
            <Loader size='big'>{text}</Loader>
        </Dimmer>
    )
}

Loading.propTypes = {
    text: PropTypes.string,
    loading: PropTypes.bool
}