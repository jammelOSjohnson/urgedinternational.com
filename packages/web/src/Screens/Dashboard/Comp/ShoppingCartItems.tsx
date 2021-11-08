import { Grid, makeStyles, createStyles, withStyles, Typography, Theme, CardMedia, Card, CardContent, Stepper, Step, StepLabel, StepIconProps, StepConnector, Divider, CardHeader, IconButton } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import { PaymentOptionsForm } from './PaymentOptionsForm';
import React from 'react';
import clsx from 'clsx';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            width: '100%'
          },
        details: {
            display: 'flex',
            flexDirection: 'row'
        },
        removeButton: {
          backgroundColor: "#F6F6F6",
          width: '5px',
          height: '5px'

        },
        addButton: {
          backgroundColor: "#FF5E14",
          width: '5px',
          height: '5px'
        },
        divider: {
            height: "30px",
            width: '20px',
            backgroundColor: "#FF5E14"
        },
        packageRoot: {
            padding: "0% 0px 2% 0px"
        },
        category: {
            fontWeight: "bold"
        },
        image: {
            maxWidth: '102px',
            maxHeight: '81px',
            marginTop: "20px",
            marginLeft: "12px"
        },
        card: {
          display: "flex",
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
      cardBody1: {
        marginTop: '10px',
        fontFamily: 'Open Sans',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "12px"
      },
      cardBody2: {
        marginTop: '10px',
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "22px"
      }
    }),
);

export const ShoppingCartItems: React.FC = function ShoppingCartItems() {
  const classes = useStyles();

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
    const [activeStep, setActiveStep] = React.useState(1);
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

    return (
        <>
            <Grid container direction="row" spacing={3} className={classes.packageRoot} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Shopping Cart
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.packageRoot} alignItems="flex-start">
                <Grid item xs={7}>
                    <Card className={classes.card}>
                      <div>
                        <div className={classes.details}>
                          <Typography>1. KFC Food Order</Typography>
                          <IconButton className={classes.removeButton}>
                            <RemoveIcon />
                          </IconButton>
                          <Typography>1</Typography>
                          <IconButton className={classes.addButton}>
                            <AddIcon />
                          </IconButton>
                          <IconButton className={classes.addButton}>
                            <CloseIcon />
                          </IconButton>
                          <Divider variant="middle" className={classes.divider}/>
                        </div>
                        <Grid container direction='row' spacing={2} alignItems='flex-start'>
                        <Grid item xs={2}>
                        <CardMedia >
                            {/* eslint-disable-next-line */}
                            <img src="Images/menu-Big Deal.png" className={classes.image} alt="Big Deal"></img>
                        </CardMedia>
                        </Grid>
                        <Grid item xs={10}>
                        <CardContent>
                            <Typography className={classes.cardHeading}>
                                Big Deal
                            </Typography>
                            <Typography className={classes.cardBody1}>
                              3 pcs. Chicken, 1 Reg. Fries 1, Pepsi 475mL
                            </Typography>
                            <Typography className={classes.cardBody2}>
                              Flavour Chicken: Original & Barbique Mixed. Flavour Drink: Grape/ Ginger Beer. Other: No Breast or Rib.
                            </Typography>
                        </CardContent>
                        </Grid>
                        </Grid>
                      </div>
                    </Card>
                </Grid>
                <Grid item xs={5}>
                    <PaymentOptionsForm />
                </Grid>
            </Grid>
        </>
    )
}