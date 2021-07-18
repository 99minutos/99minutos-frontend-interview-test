import React, {useEffect} from 'react'
import {NextPage, NextPageContext} from 'next'
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {deepOrange} from "@material-ui/core/colors";
import {useRouter} from "next/router";
import {DocumentNode, gql, useQuery} from '@apollo/react-hooks';
import Launche from "../components/Launche";
import {LauncheType} from "../common/types/app/Launche";
import Mission from "../components/Mission";
import {useLaunch} from "../common/hooks/useLaunch";

function GET_ALL_REPORT(): DocumentNode {
  return gql`query amir {
  launchesPast(limit: 10) {
    mission_name
    id
    details
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      mission_patch
    }
    ships {
      name
      home_port
      image
    }
  }
}`;
}

function redirect(context: NextPageContext, target: string) {
  if (context.res) {
    // server
    // 303: "See other"
    context.res.writeHead(303, {Location: target})
    context.res.end()
  }
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  results: {
    margin: theme.spacing(2, 0, 2, 0),
    width: '100%'
  },
  root: {
    flexGrow: 1,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
    paddingTop: 2,
    padding: 3
  },
  square: {
    margin: '1%',
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: 8,
  },
  card: {
    background: 'none',
    boxShadow: 'none',
    display: 'flex',
  },
}))

const Index: NextPage = () => {
  const classes = useStyles();

  const queryGetAllReport = GET_ALL_REPORT();

  const {data, loading} = useQuery<{ launchesPast: LauncheType[] }>(queryGetAllReport, {
    onCompleted: (data) => {
      if(data.launchesPast.length > 0) {
        setLaunch(data.launchesPast[0])
      }
    },
    onError: (error) => {
      console.log(error)
    }
  })

  const {setLaunch} = useLaunch()

  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper elevation={0} style={{padding: 10}}>
        <Grid container spacing={3}>
          <Grid item sm={5} md={5} xl={5} lg={5}>
            <Typography style={{textAlign: "center"}} variant="h4" component="h2">
              Last Launches
            </Typography>
            <div style={{height: 450, overflowY: "scroll"}}>
              {
                loading ? "loading" : data!.launchesPast.map((lp, i) => (
                  <Launche key={i} launch={lp} onClick={(d: any) => {
                    setLaunch(d)
                  }}/>
                ))
              }
            </div>
          </Grid>
          <Grid item sm={7} md={7} xl={7} lg={7}>
              <Mission/>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
export default Index
