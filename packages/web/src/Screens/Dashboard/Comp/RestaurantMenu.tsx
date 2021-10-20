import { Container, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardHeader, CardActionArea, Avatar, CardMedia, CardContent, CardActions } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { ItemRating } from '../../../Components/ItemRating';



interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 5% 0px",
            borderRadius: "22px"
        },
        category: {
            fontWeight: "bold"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "left",
            position: "relative"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
        OrderResult1: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        OrderResult2: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto"
        },
        avatar: {
            width: "52px",
            height: "52px"
          },
        kfcImage: {
            marginTop: "-24%"
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "50%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        Button: {
            backgroundColor: "#FF5E14",
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        priceText: {
            color: theme.palette.primary.light,
            fontWeight: "bolder",
        },
        media: {
            height: 312,
            margin: "1% 1% 0% 1%",
            borderRadius: "5% 5% 0% 0%",
        }
    }),
);

export const RestaurantMenu: React.FC = function RestaurantMenu(props) {
    const classes = useStyles();
    
    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
      });
    
      var history = useHistory();

    
      
    return (
        <>
            <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "1%", fontWeight: "bold"}}>
                Results 
            </Typography>
            <Typography variant="body1" style={{ paddingBottom: "3%"}}>
                Please select item from the list of meals listed below. 
            </Typography>
            <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                {[1,2,3,4,5,6].map((text, index) => (
                    <Grid item xs={10} md={6} lg={4} xl={4} className={classes.gridSpacing}>
                        <Card className={classes.root}>
                            <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image="Images/menu-Big Deal.png"
                            title="Contemplative Reptile"
                            />
                            </CardActionArea>
                            <CardContent>
                                    <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                        <Grid item xs={6}>
                                                <Typography variant="h6"  component="p">
                                                    Big Deal
                                                </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                                <Typography variant="body2"  component="p">
                                                <ItemRating rating={3.5}/>
                                                </Typography>
                                        </Grid>
                                        <Grid item xs={12} >
                                                <Typography variant="body2"  component="p" >
                                                3 pcs. Chicken, 1 Reg. Fries 1, Pepsi 475mL
                                                </Typography>
                                        </Grid>
                                    </Grid>
                            </CardContent>
                            <CardActions>
                                <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} type="button">
                                    Place an Order
                                </Button>
                                <Typography variant="body2"  component="p" className={classes.priceText} style={{marginLeft: "56%"}}>
                                    $995.00
                                </Typography>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
