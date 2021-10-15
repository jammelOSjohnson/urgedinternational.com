import React from 'react';
//import CSS
import { Container, Grid, Typography, makeStyles, createStyles, Theme, AppBar, Tabs, Tab, Box, TextField, Button} from '@material-ui/core';
import { JobAppForm } from './JobAppForm';

interface Props {
    
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: any) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

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
        }
    }),
);

export const Section8: React.FC = function Section8() {
    const classes = useStyles();
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <Container maxWidth="lg" style={{paddingLeft: 0, paddingRight: 0}}>
                <div style={{textAlign: "center"}}>
                    <Typography variant="h5" style={{color: "#1D2635", marginTop: "5%"}}>
                        Become a Member <span style={{color: "#F7B614"}}>Today</span>
                    </Typography>
                </div>
                <Grid container alignItems="center" style={{textAlign: "center"}} spacing={1}>
                    <Grid item xs={10} sm={12} md={12} lg={9}>
                        <div className={classes.root}>
                            <AppBar position="static" style={{backgroundColor: "#1D2635"}} >
                                <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                                >
                                <Tab label="Busness Partners" {...a11yProps(0)} disabled />
                                <Tab label="Individuals" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                Busness Partners
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <JobAppForm />
                            </TabPanel>
                        </div>
                    </Grid>
                    <Grid item xs={10} md={10} lg={3} >
                        <Typography align="center" variant="h4">Join Us!</Typography>
                        <br/>
                        <img src="Images/ExcitedGirl2.png" style={{marginLeft: "auto", marginRight: "auto"}} alt="surprised girl"></img>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}