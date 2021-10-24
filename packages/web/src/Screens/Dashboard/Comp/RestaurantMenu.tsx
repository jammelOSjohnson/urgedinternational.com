import { useAppData } from '../../../Context/AppDataContext';
import { Select, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, Input, InputAdornment, IconButton, OutlinedInput, InputLabel, FormControl, Card, CardHeader, CardActionArea, Avatar, CardMedia, CardContent, CardActions, MenuItem } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
//Import Components
import { ItemRating } from '../../../Components/ItemRating';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';


interface State {
    flavour1: string;
    flavour2: string;
    drink: string;
    otherIntructions: string;
    itemName: string;
    itemCost: number;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 0% 0px",
            borderRadius: "22px",
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "0.1px dotted"
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
            backgroundColor: theme.palette.primary.light,
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
            height: 274,
            margin: "1% 1% 0% 1%",
            borderRadius: "5% 5% 0% 0%",
        },
        modal: {
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
           borderRadius: "50px",
           borderColor: theme.palette.primary.light
          
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        },
    }),
);

export const RestaurantMenu: React.FC = function RestaurantMenu(props) {
    const classes = useStyles();
    
    var { value }  = useAppData();
    var { restaurants, selectedRestaurant, addItemToCart } = value;
    var restaurant = restaurants[selectedRestaurant];
    console.log("Menu Screen Menu");
    console.log(selectedRestaurant);
    console.log(restaurants[selectedRestaurant]);

    const [selectedItem, setItem] = React.useState({
        ItemCost: 0.00,
        ItemDescription: "3 pcs. Chicken, 1 Reg. Fries 1, 1 475mL drink",
        ItemName: "",
        MenuCategory: ""
    });

    const [values, setValues] = React.useState<State>({
        flavour1: 'Select Flavour',
        flavour2: 'Select Flavour',
        drink: 'Select Drink',
        otherIntructions: '',
        itemName: '',
        itemCost: 0.00
      });

    const [open, setOpen] = React.useState(false);
    

    const handleOpen = (item) => {
        setItem(item);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    var history = useHistory();

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value, itemName: selectedItem.ItemName, itemCost: selectedItem.ItemCost});
    };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

    var AddToCart = async function(item){
        console.log("item selected");
        console.log(item);
        var payload = value;
        await addItemToCart(payload, item).then(() => {
            console.log("item should be successfully added");
            setValues(
                {
                    flavour1: 'Select Flavour',
                    flavour2: 'Select Flavour',
                    drink: 'Select Drink',
                    otherIntructions: '',
                    itemName: '',
                    itemCost: 0.00
                }
            );
            setOpen(false);
        })
    }

    if(restaurant === undefined){
        return history.push("/Restaurants")
    }else{

        return (
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Order Request Details</h2>
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={10} sm={6} md={4} lg={4} xl={4}>
                                <img style={{borderRadius: "5px"}} src="Images/menu-Big Deal.png" height="81.25px" width="125px" alt="cart item" />
                            </Grid>
                            <Grid item xs={10} sm={6} md={8} lg={8} xl={8}>
                                <Typography>{selectedItem.ItemName}</Typography>
                                {/* <Typography>Item rating</Typography> */}
                                <Typography className={classes.priceText}><span>$</span>{parseFloat(selectedItem.ItemCost.toString()).toFixed(2)}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography>{selectedItem.ItemDescription}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <form>
                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                        <Grid item xs={10} sm={6} md={6} lg={6}>
                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">1st choice</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={values.flavour1}
                                                    onChange={handleChange}
                                                    label="Flavour1"
                                                    name="flavour1"
                                                    className={classes.root}
                                                >
                                                    <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                                    <MenuItem value={"Original"}>Original</MenuItem>
                                                    <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                                    <MenuItem value={"Spicy"}>Spicy</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={10} sm={6} md={6} lg={6}>
                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">2nd choice</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={values.flavour2 }
                                                    onChange={handleChange}
                                                    label="Flavour2"
                                                    name="flavour2"
                                                    className={classes.root}
                                                >
                                                    <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                                    <MenuItem value={"Original"}>Original</MenuItem>
                                                    <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                                    <MenuItem value={"Spicy"}>Spicy</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={10} sm={12} >
                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <InputLabel id="demo-simple-select-outlined-label">Drink</InputLabel>
                                                <Select
                                                    labelId="demo-simple-select-outlined-label"
                                                    id="demo-simple-select-outlined"
                                                    value={values.drink }
                                                    onChange={handleChange}
                                                    label="drink"
                                                    name="drink"
                                                    className={classes.root}
                                                >
                                                    <MenuItem value={"Select Drink"}>Select Drink</MenuItem>
                                                    <MenuItem value={"Water"}>Water</MenuItem>
                                                    <MenuItem value={"Pepsi"}>Pepsi</MenuItem>
                                                    <MenuItem value={"Ginger Beer"}>Ginger Beer</MenuItem>
                                                    <MenuItem value={"Flavour Splash"}>Flavour Splash</MenuItem>
                                                    <MenuItem value={"Tropics Orangeade"}>Tropics Orangeade</MenuItem>
                                                    <MenuItem value={"Topics Fruit Punch"}>Topics Fruit Punch</MenuItem>
                                                    <MenuItem value={"Tropics Grape"}>Tropics Grape</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={10} sm={12} >
                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Special Intructions"
                                                multiline
                                                rows={4}
                                                defaultValue={values.otherIntructions}
                                                onChange={handleChange2('otherIntructions')}
                                                variant="outlined"
                                                placeholder="Enter Instructions Here"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={10} sm={12} >
                                            <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} onClick={() => AddToCart(values)} type="button">
                                                Add To Cart 
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "1%", fontWeight: "bold"}}>
                    Results 
                </Typography>
                <Typography variant="body1" style={{ paddingBottom: "3%"}}>
                    Please select item from the list of meals listed below. 
                </Typography>
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    {restaurant.MenuItems.map((item, index) => (
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
                                                        {item.ItemName}
                                                    </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                    <Typography variant="body2"  component="p">
                                                    <ItemRating rating={3.5}/>
                                                    </Typography>
                                            </Grid>
                                            <Grid item xs={12} >
                                                    <Typography variant="body2"  component="p" >
                                                        {item.ItemDescription}
                                                    </Typography>
                                            </Grid>
                                        </Grid>
                                </CardContent>
                                <CardActions>
                                    <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} onClick={() => handleOpen(item)} type="button">
                                        Add To Cart 
                                    </Button>
                                    <Typography variant="body2"  component="p" className={classes.priceText} style={{marginLeft: "56%", width: "70px"}}>
                                        {`$ ${ parseFloat(item.ItemCost).toFixed(2)}`}
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </>
        )
    }
}
