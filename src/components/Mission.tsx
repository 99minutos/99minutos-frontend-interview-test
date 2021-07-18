import React from 'react';
import {Button, Grid} from "@material-ui/core";
import RShips from "../components/RShips";
import {useLaunch} from "../common/hooks/useLaunch";
import ReactPlayer from "react-player";

export default function Mission() {
  const {launch} = useLaunch()
  return (
    <Grid container spacing={0}
          style={{border: '1px solid rgba(0, 0, 0, 0.12)'}}>
      <Grid item sm={12} md={12} xl={12} lg={12}
            style={{
              overflowY: "hidden",
              height: 290
            }}>

        {
          launch.ships.length > 0 ?
            <RShips ship={launch.ships}/>
            : launch.links.video_link ?
            <ReactPlayer height={280} width="100%" url={launch.links.video_link}/>
            : <div>Click See More</div>
        }

      </Grid>
      <Grid style={{
        textAlign: 'center'
      }}
            item sm={12} md={12} xl={12}
            lg={12}>
        <p>{launch.mission_name}</p>
        <div style={{padding: 10}}>
          {
            launch.details
          }
        </div>
        <br/>
        <Button variant="text"
                component="a"
                target="_blank"
                href={launch.links.article_link ? launch.links.article_link : launch.links.video_link}
                style={{color: '#3F51B5'}}>See More</Button>

      </Grid>
    </Grid>
  );
}
