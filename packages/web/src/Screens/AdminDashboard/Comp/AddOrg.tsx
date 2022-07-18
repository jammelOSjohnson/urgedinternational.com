import {  Grid, makeStyles, createStyles, Theme, Button, Modal, Fade, Backdrop, TextField, FormControl, MenuItem } from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import { Link, useHistory } from "react-router-dom";
import { ArrowForwardRounded } from "@material-ui/icons/";
import {Categories} from "./Categories";
import { useAppData } from '../../../Context/AppDataContext';
import { Alert } from '@material-ui/lab';

interface State {
    Name: string;
    Email: string;
    StreetAddress: string;
    StreetAddress2: string;
    City: string;
    Contact: string;
    Category: string;
    Menu: MenuItemm[];
    OpeningHrs: OpenHrs;
    ImageName: String;
    isAvailable: Boolean;
    disabled: Boolean;
    password: string;
}

interface MenuItemm {
    MenuCategory: string;
    ItemName: string;
    ItemCost: string;
    ItemDescription: string;
    ImageName: string;
}

interface OpenHrs {
    Sunday: string;
    Monday: string;
    Tuesday: string;
    Wednesday: string;
    Thursday: string;
    Friday: string;
    Saturday: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 5% 0% 5%",
            // borderRadius: "22px"
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
        gridRoot: {
            padding: "0px",
            width: "95%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        main: {
            padding: 0,
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
        },
        addOrgBtn: {
            background: theme.palette.primary.light,
            color: "#FFF"
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.primary.contrastText,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: "50%",
            maxWidth: "400px",
            borderRadius: "20px",
            borderColor: theme.palette.primary.light,
            position: "relative"
        },
        cartIcon: {
            position: "absolute",
            top: 18,
            right: 10
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        },
        Button: {
            backgroundColor: "#FF5E14",
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "130px",
            borderRadius: 15,
        },
        Button2: {
            backgroundColor: theme.palette.primary.main,
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
            color: "#FFF"
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        alert: {
            marginBottom: "5%"
        }
    }),
);

export const AddOrg: React.FC = () => {
    const classes = useStyles();
    var { value }  = useAppData();
    var { signup2, restaurantSignUp } = value;
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [values, setValues] = React.useState<State>({
        Name: '',
        Email: '',
        StreetAddress: '',
        StreetAddress2: '',
        City: '',
        Contact: '',
        Category: 'Select Category',
        Menu: [],
        OpeningHrs: {
            Sunday: '',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: ''
        },
        ImageName: process.env.REACT_APP_DEFAULT_RESTAURANT_LOGO !== undefined ? process.env.REACT_APP_DEFAULT_RESTAURANT_LOGO : '',
        isAvailable: true,
        disabled: false,
        password: '12345678'
    });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    var [loading, setLoading] = useState(false);

    

    const [ohrs, setOhrs] = React.useState<OpenHrs>({
        Sunday: '',
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: ''
    });

    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        console.log("I am inside fuction");
        try{
            setSuccess('');
            setError('');
            setLoading(true);
            values.Name === ''?
                setError('Please enter your Restaurant Name')
            :values.Email === '' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.Email))?
                setError('Please enter a valid Email')
            :await signup2(values, value).then(async function(res1){
                if(res1 != null){
                    if(res1 !== "The email address is already in use by another account."){
                        await fetchUserDetailsSignUp(res1).then(function(res){
                            if(res){
                                ////console.log("About to navigate to dashboard.");
                                ////console.log(userRolef);
                                setSuccess('Restaurant Created Successfully');
                                setTimeout(() => {
                                    setSuccess('');
                                    //console.log("about to go to dashboard");
                                    setValues({
                                        Name: '',
                                        Email: '',
                                        StreetAddress: '',
                                        StreetAddress2: '',
                                        City: '',
                                        Contact: '',
                                        Category: 'Select Category',
                                        Menu: [],
                                        OpeningHrs: {
                                            Sunday: '',
                                            Monday: '',
                                            Tuesday: '',
                                            Wednesday: '',
                                            Thursday: '',
                                            Friday: '',
                                            Saturday: ''
                                        },
                                        ImageName: process.env.REACT_APP_DEFAULT_RESTAURANT_LOGO !== undefined ? process.env.REACT_APP_DEFAULT_RESTAURANT_LOGO : '',
                                        isAvailable: true,
                                        disabled: false,
                                        password: '12345678'
                                    });
                                    setOhrs({
                                        Sunday: '',
                                        Monday: '',
                                        Tuesday: '',
                                        Wednesday: '',
                                        Thursday: '',
                                        Friday: '',
                                        Saturday: ''
                                    });
                                    setOpen2(false);
                                }, 1500);
                            }else{
                                setError('Unable to Create Restaurant at this time'); 
                            } 
                        });
                        console.log(res1,"user account created");
                    }else{
                        setError('The email address is already in use by another account.')
                    }
                }else{
                    setError('Unable to Sign Up at this time.'); 
                }
            });
            
        }catch(error){
            console.log(error);
            setError('Failed to create restaurant');
        }
        setLoading(false);
    }

    var fetchUserDetailsSignUp = async function fetchUserDetailsSignUp(payload) {
        ////console.log("Is current user null");
        ////console.log(value);
        if(payload.currentUser !== null && payload.currentUser !== undefined){
            if(payload.currentUser.uid !== null && payload.currentUser.uid !== undefined){
                ////console.log("Fetching user info");
                ////console.log(state);
                restaurantSignUp(payload.currentUser.uid, payload, value , values);
                return true;
            }
        }
        return false;
    }

    const handleClose = () => {
        setOpen(false);
        setOpen2(true);
    };

    const handleClose2 = () => {
        // if(selectedMenuItem.ItemName !== ""){
        //     let newMenu = values.Menu;
        //     let finalMenuItem = {
        //         MenuCategory: selectedMenuItem.MenuCategory,
        //         ItemName: selectedMenuItem.ImageName,
        //         ItemCost: selectedMenuItem.ItemCost,
        //         ItemDescription: selectedMenuItem.ItemDescription,
        //         ImageName: selectedMenuItem.ImageName
        //     }
        //     newMenu.unshift(finalMenuItem);
        //     console.log(newMenu)
        //     setValues({ ...values, Menu: newMenu});
        //     setOpen(false);
        // }
    };

    const handleCloseX = () => {
        setOpen(false);
    };

    const handleCloseX2 = () => {
        setOpen2(false);
    };

    const handleChange4 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    const handleOpen = () => {
        try
        {
          setOpen(true);
        }catch(err){
  
        }
    };

    const handleChange5 = (prop: keyof OpenHrs) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setOhrs({ ...ohrs, [prop]: event.target.value });
    };

    

    return (
        <>
            <Button 
                onClick={handleOpen}
                className={classes.addOrgBtn}>
                Create Restaurant
            </Button>
            {/*Add Restaurant Details Modal */}
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
                    <div className={clsx(classes.paper, 'modalMobile')}>
                        <h3 id="transition-modal-title" style={{textAlign: "center", color: "#F7B614"}}>Restaurant Details</h3>
                        <Link to={referralPath} className={classes.cartIcon} onClick={handleCloseX}>
                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                        </Link>
                        <br />
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12}>
                                <Grid item xs={12} >
                                    <form autoComplete="off">
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                            <Grid item xs={12} >
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Restaurant Name"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.Name}
                                                    onChange={handleChange4('Name')}
                                                    variant="outlined"
                                                    placeholder="Enter Name"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Restaurant Email"
                                                        // multiline
                                                        // rows={4}
                                                        value={values.Email}
                                                        onChange={handleChange4('Email')}
                                                        variant="outlined"
                                                        placeholder="Enter Email"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="AddressLine1"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.StreetAddress}
                                                    onChange={handleChange4('StreetAddress')}
                                                    variant="outlined"
                                                    placeholder="Enter AddressLine1"
                                                    fullWidth
                                                />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="AddressLine2"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.StreetAddress2}
                                                    onChange={handleChange4('StreetAddress2')}
                                                    variant="outlined"
                                                    placeholder="Enter AddressLine2"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="City"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.City}
                                                    onChange={handleChange4('City')}
                                                    variant="outlined"
                                                    placeholder="Enter City"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Contact"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.Contact}
                                                    onChange={handleChange4('Contact')}
                                                    variant="outlined"
                                                    placeholder="Enter Contact"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Categories values={values} handleChange={handleChange} />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="contained" 
                                                    style={{backgroundColor: "#F7B614", fontFamily: "PT Sans"}} onClick={handleClose}
                                                    color="secondary" size="small" className={`${classes.Button} ${classes.btnfonts}`}
                                                    fullWidth>
                                                    Add Opening Hours <ArrowForwardRounded />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal>

            {/*Add Opening Hours Modal */}
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
                        <h3 id="transition-modal-title" style={{textAlign: "center", color: "#F7B614"}}>Opening Hours</h3>
                        <Link to={referralPath} className={classes.cartIcon} onClick={handleCloseX2}>
                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                        </Link>
                        <br />
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12}>
                                <Grid item xs={12} >
                                    <form autoComplete="off">
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                        <Grid item xs={12} sm={6} >
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Sunday"
                                                    // multiline
                                                    // rows={4}
                                                    value={ohrs.Sunday}
                                                    onChange={handleChange5('Sunday')}
                                                    variant="outlined"
                                                    placeholder="Eg. 8:00am - 11:00pm"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Monday"
                                                        // multiline
                                                        // rows={4}
                                                        value={ohrs.Monday}
                                                        onChange={handleChange5('Monday')}
                                                        variant="outlined"
                                                        placeholder="Eg. 8:00am - 11:00pm"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Tuesday"
                                                        // multiline
                                                        // rows={4}
                                                        value={ohrs.Tuesday}
                                                        onChange={handleChange5('Tuesday')}
                                                        variant="outlined"
                                                        placeholder="Eg. 8:00am - 11:00pm"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Wednesday"
                                                        // multiline
                                                        // rows={4}
                                                        value={ohrs.Wednesday}
                                                        onChange={handleChange5('Wednesday')}
                                                        variant="outlined"
                                                        placeholder="Eg. 8:00am - 11:00pm"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Thursday"
                                                        // multiline
                                                        // rows={4}
                                                        value={ohrs.Thursday}
                                                        onChange={handleChange5('Thursday')}
                                                        variant="outlined"
                                                        placeholder="Eg. 8:00am - 11:00pm"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Friday"
                                                        // multiline
                                                        // rows={4}
                                                        value={ohrs.Friday}
                                                        onChange={handleChange5('Friday')}
                                                        variant="outlined"
                                                        placeholder="Eg. 8:00am - 11:00pm"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Saturday"
                                                        // multiline
                                                        // rows={4}
                                                        value={ohrs.Saturday}
                                                        onChange={handleChange5('Saturday')}
                                                        variant="outlined"
                                                        placeholder="Eg. 8:00am - 11:00pm"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="contained" 
                                                    style={{backgroundColor: "#F7B614", fontFamily: "PT Sans"}}
                                                    color="secondary" size="small" 
                                                    className={`${classes.Button} ${classes.btnfonts}`}
                                                    onClick={handleSubmit}
                                                    type="button"
                                                    fullWidth>
                                                    Submit Details
                                                </Button>
                                            </Grid>
                                            <Grid item xs={12} >
                                                {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                                {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Fade>
            </Modal> 
        </>
    );
}
