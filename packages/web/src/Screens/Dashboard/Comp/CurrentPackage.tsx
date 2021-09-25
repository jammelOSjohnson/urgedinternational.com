import { Container, Grid, makeStyles, createStyles, withStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, CardMedia, Card, CardContent, Link, Stepper, Step, StepLabel, StepIconProps, StepConnector } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
// import {LocationOnOutlinedIcon, LocalShippingOutlinedIcon, HomeOutlinedIcon} from '@material-ui/icons';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { LockRounded, EmailRounded, PlayArrowRounded } from "@material-ui/icons/";

interface Props {

}

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
          },
        packageRoot: {
            padding: "0% 0px 2% 0px"
        },
        category: {
            fontWeight: "bold"
        },
        image: {
            borderRadius: '30px'
        },
        card: {

        },
        cardContent: {
            fontWeight: "bold"
        }
    }),
);

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



export const CurrentPackage: React.FC = function CurrentPackage() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });

    var history = useHistory();

    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();
    
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    
    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <>
            <Grid container direction="row" spacing={3} className={classes.packageRoot} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Current Packages
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.packageRoot} alignItems="center">
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardMedia >
                            <img src="Images/Package Image.png" className={classes.image}></img>
                        </CardMedia>
                        <CardContent >
                            <Typography gutterBottom className={classes.cardContent}>
                                Document Delivery
                            </Typography>
                            <Typography gutterBottom>
                                Two new files were added for Service Page.
                            </Typography>
                            <div className={classes.root}>
                                <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    )
}