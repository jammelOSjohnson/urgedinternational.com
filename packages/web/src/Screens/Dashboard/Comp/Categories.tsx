import { Grid, makeStyles, createStyles, Typography, Theme, Card, CardMedia, CardContent, useMediaQuery, useTheme, Backdrop, Modal, Fade, Button, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import clsx from 'clsx';
import React from 'react';
import { Link, useHistory } from "react-router-dom";



const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 1% 0px"
        },
        cardTitle1: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#F25A29"
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#13ADD1"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#FEC109"
        },
        cardTitle4: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#53C557"
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            padding: 0,
            paddingTop: "30px"
        },
        cardImage: {
            textAlign: "left"
        },
        card: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: "20px",
            paddingTop: "10px"
        },
        links: {
            textDecoration: "none"
        },
        category: {
            fontWeight: "bold"
        }, modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
          },
          paper: {
             backgroundColor: theme.palette.background.paper,
             border: '2px solid #000',
             boxShadow: theme.shadows[5],
             padding: theme.spacing(2, 4, 3),
             minWidth: "34%",
             maxWidth: "400px",
             borderRadius: "20px",
             borderColor: theme.palette.primary.light
            
          },
          ButtonMobile: {
              backgroundColor: theme.palette.primary.light,
              border: "1.21951px solid #FFFFFF",
              height: "41px",
              width: "100%",
              borderRadius: 4,
          },
          btnfonts: {
              fontFamily: "PT Sans",
              fontSize: "13px",
              lineHeight: "16.82px",
              fontWeight: "bolder",
              color: "#FAFAFA",
              textTransform: "none"
          },
          cartIcon: {
              position: "absolute",
              top: 18,
              right: 10
          }
    }),
);

export const Categories: React.FC = function Categories() {
    const classes = useStyles();
    const theme = useTheme();

    const [open2, setOpen2] = React.useState(false);
    const [open, setOpen] = React.useState(false);

    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    const handleClose2 = () => {
        setOpen2(false);
      };
  
    const handleOpen2 = () => {
      try
      {
        setOpen2(true);
      }catch(err){

      }
      
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        try
        {
          setOpen(true);
        }catch(err){
  
        }
        
      };
      
    return (
        <>
            {isMatchMedium? (
                <>
                <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
                >
                    <Fade in={open2}>
                    <div className={clsx(classes.paper, 'modalMobile')}>
                        <h2 id="transition-modal-title" style={{textAlign: "center"}}>Whatsapp Delivery</h2>
                        <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose2}>
                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                        </Link>
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12}>
                                <Grid item xs={12}>
                                <Typography style={{textAlign: "center"}}>
                                We provide both errand services and package delivery.<br />
                                Click continue to contact us on whatsapp.
                                </Typography>
                                </Grid><br/>
                                <Grid item xs={10} sm={12} >
                                <a href="http://wa.me/18767735015" target="_blank" rel="nofollow noreferrer" style={{textDecoration: "none"}}>
                                    <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen2()} type="button">
                                        Continue 
                                    </Button>
                                </a>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <style>
                    {
                    `
                        .link-font{
                        font-family: 'PT Sans'
                        }

                        .link-fontH  {
                        font-family: 'PT Sans';
                        color: #5D6467;
                        }

                        .MuiTypography-body1 {
                        font-family: PT Sans;
                        }

                        .activeLinkHover:hover{
                        background-color: #F25A29;
                        }

                        .inactiveLinkHover:hover{
                        background-color: #5D6467;
                        }

                        .MuiButton-root:hover {
                            background-color: #FF5E14;
                        }

                        .modalMobile{
                            position: relative;
                        }
                    `
                    }
                </style>
                </>
            ):<></>}
            {isMatch? (
                <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={clsx(classes.modal)}
                    open={open2}
                    onClose={handleClose2}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open2}>
                    <div className={clsx(classes.paper, "modalMobile")}>
                        <h2 id="transition-modal-title" style={{textAlign: "center"}}>Whatsapp Delivery</h2>
                        <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose2}>
                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                        </Link>
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12}>
                            <Typography style={{textAlign: "center"}}>
                                We provide both errand services and package delivery.<br />
                                Click continue to contact us on whatsapp.
                            </Typography>
                            </Grid><br />
                            <Grid item xs={12} sm={12} >
                                <a href="http://wa.me/18767735015" target="_blank" rel="nofollow noreferrer" style={{textDecoration: "none"}}>  
                                <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen2()} type="button">
                                    Continue 
                                </Button>
                                </a>
                            </Grid>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <style>
                    {
                      `
                        .link-font{
                          font-family: 'PT Sans'
                        }

                        .link-fontH  {
                          font-family: 'PT Sans';
                          color: #5D6467;
                        }

                        .MuiTypography-body1 {
                          font-family: PT Sans;
                        }

                        .activeLinkHover:hover{
                          background-color: #F25A29;
                        }

                        .inactiveLinkHover:hover{
                          background-color: #5D6467;
                        }

                        .MuiButton-root:hover {
                          background-color: #FF5E14;
                        }

                        @media only screen and (max-height: 679px) {
                          .modalMobile{
                              max-height: 590px;
                              overflow-x: hidden;
                              overflow-y: auto;
                          }
                        }

                        @media only screen and (max-height: 600px) {
                            .modalMobile{
                                max-height: 500px;
                                overflow-x: hidden;
                                overflow-y: auto;
                            }
                        }

                        @media only screen and (max-height: 560px) {
                            .modalMobile{
                                max-height: 490px;
                                overflow-x: hidden;
                                overflow-y: auto;
                            }
                        }

                        .modalMobile{
                          position: relative;
                        }
                      `
                    }
                  </style>
                </>
            ) : <></>}
            <Grid container direction="row" spacing={3} className={classes.root} alignItems="center">
                <Grid item xs={12} md={6} lg={3} container spacing={1}>
                    <Grid item xs={10} md={10}>
                        <Typography variant="subtitle1" className={classes.category}>
                            Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                <Grid item xs={12} md={3}>
                    <Link to="/FoodDelivery" className={classes.links} id="categories">
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardImage}>
                                <img src="Images/FoodDeliveryServiceSM.png" alt="FoodDeliveryServiceSM"></img>
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle1}>
                                    Food Delivery
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Link to={`${referralPath}`} className={classes.links} onClick={handleOpen2} title="Errand Services">
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardImage}>
                                <img src="Images/lightbluetruckIconImageSM.png" alt="lightbluetruckIconImageSM"></img>
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle2}>
                                    Errand Services
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Link to={`${referralPath}`} className={classes.links} onClick={handleOpen2} title="Urged Express">
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardImage}>
                                <img src="Images/yellowtruckIconImageSM.png" alt="yellowtruckIconImageSM"></img>
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle3}>
                                    Urged Express
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Link to={`${referralPath}`} className={classes.links} onClick={handleOpen} title="Market Place">
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardImage}>
                                <img src="Images/GreenMarketPlace.png" alt="GreenMarketPlace"></img>
                            </CardMedia>
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom className={classes.cardTitle4}>
                                    Market Place
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="info">
                    <b><h4>Comming Soon !!!</h4></b>
                </Alert>
            </Snackbar>
        </>
    )
}
