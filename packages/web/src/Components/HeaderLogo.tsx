import React from 'react';
import { useMediaQuery , useTheme,Typography, makeStyles, Theme, createStyles, Grid } from '@material-ui/core';



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

export const HeaderLogo: React.FC = function HeaderLogo() {
    const classes = useStyles();

    //Breakpoints
    const theme = useTheme();

    //const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMaatchMedium = useMediaQuery(theme.breakpoints.down('md'));

    

    

    return (
       <>
            {isMaatchMedium? (
              <>
                  <Grid item xs={12} sm={12} md={12} style={{textAlign: "center", marginTop: "2.5%", marginBottom: "2.5%"}}>
                    <Typography className={classes.logoArea} style={{textAlign: "center"}}>
                        <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                    </Typography>
                  </Grid>
              </>
            ): (
              <>
                    <Typography className={classes.logoArea} style={{textAlign: "left"}}>
                        <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>
                    </Typography>
              </>
            )}
        </>
    )
}

 