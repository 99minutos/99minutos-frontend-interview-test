import { makeStyles } from '@material-ui/core/styles';
import {darkCard , colorLetra} from './colors'

export const useStylesCard = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor:darkCard,
      color:colorLetra
    },
    media: {
      height: 80,
      width: "100%",
    },
    des:{
        height: "50px",
        overflow: "scroll"
        
    }
    
  });
  