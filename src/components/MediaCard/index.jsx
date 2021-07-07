import { useStylesCard } from '../../style'
import { Grid } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {temporalInfo} from '../../redux/accion'
import {getFecha} from '../../utils'


export default function MediaCard({launch}) {
  const classes = useStylesCard();
  const dispatch = useDispatch()
  const {day,month,year} =getFecha(launch?.launch_date_local)
  const onClick = ()=>{
    dispatch(temporalInfo(launch))
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Grid stackable>
            <Grid.Column width={4}>
              {launch?.ships.length === 0 ? (
                <Icon size='huge' name='rocket' style={{paddingTop:"1cm"}}/>   
              
              ):(
                <CardMedia
                style={{paddingTop:"2cm"}}
                className={classes.media}
                image={launch?.ships[0]?.image}
                title={launch?.ships[0]?.name}/>
              )}
              
            </Grid.Column>
            <Grid.Column width={12}>
              <Typography gutterBottom variant="h5" component="h2">
                {launch?.mission_name}
              </Typography>
              <Typography variant="body2" component="p" className={classes.des}>
                {launch?.details}
              </Typography>
              <Typography variant="body2" component="p" style={{paddingTop:"0.2cm", paddingLeft:"4cm"}}>
                {day}/{month}/{year}
              </Typography>
            </Grid.Column>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
MediaCard.propTypes = {
  launch: PropTypes.object
}
/**
 *
 */