import { useStylesInfo } from '../../style'
//material
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Carrusel from '../Carrusel'
import Vacio from '../../assets/vacio.png'
//semantic
import { Button, Container } from 'semantic-ui-react'
//redux
import { useSelector } from 'react-redux'



export default function MoreInfo() {
    const classes = useStylesInfo();
    const tempInfo = useSelector(state => state.tempInfo)

    return (
        <Card className={classes.root}>
            {Object.keys(tempInfo.data).length === 0 ? (
                <CardMedia
                    className={classes.media}
                    image={Vacio}
                    title="No items selected"
                />
            ) : (<Carrusel images={tempInfo.data?.links?.flickr_images} />)}

            <CardContent>
                <Container textAlign="center">
                    <Typography gutterBottom variant="h5" component="h2">
                        {tempInfo.data?.mission_name}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {tempInfo.data?.details}
                    </Typography>
                </Container>
            </CardContent>
            {Object.keys(tempInfo.data).length !== 0 && (
                <CardActions>
                    <Container textAlign="center">
                        <a href={tempInfo.data?.links?.article_link} target="_blank" rel="noreferrer">
                            <Button color="red">
                                See More
                            </Button>
                        </a>

                    </Container>
                </CardActions>
            )}

        </Card>
    );
}
