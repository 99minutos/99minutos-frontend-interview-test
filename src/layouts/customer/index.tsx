import {Avatar, List, ListItem, ListItemAvatar, ListItemText, useMediaQuery} from '@material-ui/core'
import React from 'react'
import clsx from 'clsx'
import {createStyles, makeStyles, Theme, useTheme} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import PersonIcon from '@material-ui/icons/Person';
import {useRouter} from "next/router";

const drawerWidth = 240
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    bottomNav: {
      width: '100%',
      position: 'fixed',
      height: 80,
      bottom: 0,
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${drawerWidth}px)`
      },
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      position: 'sticky'
    },
    drawerPaper: {
      width: drawerWidth,
      position: 'sticky'
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0),
      justifyContent: 'flex-end'
    },
    mainHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: '0px',
      height: '48px',
      justifyContent: 'flex-start'
    },
    content: {
      background: '#DFE1ED',
      overflow: 'auto',
      height: '100vh',
      [theme.breakpoints.up('md')]: {
        flexGrow: 1,
        padding: theme.spacing(2),
        paddingTop: '0px',
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        }),
        marginLeft: -drawerWidth
      },
      [theme.breakpoints.up('sm')]: {
        flexGrow: 1,
        padding: theme.spacing(2),
        paddingTop: '0px',
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen
        })
      },
      [theme.breakpoints.up('xs')]: {
        flexGrow: 1,
        padding: theme.spacing(3),
        paddingTop: '0px'
      }
    },
    contentShift: {
      flexGrow: 1,
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    rootNav: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    },
    nested: {
      paddingLeft: theme.spacing(4)
    },
    rootCard: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    contentCard: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    rootList: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  })
)

const CustomerLayout: React.FC = (props) => {
  const isDeviceMobile = useMediaQuery<Theme>((myTheme) => myTheme.breakpoints.down('sm'))
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)

  const {push} = useRouter()
  const setPageFilter = async (data: any): Promise<void> => {
    push('/')
  }
  const handleDrawerOpen = () => {
    setOpen(true)
  }


  const handleDrawerClose = () => {
    setOpen(false)
  }

  // @ts-ignore
  return (
    <div className={classes.root}>
      <CssBaseline/>
      <AppBar
        position="fixed"
        style={{background: '#01579B'}}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar variant={'dense'}>
          <Typography variant="h6" noWrap>
            Launches
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        flexGrow={1}
        style={{overflowX: 'hidden', padding: '10px', height: '100vh', background: '#DFE1ED',}}
        // className={clsx(classes.content, {
        //   [classes.contentShift]: open
        // })}
      >
        <div className={classes.mainHeader}/>
        {props.children}
      </Box>
    </div>
  )
}

export default CustomerLayout
