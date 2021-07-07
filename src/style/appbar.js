import { makeStyles } from '@material-ui/core/styles';
import {dark,colorPrimary} from './colors';
export const useStylesBar = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    colorBar:{
        backgroundColor: colorPrimary,
        borderBottom: `5px solid ${dark}`
    },
  
  }));