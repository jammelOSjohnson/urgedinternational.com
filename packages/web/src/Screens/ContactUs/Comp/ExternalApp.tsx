import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, Button} from '@material-ui/core';


// interface TabPanelProps {
//     children?: React.ReactNode;
//     index: any;
//     value: any;
// }

// function TabPanel(props: TabPanelProps) {
//     const { children, value, index, ...other } = props;
  
//     return (
//       <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`scrollable-auto-tabpanel-${index}`}
//         aria-labelledby={`scrollable-auto-tab-${index}`}
//         {...other}
//       >
//         {value === index && (
//           <Box p={3}>
//             <Typography>{children}</Typography>
//           </Box>
//         )}
//       </div>
//     );
//   }

//   function a11yProps(index: any) {
//     return {
//       id: `scrollable-auto-tab-${index}`,
//       'aria-controls': `scrollable-auto-tabpanel-${index}`,
//     };
//   }

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            flexGrow: 1,
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            marginTop: "3%",
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: theme.palette.secondary.light,
                },
                '&:hover fieldset': {
                  borderColor: 'yellow',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'green',
                },
              },
          },
        fieldSpacing: {
            marginLeft: "4.5%",
            marginRight: "4.5%",
        },
        link: {
            textDecoration: "none"
        },
        btn: {
            fontFamily: "PT Sans",
        }
    }),
);

export const ExternalApp: React.FC = function ExternalApp() {
    const classes = useStyles();
    // const [value, setValue] = React.useState(1);

    // const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    //     setValue(newValue);
    // };

    return (
        <>
            <Container maxWidth="lg">
                <div style={{textAlign: "center"}}>
                    <Typography variant="h5" style={{color: "#1D2635", paddingTop: "5%", fontFamily: "PT Sans",}}>
                        Become a Member <span style={{color: "#F7B614", fontFamily: "PT Sans",}}>Today</span>
                    </Typography>
                </div>
                <Grid container alignItems="center" style={{textAlign: "center"}} spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                        <div className={classes.root}>
                                <Typography align="left" variant="h6" style={{display: "inline-flex", fontFamily: "PT Sans",}}>
                                    Riders Needed !!!
                                    &nbsp;&nbsp;<a href="https://4b3pfykc7ix.typeform.com/to/bvlER1PD" target="_blank"  rel="noreferrer" title="Rider Form" className={classes.link}>
                                        <Button variant="contained" color="primary" className={classes.btn}>
                                            Apply Here
                                        </Button>
                                    </a>
                                </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6} >
                        <br/>
                        <img src="Images/ExcitedGirl2.png" width="60%" style={{marginLeft: "auto", marginRight: "auto"}} alt="surprised girl"></img>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}