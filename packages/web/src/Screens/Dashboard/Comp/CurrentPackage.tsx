import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, CardMedia, Card, CardContent, Link, Stepper, Step, StepLabel, StepIconProps } from '@material-ui/core';
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

function ColorlibStepIcon(props: StepIconProps) {
    // const classes = useColorlibStepIconStyles();
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

export const CurrentPackage: React.FC = function CurrentPackage() {
    const classes = useStyles();
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });

    var history = useHistory();



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
                                <div>
                                    {activeStep === steps.length ? (
                                        <div>
                                            <Typography className={classes.instructions}>
                                                All steps completed - you&apos;re finished
                                            </Typography>
                                            <Button onClick={handleReset} className={classes.button}>
                                                Reset
                                            </Button>
                                        </div>
                                    ) : (
                                        <div>
                                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                                            <div>
                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    className={classes.button}
                                                >
                                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
                {/* <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/lightbluetruckIconImageSM.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle2}>
                                    Errand Services
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid> */}
                {/* <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/yellowtruckIconImageSM.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle3}>
                                    Urged Express
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid> */}
                {/* <Grid item xs={10} md={3}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardImage}>
                            <img src="Images/GreenMarketPlace.png"></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                            <Link className={classes.links} to="#" title="Food Delivery">
                                <Typography gutterBottom className={classes.cardTitle4}>
                                    Market Place
                                </Typography>
                            </Link>
                        </CardContent>
                    </Card>
                </Grid> */}
            </Grid>
        </>
    )
}