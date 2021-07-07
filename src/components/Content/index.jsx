import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import MediaCard from '../MediaCard';



export default function Content({ data }) {
    return (
        <>
            <div className="ocultar-scroll"  >
                {data?.map((poste, index) => (
                    <div key={index}>
                        <br />
                        <Grid.Row>
                            <MediaCard launch={poste} />
                        </Grid.Row>
                    </div>
                ))}
            </div>
        </>
    )
}
Content.propTypes = {
    data: PropTypes.array
}
/*
style={{ width: "100%", height: "500px", overflowY: "scroll" }}
<div className={classes.sectionDesktop} style={{ width: "100%", overflowY: "scroll" }}>
                {children}
            </div>
            <div className={classes.sectionMobile} style={{ width: "100%", height: "250px", overflowY: "scroll" }}>
                {children}
            </div>
 */