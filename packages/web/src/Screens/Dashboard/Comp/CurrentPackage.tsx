import { useAppData } from '../../../Context/AppDataContext';
import { Grid, makeStyles, createStyles, withStyles, Typography, Theme, CardMedia, Card, CardContent, Stepper, Step, StepLabel, StepIconProps, StepConnector, CardHeader, Button } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import React, { useEffect } from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
          width: '100%'
        },
      packageRoot: {
          padding: "0% 0px 2% 0px"
      },
      category: {
          fontWeight: "bold",
      },
      image: {
          borderRadius: '30px',
          width: "200px",
          height: "140px"
      },
      card: {
        display: "block",
        background: "#FFFFFF",
        border: "1.14582px solid #F3F3F3",
        boxSizing: "border-box",
        boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
        borderRadius: "34.3745px",
        paddingLeft: "20px",
        paddingTop: "10px"
      },
      cardHeading: {
          fontWeight: "bold",
          fontFamily: "PT Sans"
      },
      cardContent: {
        paddingTop: 0,
        flexGrow: 1
      },
      orderBtn: {
        borderRadius: "36px",
        backgroundColor: "#F7B614",
        marginTop: "2%"
      },
    }),
);

export const CurrentPackage: React.FC = function CurrentPackage() {
  const classes = useStyles();
  var { value }  = useAppData();

  var { orders } = value;

  var history = useHistory();

  const ColorlibConnector = withStyles({
    alternativeLabel: {
      top: 22,
    },
    active: {
      '& $line': {
        backgroundImage:
        'linear-gradient( 95deg, #fea709a6 0%, #fec909 50%, #fec109 100%)',
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
            'linear-gradient( 95deg, #fea709a6 0%, #fec909 50%, #fec109 100%)',
      },
    },
    line: {
      height: 3,
      border: 0,
      backgroundColor: '#eaeaf0',
      borderRadius: 1,
    },
  })(StepConnector);
  
  const useColorlibStepIconStyles = makeStyles({
    root: {
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 50,
      height: 50,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundImage:
        'linear-gradient( 136deg, #fea709a6 0%, #fec909 50%, #fec109 100%)',
      boxShadow: '0 4px 10px 0 #fec109',
    },
    completed: {
      backgroundImage:
      'linear-gradient( 136deg, #fea709a6 0%, #fec909 50%, #fec109 100%)',
    },
  });

  function ColorlibStepIcon(props: StepIconProps) {
      const classes = useColorlibStepIconStyles();
      const { active, completed } = props;
    
      const icons: { [index: string]: React.ReactElement } = {
        1: <LocationOnOutlinedIcon />,
        2: <LocalShippingOutlinedIcon />,
        3: <HomeOutlinedIcon />,
      };
    
      return (
        <div
          className={clsx(classes.root, {
            [classes.active]: active,
            [classes.completed]: completed,
          })}
        >
          {icons[String(props.icon)]}
        </div>
      );
    }

    function getSteps() {
      return ['Pick-Up Time', 'In Transit', 'Delivered'];
      }  

      // eslint-disable-next-line
      const [activeStep, setActiveStep] = React.useState(0);
      const steps = getSteps();
      
      // const handleNext = () => {
      //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
      // };
      
      // const handleBack = () => {
      //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
      // };
      
      // const handleReset = () => {
      //     setActiveStep(0);
      // };
      
      const [latestOrderLength, setLatestOrderLength] = React.useState(0);
      const [latestOrderImage, setLatestOrderImage] = React.useState('');
      const [latestOrderStatus, setLatestOrderStatus] = React.useState('');

      useEffect(() => {
        try{
          orders.map((item, index) => {
            if(index === orders.length -1){
              setLatestOrderImage(item.OrderItems[0].imageName);
              setLatestOrderStatus(item.OrderStatus);
            }
          })

          if(latestOrderStatus === "Ordered" && activeStep !== 0){
            setActiveStep(-1);
          }else if(latestOrderStatus === "Picked Up" && activeStep !== 1){
            setActiveStep(1);
          }else if(latestOrderStatus === "In Transit" && activeStep !== 2){
            setActiveStep(2);
          }else if(latestOrderStatus === "Delivered" && activeStep !== 3){
            setActiveStep(2);
          }

          setLatestOrderLength(orders.length -1);
        }catch(err){
          console.log(err);
        }
      }, [orders])
      
      if(orders.length > 0 && latestOrderStatus !== ""){
        
        return (
            <>
                
                <Grid container direction="row" spacing={1} className={classes.packageRoot} alignItems="center">
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                        <div style={{flex: "0 0 100%", flexFlow: "row"}}>
                          <CardHeader
                            title={
                                    <>
                                      <Grid container direction="row" spacing={3} className={classes.packageRoot} alignItems="center">
                                          <Grid item xs={12} md={6} lg={6} container spacing={1}>
                                              <Grid item xs={12} md={12}>
                                                  <Typography variant="subtitle1" className={classes.category}>
                                                      Current Delivery Status
                                                  </Typography>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                    </>
                                  }
                          />
                        </div>
                        <div style={{display: "flex"}}>
                              <CardMedia >
                                  {/* eslint-disable-next-line */}
                                      <img src={latestOrderImage} className={classes.image} alt="Package Image"></img>
                              </CardMedia>
                              <CardContent className={classes.cardContent}>
                                      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                        {steps.map((label) => (
                                            <Step key={label}>
                                                <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                            </Step>
                                        ))}
                                      </Stepper>
                              </CardContent>
                          </div>
                        </Card>
                    </Grid>
                </Grid>
            </>
        )
      }else{
        return (
            <>
                
                <Grid container direction="row" spacing={1} className={classes.packageRoot} alignItems="center">
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                        <div style={{flex: "0 0 100%", flexFlow: "row"}}>
                          <CardHeader
                            title={
                                    <>
                                      <Grid container direction="row" spacing={3} className={classes.packageRoot} alignItems="center">
                                          <Grid item xs={12} md={6} lg={6} container spacing={1}>
                                              <Grid item xs={12} md={12}>
                                                  <Typography variant="subtitle1" className={classes.category}>
                                                      Current Delivery Status
                                                  </Typography>
                                              </Grid>
                                          </Grid>
                                      </Grid>
                                    </>
                                  }
                          />
                        </div>
                        <div style={{display: "flex"}}>
                              <CardContent className={classes.cardContent}>
                                <Typography variant="subtitle2">
                                    No orders currently.
                                </Typography>
                                <Button color="secondary" className={classes.orderBtn} onClick={(e) => {e.preventDefault(); history.push("/Restaurants")}}>
                                  Place An Order
                                </Button>
                              </CardContent>
                          </div>
                        </Card>
                    </Grid>
                </Grid>
            </>
        )
      }
}