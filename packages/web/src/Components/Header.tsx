import { useAppData } from '../Context/AppDataContext';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { useMediaQuery , useTheme,Typography, AppBar, Toolbar, makeStyles, Theme, createStyles, Grid } from '@material-ui/core'
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { Container } from '@material-ui/core';
import  { auth, socialAuth } from '../firebase';



const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        flexGrow: 1,
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
    // tabs: {
    //     fontStyle: "normal",
    //     fontWeight: "bold",
    //     fontSize: 16,
    //     lineHeight: 21,
    //     color: "#444444",

    // },
    // button: {
    //     backgroundColor: "#F7B614",
    //     marginRight:theme.spacing(2),
    //     height: 41,
    //     width: 130,
    //     borderRadius: 36,
    //     color: "#FFFFFF",
    // },
    toolbar: theme.mixins.toolbar
  }),
);

function PhoneIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M28.6015 4.74029L24.7241 0.866505C24.4506 0.591785 24.1255 0.373813 23.7675 0.225111C23.4095 0.0764088 23.0257 -9.29112e-05 22.638 8.46827e-08C21.848 8.46827e-08 21.1053 0.309466 20.5482 0.866505L16.376 5.03884C16.1013 5.31235 15.8833 5.63745 15.7346 5.99546C15.5859 6.35347 15.5094 6.73734 15.5095 7.125C15.5095 7.91505 15.8189 8.65777 16.376 9.21481L19.4269 12.2658C18.7127 13.8399 17.7198 15.2719 16.4961 16.4927C15.2755 17.7194 13.8436 18.716 12.2692 19.4345L9.21831 16.3835C8.9448 16.1088 8.6197 15.8908 8.2617 15.7421C7.90369 15.5934 7.51983 15.5169 7.13218 15.517C6.34214 15.517 5.59943 15.8265 5.0424 16.3835L0.866494 20.5522C0.591441 20.8262 0.373285 21.1519 0.224578 21.5106C0.0758711 21.8692 -0.000451154 22.2537 2.00617e-06 22.642C2.00617e-06 23.432 0.309464 24.1748 0.866494 24.7318L4.73658 28.6019C5.62492 29.4939 6.85184 30 8.11153 30C8.3773 30 8.63215 29.9782 8.88336 29.9345C13.7911 29.1262 18.6587 26.5158 22.587 22.591C26.5117 18.6699 29.1185 13.8058 29.9377 8.8835C30.1852 7.37985 29.6865 5.83252 28.6015 4.74029Z"/>
      </SvgIcon>
    );
}

  function ClockIcon(props: SvgIconProps) {
    return (
      <SvgIcon {...props}>
        <path d="M12.744 0C19.7915 0 25.488 5.59869 25.488 12.4971C25.488 19.408 19.7915 24.9941 12.744 24.9941C5.70932 24.9941 0 19.408 0 12.4971C0 5.59869 5.70932 0 12.744 0ZM12.298 6.16106C11.7755 6.16106 11.3422 6.57346 11.3422 7.09834V13.4094C11.3422 13.7343 11.5206 14.0342 11.8137 14.2092L16.8094 17.1335C16.9623 17.221 17.128 17.271 17.3064 17.271C17.625 17.271 17.9436 17.1085 18.122 16.8086C18.3896 16.3712 18.2494 15.7963 17.7907 15.5214L13.2538 12.872V7.09834C13.2538 6.57346 12.8205 6.16106 12.298 6.16106Z"/>
      </SvgIcon>
    );
  }

export const Header: React.FC = function Header() {
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    var { value }  = useAppData();
    var { fetchUserInfo } = value;
    //console.log("pathname is:" + location.pathname);

    
    const classes = useStyles();

    //Breakpoints
    const theme = useTheme();

    

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMaatchMedium = useMediaQuery(theme.breakpoints.down('md'));
    useEffect(function(){
      var unsubscribe = auth.onAuthStateChanged(function (user){
        //update the state for current user to the user logged in
        //console.log("about to set current user");
        //console.log(user);
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
                //         //console.log('Unable to fetch user data at this time'); 
                //     }
                // });
            }
         } 
      });
    },[value.userRolef])

    var fetchUserDetails = function  fetchUserDetails (payload) {
      //console.log("Is current user null");
      //console.log(payload);
      if(payload.currentUser !== null && payload.currentUser !== undefined){
          if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
              //console.log("Fetching user info");
              fetchUserInfo(payload.currentUser.uid, payload);
              return true;
          }
      }
      return false;
  }

    if(referralPath !== '/'){
      return(
        <>

        </>
      )
    }

    return (
       <>
            <AppBar elevation={0} position="relative" className={classes.appbar}>
                <Toolbar>
                <Container maxWidth="xl">
                  <Grid container spacing={0} alignContent="center" alignItems="center">
                      {isMaatchMedium? (
                        <>
                            <Grid item xs={12} sm={12} md={7} style={{textAlign: "center", marginTop: "10%"}}>
                              <Typography className={classes.logoArea} style={{textAlign: "center"}}>
                                  <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                              </Typography>
                            </Grid>
                        </>
                      ): (
                        <>
                            <Grid item xs={12} sm={12} md={7} style={{textAlign: "center"}}>
                              <Typography className={classes.logoArea} style={{textAlign: "left"}}>
                                  <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                              </Typography>
                            </Grid>
                        </>
                      )}

                    {isMatch? (
                      <>
                          <Grid item xs={12} sm={12} md={7} className={classes.mobileGridContainer} style={{marginBottom: "10%"}}>
                            <Grid item xs={12} sm={12} md={3} className={classes.mobileGrid}>
                              <Typography  className={classes.Typo1}>
                                  <PhoneIcon viewBox={"0 0 30 30"} className={classes.icons} />
                                  876-773-5015 
                              </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12} md={9} className={classes.mobileGrid}>
                              <Typography className={classes.Typo1}>
                                  <ClockIcon viewBox={"0 0 26 25"} className={classes.icons} />
                                  Monday - Saturday 9:00 am - 5:00pm
                              </Typography>
                            </Grid>
                          </Grid>
                      </>
                    ): (
                      <>
                        <Grid item xs={12} sm={12} md={5} className={classes.desktopGridContainer}>
                          <Grid item xs={12} sm={12} md={4}>
                            <Typography  className={classes.Typo1}>
                                <PhoneIcon viewBox={"0 0 30 30"} className={classes.icons} />
                                876-773-5015 
                            </Typography>
                          </Grid>
                          <Grid item xs={12} sm={12} md={8} className={classes.desktopGrid}>
                            <Typography className={classes.Typo1}>
                                <ClockIcon viewBox={"0 0 26 25"} className={classes.icons} />
                                Monday - Saturday 9:00 am - 5:00pm
                            </Typography>
                          </Grid>
                        </Grid>
                      </>
                    )}
                  </Grid>
                </Container>
                </Toolbar>
            </AppBar>
        </>
    )
}

 