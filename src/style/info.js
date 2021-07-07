import { makeStyles } from '@material-ui/core/styles';
import {darkCard , colorLetra} from './colors'
export const useStylesInfo = makeStyles({
    root: {
      maxWidth: 900,
      backgroundColor:darkCard,
      color:colorLetra
    },
    media: {
      height: 350,
    },
  });