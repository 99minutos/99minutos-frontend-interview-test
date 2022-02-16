import React from 'react';
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import {mdiRocketLaunch} from '@mdi/js'
import {Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import moment from "moment"
import {useLaunch} from "../common/hooks/useLaunch";
import {LauncheType} from "@/common/types/app/Launche";


interface PropsLaunch {
  launch: LauncheType,
  onClick: (d: LauncheType) => void
}

export default function Launche(props: PropsLaunch) {
  const {
    launch = {
      id: 0,
      mission_name: "",
      launch_site: {
        site_name_long: ""
      },
      details: "",
      launch_date_local: "",
    } as LauncheType,
    onClick
  } = props
  const {launch: mission} = useLaunch()
  return (
    <Card
      variant="outlined"
      style={{
        borderRadius: 8,
        marginBottom: 10,
        backgroundColor: mission.id === launch.id ? 'rgb(63, 81, 181)' : 'white',
        color: mission.id === launch.id ? 'white' : "black",
        height: 105,
        marginTop: 3
      }} onClick={() => {
      onClick(launch)
    }}>
      <Grid container style={{marginTop: 10, marginLeft: 5}}>
        <Grid item sm={2} md={2} xl={2} lg={2}>
          <Icon size={2} style={{marginTop: 10}} path={mdiRocketLaunch}/>
        </Grid>
        <Grid item sm={9} md={9} xl={9} lg={9}>

          <Typography variant="h6" component="h5">
            {launch.mission_name}</Typography>
          <div>{launch.launch_site.site_name_long}</div>
          <div style={{
            float: 'right',
            color: 'rgba(0, 0, 0, 0.54)',
            marginRight: -5,
            marginTop: -4
          }}>
            {moment(launch.launch_date_local).format('DD/MM/YYYY')}
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}
