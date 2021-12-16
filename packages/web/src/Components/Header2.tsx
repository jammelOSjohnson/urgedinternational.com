import { useAppData } from '../Context/AppDataContext';
import { HeaderLogo } from './HeaderLogo';
import React, { useEffect } from 'react'
import { useHistory, Link as RouterLink } from 'react-router-dom';
import { useMediaQuery , useTheme,Typography, AppBar, Toolbar, makeStyles, Theme, createStyles, Grid, Modal, Fade, FormControl, InputLabel, Select, MenuItem, Backdrop, Button, Drawer, List, ListItem, ListItemIcon, Divider, ListItemText } from '@material-ui/core';
// eslint-disable-next-line
import  { auth, socialAuth } from '../firebase';
import clsx from 'clsx';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


interface State {
  genralLocation: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
        "& .MuiInputBase-root": {
          color: "#9B9B9B",
          borderColor: "#EEE",
          border: "0.1px solid",
          borderRadius: "25px"
        },
        "& .MuiSelect-select:$focus": {
            backgroundColor: "inherit",
            color: "#9B9B9B"
        },
        "& .MuiFormLabel-root": {
            fontWeight: 700,
            fontSize: "1.2rem"
        },
        "& .MuiInputLabel-root.Mui-focused":{
            color: "#9B9B9B"
        }
    },
    appbar: {
        // position: "fixed",
        backgroundColor: "#FFFFFF",
    },
    logoArea: {
        // flex: "auto",
    },
    logo: {
        height: 50.49015808105469,
        width: 147,        
    },
    btn: {
        borderRadius: "50px",
        fontFamily: "PT Sans",
        marginRight:"15px"
    },
    btn2: {
        borderRadius: "50px",
        fontFamily: "PT Sans",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    Typo1: {
        fontFamily: "Open Sans",
        fontWeight: 600,
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: "132.69%",
        color: "#000000",
        marginRight: 0,
        flex: "none",
    },
    icons:{
        fill:"#F7B614",
        paddingRight: 6,
        paddingTop: 7,
    },
    mainContainer: {
      margin: 0,
      padding: 0,
    },
    mobileGrid: {
      textAlign: "center",
    },
    desktopGrid: {
      textAlign: "end",
    },
    mobileGridContainer: {
      justifyContent: "space-evenly",
    },
    desktopGridContainer: {
      display: "flex", 
      justifyContent: "space-evenly",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginLeft: "0px"
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #FF5E14',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minWidth: "34%",
      maxWidth: "400px",
      borderRadius: "50px",
      borderColor: theme.palette.primary.light
     
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
     
    },
    toolbar: theme.mixins.toolbar,
    menuItem: {
        color: "#444444",
        fontFamily: "Inter",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: "16px",
        lineHeight: "19px",
        marginRight: "15px"
    },
    menuItemPrimary: {
      color: "#F7B614",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      marginRight: "15px"
    },
    menuPrimaryCircle: {
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: "#F7B614",
      bottom: "-7px",
      borderRadius: "25px"
    },
    linkBtn: {
      textDecoration: "none",
    }
  }),
);

type Anchor = 'top' | 'bottom' | 'right';

const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/Services",
    },
    {
      label: "FAQ'S",
      href: "/#",
    },
    {
      label: "How it works",
      href: "/HIW",
    },
    {
      label: "Contact us",
      href: "/#",
    },
  ];

export const Header2: React.FC = function Header2() {
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    var { value }  = useAppData();
    var { fetchUserInfo, generalLocation, AddGeneralLocation, serviceWorkerUpdated, serviceWorkerRegistration } = value;
    ////console.log("pathname is:" + location.pathname);

    
    const classes = useStyles();

    //Breakpoints
    const theme = useTheme();

    //State
    const [open, setOpen] = React.useState(false);
    var [error, setError] = React.useState('');
    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });

    //Media Query
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const isMaatchMedium = useMediaQuery(theme.breakpoints.down('md'));

    const [values, setValues] = React.useState<State>({
      genralLocation: 'Select Location',
    });

    //const isServiceWorkerUpdated  = serviceWorkerUpdated;

    useEffect(function(){
      // if(generalLocation === undefined){
      //   setOpen(true);
      // }else{
      //   setOpen(false);
      // }

      auth.onAuthStateChanged(function (user){
        ////console.log("auth");
        if(referralPath !== "/Register" && referralPath !== "/Login"){
          //update the state for current user to the user logged in
          ////console.log("about to set current user");
          ////console.log(user);
          //var userInfo = fetchUserInfo();
          //const payload = {currentUser : user, loading: false, userInfo: userInfo}
          var signonStatus = false;
          if(user !== null){
            signonStatus = user.uid !== null && user.uid !== undefined? true : false
          
          
              var payload = {...value,currentUser : user, loading: false, loggedIn: signonStatus}
              if(value.userInfo.email === "" ){
                  fetchUserDetails(payload);
                  //  .then(function(res){
                  //     if(!res){
                  //         ////console.log('Unable to fetch user data at this time'); 
                  //     }
                  // });
              }
          } 
          // eslint-disable-next-line
        }
      });

      // socialAuth.onAuthStateChanged( function (user) {
      //   //console.log("Soical auth");
      //   if(referralPath !== "/Register"){
      //     //update the state for current user to the user logged in
      //     ////console.log("about to set current user google");
      //     ////console.log(user);
      //     //var userInfo = fetchUserInfo();
      //     //var payload = {currentUser : user, loading: false, userInfo: userInfo}
      //     var signonStatus = false;
      //     if(user !== null){
      //         signonStatus = user.uid !== null && user.uid !== undefined? true : false;
      //         var payload = {...value,currentUser : user, loading: false, loggedIn: signonStatus}
      //         if(value.userInfo.email === "" ){
      //             fetchUserDetails(payload)
      //             // .then(function(res){
      //             //     if(!res){
      //             //         ////console.log('Unable to fetch user data at this time'); 
      //             //     }
      //             // });
      //         }
      //     }
      //   }
      // });

      
      
    },[value.userRolef ,generalLocation])

    var fetchUserDetails = function  fetchUserDetails (payload) {
      ////console.log("Is current user null");
      ////console.log(payload);
      if(payload.currentUser !== null && payload.currentUser !== undefined){
          if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
              ////console.log("Fetching user info");
              fetchUserInfo(payload.currentUser.uid, payload);
              return true;
          }
      }
      return false;
    }

    const handleChange = (event) => {
      try{
        setError('');
        if(event.target.value !== "Select Location"){
          setValues({...values,[event.target.name]:event.target.value});
          AddGeneralLocation(value, event.target.value);
        }else{
          setError('Please Select Location');
        }
      }catch(err){
        //console.log(err);
      }
    };

    // const updateServiceWorker = () => {
    //   const registrationWaiting = serviceWorkerRegistration.waiting;
    //   if (registrationWaiting) {
    //     registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
    //     registrationWaiting.addEventListener('statechange', e => {
    //       if (e.target.state === 'activated') {
    //         window.location.reload();
    //       }
    //     });
    //   }
    // }

    const handleOpen = (item) => {
      setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    if(referralPath !== '/'){
      return(
        <>
        </>
      )
    }

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {headersData.map(({label, href}, index) => {
            return referralPath === "/" && href === "/"?
              <ListItem button key={label}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText style={{color: "#F7B614"}} primary={label} />
              </ListItem>
            :
            <ListItem button key={label}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          })}
        </List>
        <Divider />
        <List>
          <ListItem button key="Place Order">
            <a href="/Restaurants" title="Place Order" className={classes.linkBtn}>
              <Button className={classes.btn} variant="contained" color="primary">
                Place an Order
              </Button>
            </a>
          </ListItem>
          <ListItem button key="sign in">
            <a href="/Login" title="Login"  className={classes.linkBtn}>
              <Button className={classes.btn2} variant="outlined" color="primary">
                Sign In
              </Button>
            </a>
          </ListItem>
        </List>
      </div>
    );

    return (
       <>
            <AppBar elevation={0} position="relative" className={classes.appbar}>
                <Toolbar>
                  <HeaderLogo />
                  {isMatch? (
                  <>
                      <div style={{position: "absolute", right: 10}}>
                        {(['right'] as Anchor[]).map((anchor) => (
                          <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>
                              <img src="Images/MobileMenuIcon.png" alt="MobileMenuIcon" />
                            </Button>
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                              {list(anchor)}
                            </Drawer>
                          </React.Fragment>
                        ))}
                      </div>
                  </>
                  ): (
                  <>
                    <Typography style={{textAlign: "right", width: "100%"}}>
                      {headersData.map(({ label, href }) => {
                          return referralPath === "/" && href === "/"?
                              <Button
                                  {...{
                                      key: label,
                                      className: classes.menuItemPrimary,
                                      to: href,
                                      component: RouterLink,
                                  }}
                              >
                                  {label}
                                  <div className={classes.menuPrimaryCircle}></div>
                              </Button>
                          :
                                <Button
                                    {...{
                                        key: label,
                                        className: classes.menuItem,
                                        to: href,
                                        component: RouterLink,
                                    }}
                                >
                                    {label}
                                </Button>
                      })}
                      <a href="/Restaurants" title="Place Order" className={classes.linkBtn}>
                        <Button className={classes.btn} variant="contained" color="primary">
                          Place an Order
                        </Button>
                      </a>
                      <a href="/Login" title="Login"  className={classes.linkBtn}>
                        <Button className={classes.btn2} variant="outlined" color="primary">
                          Sign In
                        </Button>
                      </a>
                    </Typography>
                  </>
                  )}
                </Toolbar>
            </AppBar>
            {/* {isServiceWorkerUpdated && (
              <Alert
                severity="info"
              >
                There is a new version available.
                <Button type="button" onClick={updateServiceWorker}>
                  Update
                </Button>
              </Alert>
            )} */}
        </>
    )
}

 