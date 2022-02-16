import React from 'react';
import {createStyles, createTheme, makeStyles, Theme} from '@material-ui/core/styles';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import {Ships} from "../common/types/app/Launche";
import {Grid, MuiThemeProvider} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      height: 290,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
  }),
);

export default function RShips(props: { ship: Ships[] }) {
  const {ship = []} = props
  const classes = useStyles();
  const theme = createTheme({
    overrides: {
      MuiImageListItem: {
        root: {
          listStyle: "none",
        },
        item: {
          listStyle: "none",
        }
      }
    }
  })
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <Grid style={{height: 290, overflow: "auto"}} container spacing={1}>
          {ship.map((item, i) => (
            <Grid key={i} item sm={6} md={6} xl={6} lg={6}>
              <ImageListItem style={{borderRadius: 8, height: 180}}>
                <img src={item.image} alt={item.name}/>
                <ImageListItemBar
                  title={item.name}
                  subtitle={<span> {item.home_port}</span>}
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}
