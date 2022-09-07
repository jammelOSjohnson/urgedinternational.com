import { useAppData } from '../../../Context/AppDataContext';
import { Select, Grid, makeStyles, createStyles, Typography, Theme, TextField, Button, InputLabel, FormControl, Card, CardActionArea, CardMedia, CardContent, CardActions, MenuItem, useMediaQuery, useTheme } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
//Import Components
import { ItemRating } from '../../../Components/ItemRating';
import {FastFoodChickenFlavor} from './FastFoodChickenFlavor';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { Alert } from '@material-ui/lab';


interface State {
    chickenFlavour1: string;
    chickenFlavour2: string;
    drink: string;
    otherIntructions: string;
    itemName: string;
    itemCost: number;
    imageName: string;
    orderStatus: string;
    deliveredBy: string;
    itemCategory: string;
    ifnotAvailable: string;
    itemDescription: string;
    quantity: number;
    restaurantName: string;
    side: string;
}

interface Props {
    itemCategory: string;
    handleChange: any;
    chickenFlavour1: string;
    chickenFlavour2: string;
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
            marginRight: "auto",
            minHeight: "446.99px"
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
        priceText: {
            color: theme.palette.primary.light,
            fontWeight: "bolder",
            fontFamily: "Inter"
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
        alert: {
            marginBottom: "3%",
            width: "97%",
            marginLeft: "auto",
            marginRight: "auto"
        }
    }),
);

export const RestaurantMenu: React.FC = function RestaurantMenu(props) {
    const classes = useStyles();
    
    var { value }  = useAppData();
    var { cartItems ,restaurants, selectedRestaurantName, selectedRestaurant, addItemToCart, userInfo, filteredMenuItems, clearCartItems } = value;
    var restaurant = restaurants[selectedRestaurant];
    // //console.log("Menu Screen Menu");
    // //console.log(selectedRestaurant);
    // //console.log(restaurants[selectedRestaurant]);

    const [selectedItem, setItem] = React.useState({
        ItemCost: 0.00,
        ItemDescription: "3 pcs. Chicken, 1 Reg. Fries 1, 1 475mL drink",
        ItemName: "",
        MenuCategory: "",
        ImageName: ""
    });

    const theme = useTheme();
    var history = useHistory();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const isMaatchMedium = useMediaQuery(theme.breakpoints.up('lg'));

    var [error, setError] = useState('');
    const [values, setValues] = React.useState<State>({
        chickenFlavour1: 'Select Flavour',
        chickenFlavour2: 'Select Flavour',
        drink: 'Select Drink',
        otherIntructions: '',
        itemName: '',
        itemCost: 0.00,
        imageName: "",
        orderStatus: "New",
        deliveredBy: "No one",
        itemCategory: "",
        ifnotAvailable: "Contact me",
        itemDescription: "",
        quantity: 1,
        restaurantName: "",
        side: "Select Side"
      });

    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    

    const handleOpen = (item) => {
        if(cartItems.length > 0){
            if(cartItems[0].restaurantName === restaurant.FirstName){
                setItem(item);
                setValues({...values, itemName: item.ItemName ,itemCost: item.ItemCost ,imageName: item.ImageName, itemCategory: item.MenuCategory, restaurantName: item.FirstName});
                setOpen(true);
            }else{
                setItem(item);
                setValues({...values, itemName: item.ItemName ,itemCost: item.ItemCost ,imageName: item.ImageName, itemCategory: item.MenuCategory, restaurantName: item.FirstName});
                console.log("about to ask customer if they want to create a new order");
                setOpen2(true);
            }
        }else{
            setItem(item);
            setValues({...values, itemName: item.ItemName ,itemCost: item.ItemCost ,imageName: item.ImageName, itemCategory: item.MenuCategory, restaurantName: item.FirstName});
            setOpen(true);
        }
        
    };

    const handleOpen2 = () => {
        try{
            console.log("about to clear cart for new order.");
            clearCartItems(value).then((res) => {
                setOpen2(false);
                setOpen(true);
            })
        }catch(err){

        }
        
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClose2 = () => {
        setOpen2(false);
    };
    
    

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value, itemName: selectedItem.ItemName, itemCost: selectedItem.ItemCost, itemDescription: selectedItem.ItemDescription});
    };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleLogin = (event) => {
        try{
          event.preventDefault();
          history.push('/Login', { from: history.location.pathname});
        }catch{
          ////////console.log('Failed to logout.');
        }
      }

    var AddToCart = async function(e,item){
        ////console.log("item selected");
        ////console.log(item);
        e.preventDefault();
        setError('');
        var payload = value;
        item.restaurantName = selectedRestaurantName;
        await addItemToCart(payload, item).then(() => {
            ////console.log("item should be successfully added");
            setValues(
                {
                    chickenFlavour1: 'Select Flavour',
                    chickenFlavour2: 'Select Flavour',
                    drink: 'Select Drink',
                    otherIntructions: '',
                    itemName: '',
                    itemCost: 0.00,
                    imageName: "",
                    orderStatus: "New",
                    deliveredBy: "No one",
                    itemCategory: "",
                    ifnotAvailable: "Contact me",
                    itemDescription: "",
                    quantity: 1,
                    restaurantName: "",
                    side: "Select Side"
                }
            );
            setOpen(false);
        })
    }

    var AddToCart2 = async function(e,item){
        console.log("item selected");
        ////console.log(item);
        e.preventDefault();
        setError('');
        var payload = value;
        item.restaurantName = selectedRestaurantName;

        item.chickenFlavour1 === 'Select Flavour'?
            setError('Please Select Flavor')
        :item.chickenFlavour2 === 'Select Flavour'?
            setError('Please Select Flavor')
        :item.drink === 'Select Drink'?
            setError('Please Select Drink')
        :await addItemToCart(payload, item).then(() => {
            ////console.log("item should be successfully added");
            setValues(
                {
                    chickenFlavour1: 'Select Flavour',
                    chickenFlavour2: 'Select Flavour',
                    drink: 'Select Drink',
                    otherIntructions: '',
                    itemName: '',
                    itemCost: 0.00,
                    imageName: "",
                    orderStatus: "New",
                    deliveredBy: "No one",
                    itemCategory: "",
                    ifnotAvailable: "Contact me",
                    itemDescription: "",
                    quantity: 1,
                    restaurantName: "",
                    side: "Select Side"
                }
            );
            setOpen(false);
        })
    }

    var AddToCart3 = async function(e,item){
        ////console.log("item selected");
        ////console.log(item);
        e.preventDefault();
        setError('');
        var payload = value;
        item.restaurantName = selectedRestaurantName;

        item.drink === 'Select Drink'?
            setError('Please Select Drink')
        :await addItemToCart(payload, item).then(() => {
            ////console.log("item should be successfully added");
            setValues(
                {
                    chickenFlavour1: 'Select Flavour',
                    chickenFlavour2: 'Select Flavour',
                    drink: 'Select Drink',
                    otherIntructions: '',
                    itemName: '',
                    itemCost: 0.00,
                    imageName: "",
                    orderStatus: "New",
                    deliveredBy: "No one",
                    itemCategory: "",
                    ifnotAvailable: "Contact me",
                    itemDescription: "",
                    quantity: 1,
                    restaurantName: "",
                    side: "Select Side"
                }
            );
            setOpen(false);
        })
    }

    var AddToCart4 = async function(e,item){
        console.log("item selected");
        ////console.log(item);
        e.preventDefault();
        setError('');
        var payload = value;
        item.restaurantName = selectedRestaurantName;

        item.chickenFlavour1 === 'Select Flavour'?
            setError('Please Select Flavor')
        :item.drink === 'Select Drink'?
            setError('Please Select Drink')
        :await addItemToCart(payload, item).then(() => {
            ////console.log("item should be successfully added");
            setValues(
                {
                    chickenFlavour1: 'Select Flavour',
                    chickenFlavour2: 'Select Flavour',
                    drink: 'Select Drink',
                    otherIntructions: '',
                    itemName: '',
                    itemCost: 0.00,
                    imageName: "",
                    orderStatus: "New",
                    deliveredBy: "No one",
                    itemCategory: "",
                    ifnotAvailable: "Contact me",
                    itemDescription: "",
                    quantity: 1,
                    restaurantName: "",
                    side: "Select Side"
                }
            );
            setOpen(false);
        })
    }

    var AddToCart5 = async function(e,item){
        console.log("item selected");
        ////console.log(item);
        e.preventDefault();
        setError('');
        var payload = value;
        item.restaurantName = selectedRestaurantName;

        item.chickenFlavour1 === 'Select Flavour'?
            setError('Please Select Flavor')
        :await addItemToCart(payload, item).then(() => {
            ////console.log("item should be successfully added");
            setValues(
                {
                    chickenFlavour1: 'Select Flavour',
                    chickenFlavour2: 'Select Flavour',
                    drink: 'Select Drink',
                    otherIntructions: '',
                    itemName: '',
                    itemCost: 0.00,
                    imageName: "",
                    orderStatus: "New",
                    deliveredBy: "No one",
                    itemCategory: "",
                    ifnotAvailable: "Contact me",
                    itemDescription: "",
                    quantity: 1,
                    restaurantName: "",
                    side: "Select Side"
                }
            );
            setOpen(false);
        })
    }

    if(restaurant === undefined){
        ////console.log("restaurant is undefined");
        return <>{history.push("/Restaurants")}</> 
    }else{

        return (
            <>
            
                {isMaatchMedium?
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
                                        <img style={{borderRadius: "5px"}} src={selectedItem.ImageName} height="81.25px" width="125px" alt="cart item" />
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
                                        {restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory !== "Zingers" && values.itemCategory !== "Famous Bowl" && values.itemCategory !== "Buckets" && values.itemCategory !== "Hot Wings" && values.itemCategory !== "Popcorn Chicken" && values.itemCategory !== "Sides"?
                                            <form onSubmit={(e) => AddToCart2(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Zingers"?
                                            <form onSubmit={(e) => AddToCart3(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Famous Bowl" && values.itemName !== "Famous Bowl Only"?
                                            <form onSubmit={(e) => AddToCart4(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Famous Bowl" && values.itemName === "Famous Bowl Only"?
                                            <form onSubmit={(e) => AddToCart5(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Buckets"?
                                            <form onSubmit={(e) => AddToCart4(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Hot Wings"?
                                            <form onSubmit={(e) => AddToCart4(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Popcorn Chicken"?
                                            <form onSubmit={(e) => AddToCart3(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Sides"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Elle B Catering And Events"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Juici Patties"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                {
                                                        values.itemCategory !== "Pastries" && values.itemCategory !== "Beverages" && values.itemCategory !== "Sides" && values.itemCategory !== "Loaves" && values.itemCategory !== "Patties"?
                                                            <Grid item xs={12} sm={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Sides</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.side }
                                                                        onChange={handleChange}
                                                                        label="side"
                                                                        name="side"
                                                                        className={classes.root}
                                                                    >
                                                                        <MenuItem value={"Select Side"}>Select Side</MenuItem>
                                                                        {
                                                                            restaurant.MenuItems.map((item2, index) => {
                                                                                if(item2.MenuCategory === "Sides"){
                                                                                return <MenuItem key={index} value={item2.ItemName}>{item2.ItemName}</MenuItem>
                                                                                }
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        :
                                                            <></>
                                                    }
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Burger King"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    {
                                                        values.itemCategory !== "Add Ons" && values.itemCategory !== "Beverages" && values.itemCategory !== "Sides"?
                                                            <Grid item xs={12} sm={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Sides</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.side }
                                                                        onChange={handleChange}
                                                                        label="side"
                                                                        name="side"
                                                                        className={classes.root}
                                                                    >
                                                                        <MenuItem value={"Select Side"}>Select Side</MenuItem>
                                                                        {
                                                                            restaurant.MenuItems.map((item2, index) => {
                                                                                if(item2.MenuCategory === "Sides"){
                                                                                return <MenuItem key={index} value={item2.ItemName}>{item2.ItemName}</MenuItem>
                                                                                }
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        :
                                                            <></>
                                                    }
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Popeyes"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "McKenzie's Bamboo Jerk Centre"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                {
                                                        values.itemCategory !== "Sides"?
                                                            <Grid item xs={12} sm={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Sides</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.side }
                                                                        onChange={handleChange}
                                                                        label="side"
                                                                        name="side"
                                                                        className={classes.root}
                                                                    >
                                                                        <MenuItem value={"Select Side"}>Select Side</MenuItem>
                                                                        {
                                                                            restaurant.MenuItems.map((item2, index) => {
                                                                                if(item2.MenuCategory === "Sides"){
                                                                                return <MenuItem key={index} value={item2.ItemName}>{item2.ItemName}</MenuItem>
                                                                                }
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        :
                                                            <></>
                                                    }
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Homar's ROTI & Grill"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "H & T Restaurant"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kick Out Sports Bar & Lounge"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "MOKAFE"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Lucky Chinese"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Murray’s Fish & Jerk Hut"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Fyahside"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :
                                        <></>
                                        }
                                    </Grid>
                                </Grid>
                            </div>
                            </Fade>
                        </Modal>
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
                            <div className={classes.paper}>
                                <h2 id="transition-modal-title">Create new order?</h2>
                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                    <Grid item xs={12}>
                                        <Grid item xs={12}>
                                            <Typography>
                                                Your order contains items from {cartItems.length > 0 ? cartItems[0].restaurantName : ''}. Create a new order to add items from {restaurant.FirstName} Restaurant.
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={10} sm={12} >
                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen2()} type="button">
                                                Add New Order 
                                            </Button>
                                        </Grid>
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
                        <Grid container direction="row" spacing={2} className={classes.root} alignItems="center">
                            {
                                filteredMenuItems.length !== 0?
                                    filteredMenuItems.map((item, index) => (
                                        <Grid item xs={6} sm={6} md={6} lg={4} xl={4} className={clsx(classes.gridSpacing, "cardMobile")}>
                                            <Card className={clsx(classes.root, "cardMobile")} style={{minHeight: "446.99px"}}>
                                                <CardActionArea>
                                                <CardMedia
                                                    className={clsx(classes.media, "mobileMedia")}
                                                    image={item.ImageName}
                                                    title="Contemplative Reptile"
                                                />
                                                </CardActionArea>
                                                <CardContent>
                                                        <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                                            <Grid item xs={6}>
                                                                    <Typography variant="h6" component="p" style={{height: "64px"}}>
                                                                        {item.ItemName}
                                                                    </Typography>
                                                            </Grid>
                                                            <Grid item xs={6}>
                                                                    <Typography variant="body2"  component="p" style={{height: "64px"}}>
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
                                                    {
                                                        userInfo.email === ""?
                                                            <Button size="small" onClick={handleLogin}  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} type="button">
                                                                Login
                                                            </Button>
                                                            :
                                                            <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} onClick={() => handleOpen(item)} type="button">
                                                                Add To Cart 
                                                            </Button> 
                                                    }
                                                    
                                                    <Typography variant="body2"  component="p" className={classes.priceText} style={{textAlign: "right", width: "100%"}}>
                                                        {`$ ${ parseFloat(item.ItemCost).toFixed(2)}`}
                                                    </Typography>
                                                </CardActions>
                                            </Card>
                                            <style>
                                                {
                                                    `
                                                        @media only screen and (max-width: 600px) {
                                                            .mobileMedia{
                                                                max-height: 146px;
                                                            }

                                                            .cardMobile{
                                                                min-height: 330.99px !important;
                                                            }
                                                        }
                                                    `
                                                }
                                            </style>
                                        </Grid>
                                    ))
                                :
                                restaurant.MenuItems.map((item, index) => (
                                    <Grid item xs={6} sm={6} md={6} lg={4} xl={4} className={clsx(classes.gridSpacing, "cardMobile")}>
                                        <Card className={clsx(classes.root, "cardMobile")} style={{minHeight: "446.99px"}}>
                                            <CardActionArea>
                                            <CardMedia
                                                className={clsx(classes.media, "mobileMedia")}
                                                image={item.ImageName}
                                                title="Contemplative Reptile"
                                            />
                                            </CardActionArea>
                                            <CardContent>
                                                    <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={6}>
                                                                <Typography variant="h6"  component="p" style={{height: "64px"}}>
                                                                    {item.ItemName}
                                                                </Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                                <Typography variant="body2"  component="p" style={{height: "64px"}}>
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
                                                {
                                                    userInfo.email === ""?
                                                        <Button size="small" onClick={handleLogin}  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} type="button">
                                                            Login 
                                                        </Button>
                                                        :
                                                        <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} onClick={() => handleOpen(item)} type="button">
                                                            Add To Cart 
                                                        </Button> 
                                                }
                                                    
                                                <Typography variant="body2"  component="p" className={classes.priceText} style={{textAlign: "right", width: "100%"}}>
                                                    {`$ ${ parseFloat(item.ItemCost).toFixed(2)}`}
                                                </Typography>
                                            </CardActions>
                                        </Card>
                                        <style>
                                                {
                                                    `
                                                        @media only screen and (max-width: 600px) {
                                                            .mobileMedia{
                                                                max-height: 146px;
                                                            }

                                                            .cardMobile{
                                                                min-height: 300px !important;
                                                            }

                                                        }
                                                    `
                                                }
                                        </style>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </>
                    :
                    <></>
                }

                {
                    isMatch?
                    <>
                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={clsx(classes.modal)}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                            <div className={clsx(classes.paper, "modalMobile")}>
                                <h2 id="transition-modal-title">Order Request Details</h2>
                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                    <Grid item xs={10} sm={6} md={4} lg={4} xl={4}>
                                        <img style={{borderRadius: "5px"}} src={selectedItem.ImageName} height="81.25px" width="125px" alt="cart item" />
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
                                    {restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory !== "Zingers" && values.itemCategory !== "Famous Bowl" && values.itemCategory !== "Buckets" && values.itemCategory !== "Hot Wings" && values.itemCategory !== "Popcorn Chicken" && values.itemCategory !== "Sides"?
                                            <form onSubmit={(e) => AddToCart2(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Zingers"?
                                            <form onSubmit={(e) => AddToCart3(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Famous Bowl" && values.itemName !== "Famous Bowl Only"?
                                            <form onSubmit={(e) => AddToCart4(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Famous Bowl" && values.itemName === "Famous Bowl Only"?
                                            <form onSubmit={(e) => AddToCart5(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Buckets"?
                                            <form onSubmit={(e) => AddToCart4(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Hot Wings"?
                                            <form onSubmit={(e) => AddToCart4(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Popcorn Chicken"?
                                            <form onSubmit={(e) => AddToCart3(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Kentucky Fried Chicken" && values.itemCategory === "Sides"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-outlined-label"
                                                                id="demo-simple-select-outlined"
                                                                value={values.ifnotAvailable}
                                                                onChange={handleChange}
                                                                label="ifnotAvailable"
                                                                name="ifnotAvailable"
                                                                className={classes.root}
                                                                fullWidth
                                                            >
                                                                <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                            </Select>
                                                        </FormControl>
                                                    </Grid><br />
                                                    {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                    <Grid item xs={10} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Elle B Catering And Events"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Juici Patties"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                {
                                                        values.itemCategory !== "Pastries" && values.itemCategory !== "Beverages" && values.itemCategory !== "Sides" && values.itemCategory !== "Loaves" && values.itemCategory !== "Patties"?
                                                            <Grid item xs={12} sm={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Sides</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.side }
                                                                        onChange={handleChange}
                                                                        label="side"
                                                                        name="side"
                                                                        className={classes.root}
                                                                    >
                                                                        <MenuItem value={"Select Side"}>Select Side</MenuItem>
                                                                        {
                                                                            restaurant.MenuItems.map((item2, index) => {
                                                                                if(item2.MenuCategory === "Sides"){
                                                                                return <MenuItem key={index} value={item2.ItemName}>{item2.ItemName}</MenuItem>
                                                                                }
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        :
                                                            <></>
                                                    }
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Burger King"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                {
                                                        values.itemCategory !== "Add Ons" && values.itemCategory !== "Beverages" && values.itemCategory !== "Sides"?
                                                            <Grid item xs={12} sm={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">Sides</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.side }
                                                                        onChange={handleChange}
                                                                        label="side"
                                                                        name="side"
                                                                        className={classes.root}
                                                                    >
                                                                        <MenuItem value={"Select Side"}>Select Side</MenuItem>
                                                                        {
                                                                            restaurant.MenuItems.map((item2, index) => {
                                                                                if(item2.MenuCategory === "Sides"){
                                                                                return <MenuItem key={index} value={item2.ItemName}>{item2.ItemName}</MenuItem>
                                                                                }
                                                                            })
                                                                        }
                                                                    </Select>
                                                                </FormControl>
                                                            </Grid>
                                                        :
                                                            <></>
                                                    }
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Popeyes"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <FastFoodChickenFlavor props={values} handleChange={handleChange} menuItems={restaurant.MenuItems} />
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "McKenzie's Bamboo Jerk Centre"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "Homar's ROTI & Grill"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                    <Grid item xs={12} sm={12} >
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
                                                    <Grid item xs={12} >
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-outlined-label"
                                                                    id="demo-simple-select-outlined"
                                                                    value={values.ifnotAvailable}
                                                                    onChange={handleChange}
                                                                    label="ifnotAvailable"
                                                                    name="ifnotAvailable"
                                                                    className={classes.root}
                                                                    fullWidth
                                                                >
                                                                    <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                    <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                    <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                    <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} >
                                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                            Add To Cart 
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </form>
                                        :restaurant.FirstName === "H & T Restaurant"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                        :restaurant.FirstName === "Kick Out Sports Bar & Lounge"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </form>
                                        :restaurant.FirstName === "MOKAFE"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Lucky Chinese"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Murray’s Fish & Jerk Hut"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :restaurant.FirstName === "Fyahside"?
                                            <form onSubmit={(e) => AddToCart(e, values)}>
                                                    <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12} sm={12} >
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
                                                        <Grid item xs={12} >
                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                    <InputLabel id="demo-simple-select-outlined-label">If not available?</InputLabel>
                                                                    <Select
                                                                        labelId="demo-simple-select-outlined-label"
                                                                        id="demo-simple-select-outlined"
                                                                        value={values.ifnotAvailable}
                                                                        onChange={handleChange}
                                                                        label="ifnotAvailable"
                                                                        name="ifnotAvailable"
                                                                        className={classes.root}
                                                                        fullWidth
                                                                    >
                                                                        <MenuItem value={"Contact me"}>Contact me</MenuItem>
                                                                        <MenuItem value={"Delivery rider can decide"}>Delivery rider can decide</MenuItem>
                                                                        <MenuItem value={"Refund for this item"}>Refund for this item</MenuItem>
                                                                        <MenuItem value={"Cancel my entire Order"}>Cancel my entire Order</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                        </Grid>
                                                        <Grid item xs={12} sm={12} >
                                                            <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="submit">
                                                                Add To Cart 
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                            </form>
                                        :
                                        <></>
                                        }
                                    </Grid>
                                </Grid>
                            </div>
                            </Fade>
                        </Modal>
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
                                <h2 id="transition-modal-title">Create new order?</h2>
                                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                    <Grid item xs={12}>
                                        <Typography>
                                            Your order contains items from {cartItems.length > 0 ? cartItems[0].restaurantName : ''}. Create a new order to add items from {restaurant.FirstName} Restaurant.
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} >
                                        <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen2()} type="button">
                                            Add New Order 
                                        </Button>
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
                        <Grid container direction="row" spacing={2} className={classes.root} alignItems="center">
                            {
                                filteredMenuItems.length !== 0?
                                    filteredMenuItems.map((item, index) => (
                                        <Grid item xs={6} sm={6} md={6} lg={4} xl={4} className={clsx(classes.gridSpacing, "cardMobile")}>
                                            <Card className={clsx(classes.root, "cardMobile")} style={{minHeight: "300px"}}>
                                                <CardActionArea>
                                                <CardMedia
                                                    className={clsx(classes.media, "mobileMedia")}
                                                    image={item.ImageName}
                                                    title="Contemplative Reptile"
                                                />
                                                </CardActionArea>
                                                <CardContent>
                                                        <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                                            <Grid item xs={12}>
                                                                    <Typography variant="h6" className="itemNameMobile" component="p" style={{height: "30px"}}>
                                                                        {item.ItemName}
                                                                    </Typography>
                                                            </Grid>
                                                            <Grid item xs={12} className="itemDescMobile">
                                                                    <Typography variant="body2"  component="p">
                                                                        {item.ItemDescription}
                                                                    </Typography>
                                                            </Grid>
                                                        </Grid>
                                                </CardContent>
                                                <CardActions>
                                                    <Grid container xs={12} direction="row" spacing={0} className={classes.root} alignItems="center">
                                                        <Grid item xs={6}>
                                                            <Typography variant="body2"  component="p" className={classes.priceText} style={{height: "30px", textAlign: "left", width: "100%"}}>
                                                                {`$ ${ parseFloat(item.ItemCost).toFixed(2)}`}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                                <Typography variant="body2"  component="p" style={{height: "30px", textAlign: "right"}}>
                                                                    <ItemRating rating={3.5}/>
                                                                </Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            {
                                                                userInfo.email === ""?
                                                                    <Button size="small" onClick={handleLogin}  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="button">
                                                                        Login 
                                                                    </Button>
                                                                    :
                                                                    <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen(item)} type="button">
                                                                        Add To Cart 
                                                                    </Button> 
                                                            }
                                                        </Grid>
                                                    </Grid>
                                                </CardActions>
                                            </Card>
                                            <style>
                                                {
                                                    `   
                                                        @media only screen and (max-width: 1280px) {

                                                            .cardMobile{
                                                                min-height: 300px !important;
                                                                border-radius: 0;
                                                            }

                                                            .itemDescMobile{
                                                                height: 74.594px;
                                                            }

                                                            .MuiCardActions-root{
                                                                padding: 10px;
                                                            }

                                                            .MuiCardContent-root {
                                                                padding-bottom: 0px;
                                                            }
                                                        }

                                                        @media only screen and (max-height: 679px) {
                                                            .modalMobile{
                                                                max-height: 590px;
                                                                overflow-x: hidden;
                                                                overflow-y: auto;
                                                            }
                                                        }

                                                        @media only screen and (max-width: 600px) {
                                                            .mobileMedia{
                                                                max-height: 111.48px;
                                                            }

                                                            .cardMobile{
                                                                min-height: 300px !important;
                                                                border-radius: 0;
                                                            }

                                                            .itemDescMobile{
                                                                height: 74.594px;
                                                            }

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

                                                            .itemDescMobile{
                                                                height: 51.594px;
                                                            }
                                                        }

                                                        @media only screen and (max-width: 471px) {
                                                            .itemNameMobile {
                                                                font-size: 0.9rem;
                                                            }

                                                            .MuiRating-root{
                                                                font-size: 1rem;
                                                            }

                                                            .MuiCardActions-root {
                                                                padding: 1px;
                                                            }

                                                        }

                                                        @media only screen and (max-width: 460px) {
                                                            .itemDescMobile{
                                                                height: 66.594px;
                                                            }

                                                        }

                                                        @media only screen and (max-width: 411px) {
                                                            .itemDescMobile{
                                                                height: 60.594px;
                                                            }

                                                            .MuiCardContent-root {
                                                                padding: 2px;
                                                            }

                                                        }

                                                        @media only screen and (max-width: 375px) {
                                                            .itemDescMobile{
                                                                height: 78.594px;
                                                            }

                                                            .MuiRating-root {
                                                                font-size: 0.8rem;
                                                            }
                                                        }

                                                        @media only screen and (max-width: 340px) {
                                                            .itemDescMobile{
                                                                height: 81.594px;
                                                            }

                                                        }
                                                    `
                                                }
                                        </style>
                                        </Grid>
                                    ))
                                :
                                restaurant.MenuItems.map((item, index) => (
                                    <Grid item xs={6} sm={6} md={6} lg={4} xl={4} className={clsx(classes.gridSpacing, "cardMobile")}>
                                        <Card className={clsx(classes.root, "cardMobile")} style={{minHeight: "300px"}}>
                                            <CardActionArea>
                                            <CardMedia
                                                className={clsx(classes.media, "mobileMedia")}
                                                image={item.ImageName}
                                                title="Contemplative Reptile"
                                            />
                                            </CardActionArea>
                                            <CardContent>
                                                    <Grid container xs={12} direction="row" spacing={1} className={classes.root} alignItems="center">
                                                        <Grid item xs={12}>
                                                                <Typography variant="h6" className="itemNameMobile" component="p" style={{height: "30px"}}>
                                                                    {item.ItemName}
                                                                </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} className="itemDescMobile">
                                                                <Typography variant="body2"  component="p" >
                                                                    {item.ItemDescription}
                                                                </Typography>
                                                        </Grid>
                                                    </Grid>
                                            </CardContent>
                                            <CardActions>
                                                <Grid container xs={12} direction="row" spacing={0} className={classes.root} alignItems="center">
                                                    <Grid item xs={6}>
                                                            <Typography variant="body2"  component="p" className={classes.priceText} style={{height: "30px", width: "100%"}}>
                                                                {`$ ${ parseFloat(item.ItemCost).toFixed(2)}`}
                                                            </Typography>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                            <Typography variant="body2"  component="p" style={{height: "30px", textAlign: "right"}}>
                                                                <ItemRating rating={3.5}/>
                                                            </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        {
                                                            userInfo.email === ""?
                                                                <Button size="small" onClick={handleLogin}  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} type="button">
                                                                    Login 
                                                                </Button>
                                                                :
                                                                <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen(item)} type="button">
                                                                    Add To Cart 
                                                                </Button> 
                                                        }
                                                    </Grid>
                                                </Grid>
                                            </CardActions>
                                        </Card>
                                        <style>
                                                {
                                                    `   
                                                        @media only screen and (max-width: 1280px) {

                                                            .cardMobile{
                                                                min-height: 300px !important;
                                                                border-radius: 0;
                                                            }

                                                            .itemDescMobile{
                                                                height: 74.594px;
                                                            }

                                                            .MuiCardActions-root{
                                                                padding: 10px;
                                                            }

                                                            .MuiCardContent-root {
                                                                padding-bottom: 0px;
                                                            }
                                                        }

                                                        @media only screen and (max-height: 679px) {
                                                            .modalMobile{
                                                                max-height: 590px;
                                                                overflow-x: hidden;
                                                                overflow-y: auto;
                                                            }
                                                        }

                                                        @media only screen and (max-width: 600px) {
                                                            .mobileMedia{
                                                                max-height: 111.48px;
                                                            }

                                                            .cardMobile{
                                                                min-height: 300px !important;
                                                                border-radius: 0;
                                                            }

                                                            .itemDescMobile{
                                                                height: 74.594px;
                                                            }

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

                                                            .itemDescMobile{
                                                                height: 51.594px;
                                                            }
                                                        }

                                                        @media only screen and (max-width: 460px) {
                                                            .itemDescMobile{
                                                                height: 66.594px;
                                                            }

                                                            .itemDescMobile{
                                                                height: 66.594px;
                                                            }

                                                        }

                                                        @media only screen and (max-width: 471px) {
                                                            .itemNameMobile {
                                                                font-size: 0.9rem;
                                                            }

                                                            .MuiRating-root{
                                                                font-size: 1rem;
                                                            }

                                                            .MuiCardActions-root {
                                                                padding: 1px;
                                                            }

                                                        }

                                                        @media only screen and (max-width: 411px) {
                                                            .itemDescMobile{
                                                                height: 60.594px;
                                                            }

                                                            .MuiCardContent-root {
                                                                padding: 2px;
                                                            }

                                                        }

                                                        @media only screen and (max-width: 375px) {
                                                            .itemDescMobile{
                                                                height: 78.594px;
                                                            }

                                                            .MuiRating-root {
                                                                font-size: 0.8rem;
                                                            }
                                                        }

                                                        @media only screen and (max-width: 340px) {
                                                            .itemDescMobile{
                                                                height: 81.594px;
                                                            }

                                                        }
                                                    `
                                                }
                                        </style>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </>
                    :
                    <></>
                }
                
            </>
        )
    }
}

export default RestaurantMenu;