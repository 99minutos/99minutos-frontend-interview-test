import {useStylesBar} from '../../style'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function DenseAppBar() {
  const classes = useStylesBar();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorBar}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            SpaceX Launches
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
