import { useAppData } from '../../../Context/AppDataContext';
import { AppBar ,Grid, makeStyles, createStyles, Typography, Theme, Card, CardHeader, Avatar, CardMedia, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, Tabs, Tab, Modal, Backdrop, Fade } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import MUIDataTable from "mui-datatables";
//import clsx from 'clsx';
//Import Components
//import { ItemRating } from '../../../Components/ItemRating';
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import { Alert } from '@material-ui/lab';
import { EditRounded } from '@material-ui/icons';
import clsx from 'clsx';



// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

// Phone Number to test
//const phoneNumber = " (876)-888-8888"
interface State {
    Name: string;
    Email: string;
    StreetAddress: string;
    StreetAddress2: string;
    City: string;
    Contact: string;
    Category: string;
    Menu: MenuItem[];
    OpeningHrs: OpenHrs
}

interface MenuItem {
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
        root2: {
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
        root3: {
            padding: "0",
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
            height: "185px"
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
            width: "33px",
            height: "33px",
            backgroundColor: "#FFFFFF",
            margin: "20% 0% 0% -40%"
          },
        kfcImage: {
            width: "33px",
            height: "33px",
            margin: "0% 0% 14% 8%",
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
        menuImages: {
            borderRadius: "10px"
        },
        link: {
            textDecoration: "none"
        },
        statusDot: {
                height: "10px",
                width: "10px",
                backgroundColor: "#22F810" /*Active*/ ,
                /*backgroundColor: "#F86363", In-Active*/
                borderRadius: "50%",
                display: "inline-block"
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        },
        alert: {
            marginBottom: "5%"
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
            minWidth: "34%",
            maxWidth: "400px",
            borderRadius: "20px",
            borderColor: theme.palette.primary.light,
            position: "relative"
        },
        cartIcon: {
            position: "absolute",
            top: 18,
            right: 10
        }
    }),
);

const columns = [
    { 
      name: 'MenuCategory', 
      label: 'Category', 
      options: {
        filter: true,
        sort: true,
       }
    },{
      name: 'ItemName',
      label: 'Name',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'ItemCost',
      label: 'Price',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'ItemDescription',
      label: 'Description',
      options: {
        filter: true,
        sort: true,
       }
    },
    {
      name: 'Actions',
      label: 'Action',
      options: {
        filter: true,
        sort: true,
       }
    },
  ];

export const OrgDetails: React.FC = function OrgDetails() {
    const classes = useStyles();
    
    const [values, setValues] = React.useState<State>({
        Name: '',
        Email: '',
        StreetAddress: '',
        StreetAddress2: '',
        City: '',
        Contact: '',
        Category: '',
        Menu: [],
        OpeningHrs: {
            Sunday: '',
            Monday: '',
            Tuesday: '',
            Wednesday: '',
            Thursday: '',
            Friday: '',
            Saturday: ''
        }
    });
    const [ohrs, setOhrs] = React.useState<OpenHrs>({
        Sunday: '',
        Monday: '',
        Tuesday: '',
        Wednesday: '',
        Thursday: '',
        Friday: '',
        Saturday: ''
    });
    const [tab, setTab] = React.useState(0);
    var { value }  = useAppData();
    var { selectedRestaurant, restaurants, viewMenuItems, UpdateRestaurantBy_ID } = value;
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [open2, setOpen2] = React.useState(false);
    const [selectedMenuItemIndex, setSelectedMenuItemIndex] = React.useState(0);
    const [selectedMenuItem, setSelectedMenuItem] = React.useState<MenuItem>({
        MenuCategory: '',
        ItemName: '',
        ItemCost: '',
        ItemDescription: '',
        ImageName: ''
    });
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    //Define table attributes
    const rows = [] as Object[];
    const options = {
        filterType: 'dropdown',
        search: true,
        selectableRows: false,
        download: false,
        print: false,
        count: 5
    };

    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        try{
            if(restaurants.length > 0 && selectedRestaurant !== undefined && values.Menu.length === 0){
                let restaurant = restaurants[selectedRestaurant];
                console.log("about to set form values")
                setValues({
                    Name: restaurant.FirstName,
                    Email: restaurant.Email,
                    StreetAddress: restaurant.AddressLine1,
                    StreetAddress2: restaurant.AddressLine2,
                    City: restaurant.City,
                    Contact: restaurant.ContactNumber,
                    Category: restaurant.category.Name,
                    Menu: restaurant.MenuItems,
                    OpeningHrs: restaurant.OpeningHrs
                });

                setOhrs(restaurant.OpeningHrs);
            }
        }catch(err) {
            console.log(err)
        }
        
    }, [restaurants, selectedRestaurant])
    
    var history = useHistory();

    const handleSubmit = async () => {
        try{
            setError('');
            setSuccess('');
            let final_restaurant = restaurants[selectedRestaurant];
            final_restaurant.FirstName = values.Name;
            final_restaurant.Email = values.Email;
            final_restaurant.AddressLine1 = values.StreetAddress;
            final_restaurant.AddressLine2 = values.StreetAddress2;
            final_restaurant.City = values.City;
            final_restaurant.ContactNumber = values.Contact;
            //final_restaurant.category = values.Category;
            final_restaurant.MenuItems = values.Menu;
            final_restaurant.OpeningHrs = ohrs;

            UpdateRestaurantBy_ID(value, final_restaurant).then(() => {
                setSuccess('Restaurant Updated Seccessfully');
                setTimeout(() => {
                    setSuccess('');
                }, 3000)
            })
            
        }catch(e: any) { 
            ////console.log(e.message)
            let path = e.message
            let result = path.split("Path")
            setError(result[1]);
        }
    }

    const handleChange5 = (prop: keyof OpenHrs) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setOhrs({ ...ohrs, [prop]: event.target.value });
    };

    const handleChange4 = (prop: keyof MenuItem) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedMenuItem({ ...selectedMenuItem, [prop]: event.target.value });
    };

    const handleChange3 = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
      };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    const handleClose2 = () => {
        let newMenu = values.Menu;
        newMenu[selectedMenuItemIndex] = selectedMenuItem;
        console.log(newMenu[selectedMenuItemIndex])
        setValues({ ...values, Menu: newMenu});
        setOpen2(false);
    };
  
    const handleOpen2 = (index: React.SetStateAction<number>) => {
      try
      {
        setSelectedMenuItemIndex(index);
        setSelectedMenuItem(restaurants[selectedRestaurant].MenuItems[parseInt(index.toString())]);
        setOpen2(true);
      }catch(err){

      }
      
    };

    if (restaurants.length !== 0 && values.Menu.length !== 0){
        values.Menu.map((item, index) => {
            let row = {
              MenuCategory: item.MenuCategory,
              ItemName: item.ItemName, 
              ItemCost: `$ ${ parseFloat(item.ItemCost).toFixed(2)}`,
              ItemDescription: item.ItemDescription,
              Actions: <><a href="javascript()" title="edit" onClick={(e) => {e.preventDefault(); handleOpen2(index);}}><EditRounded color="primary" /></a></>
            };
      
            rows.push(row)
            return true;
          })  
        return (
            <>
                <Typography variant="h5" 
                style={{paddingTop: "3%", paddingBottom: "0%",
                 fontWeight: "bold", textAlign: "center", color: "#FF5E14"}}>
                    Edit Restaurant Details Below
                </Typography>
                <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                    <Grid item xs={12} >
                        <Card>
                            <CardContent>
                                <AppBar position="static" color="default">
                                    <Tabs
                                    value={tab}
                                    onChange={handleChange3}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                    aria-label="scrollable auto tabs example"
                                    >
                                    <Tab label="Gernal Details" {...a11yProps(0)} />
                                    <Tab label="Menu Details" {...a11yProps(1)} />
                                    <Tab label="Openning Hours" {...a11yProps(2)} />
                                    
                                    </Tabs>
                                </AppBar>
                                <TabPanel value={tab} index={0}>
                                    <form>
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                            <Grid item xs={12} sm={6} >
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Restaurant Name"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.Name}
                                                    onChange={handleChange2('Name')}
                                                    variant="outlined"
                                                    placeholder="Enter Restaurant Name"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} >
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                    <TextField
                                                        id="outlined-multiline-static"
                                                        label="Email"
                                                        // multiline
                                                        // rows={4}
                                                        value={values.Email}
                                                        onChange={handleChange2('Email')}
                                                        variant="outlined"
                                                        placeholder="Enter Email Address"
                                                        fullWidth
                                                    />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="City"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.City}
                                                    onChange={handleChange2('City')}
                                                    variant="outlined"
                                                    placeholder="Enter City"
                                                    fullWidth
                                                />
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Contact"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.Contact}
                                                    onChange={handleChange2('Contact')}
                                                    variant="outlined"
                                                    placeholder="Enter Contact"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Category"
                                                    multiline
                                                    rows={2}
                                                    value={values.Category}
                                                    onChange={handleChange2('Category')}
                                                    variant="outlined"
                                                    placeholder="Enter Category"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Street Address"
                                                    multiline
                                                    rows={2}
                                                    value={values.StreetAddress}
                                                    onChange={handleChange2('StreetAddress')}
                                                    variant="outlined"
                                                    placeholder="Enter Street Address"
                                                    fullWidth
                                                />
                                                </FormControl>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </TabPanel>
                                <TabPanel value={tab} index={1}>
                                    <Grid container direction="row" spacing={1} className={classes.root3} alignItems="center">
                                        <Grid item xs={12} sm={12} >
                                            <MUIDataTable
                                                title={"Items"}
                                                data={rows}
                                                columns={columns}
                                                options={options}
                                            />

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
                                                        <h3 id="transition-modal-title" style={{textAlign: "center", color: "#F7B614"}}>Edit Item</h3>
                                                        <Link to={referralPath} className={classes.cartIcon} onClick={handleClose2}>
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
                                                                                    label="Item Name"
                                                                                    // multiline
                                                                                    // rows={4}
                                                                                    value={selectedMenuItem.ItemName}
                                                                                    onChange={handleChange4('ItemName')}
                                                                                    variant="outlined"
                                                                                    placeholder="Enter Item Name"
                                                                                    fullWidth
                                                                                />
                                                                            </Grid>
                                                                            <Grid item xs={12} >
                                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                                    <TextField
                                                                                        id="outlined-multiline-static"
                                                                                        label="Item Description"
                                                                                        // multiline
                                                                                        // rows={4}
                                                                                        value={selectedMenuItem.ItemDescription}
                                                                                        onChange={handleChange4('ItemDescription')}
                                                                                        variant="outlined"
                                                                                        placeholder="Enter Item Description"
                                                                                        fullWidth
                                                                                    />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                                <TextField
                                                                                    id="outlined-multiline-static1"
                                                                                    label="Category"
                                                                                    // multiline
                                                                                    // rows={4}
                                                                                    value={selectedMenuItem.MenuCategory}
                                                                                    onChange={handleChange4('MenuCategory')}
                                                                                    variant="outlined"
                                                                                    placeholder="Enter Category"
                                                                                    fullWidth
                                                                                />
                                                                                </FormControl>
                                                                            </Grid>
                                                                            <Grid item xs={12} sm={6}>
                                                                                <TextField
                                                                                    id="outlined-multiline-static1"
                                                                                    label="Item Cost"
                                                                                    // multiline
                                                                                    // rows={4}
                                                                                    value={selectedMenuItem.ItemCost}
                                                                                    onChange={handleChange4('ItemCost')}
                                                                                    variant="outlined"
                                                                                    placeholder="Enter Item Cost"
                                                                                    fullWidth
                                                                                />
                                                                            </Grid>
                                                                            <Grid item xs={6}>
                                                                                <Button variant="contained" 
                                                                                    style={{backgroundColor: "#F7B614", fontFamily: "PT Sans"}} onClick={handleClose2}
                                                                                    color="secondary" size="small" className={`${classes.Button} ${classes.btnfonts}`}
                                                                                    fullWidth>
                                                                                    Continue
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
                                        </Grid>
                                    </Grid>  
                                </TabPanel>
                                <TabPanel value={tab} index={2}>
                                    <form>
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
                                        </Grid>
                                    </form>
                                </TabPanel>
                                <Grid container direction="row" spacing={1} className={classes.root2} alignItems="center">
                                    <Grid item xs={12} sm={12} >
                                        {error && <Alert variant="filled" severity="error" className={classes.alert}>{error}</Alert>}
                                        {success && <Alert variant="filled" severity="success" className={classes.alert}>{success}</Alert>}
                                        <Button size="small"  fullWidth={true} className={`${classes.Button} ${classes.btnfonts}`} type="button" onClick={handleSubmit}>
                                            Update Details
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                <style>
                {`
                    th{
                    background-color: #F7B614 !important;
                    }

                    th > span > button > span div > div{
                    color: #FFF !important;
                    }
                `}
                </style>
            </>
        )
    }else {
        return (
            <>
                <Typography variant="body1" style={{paddingTop: "3%", paddingBottom: "3%"}}>
                            Loading...
                </Typography>
            </>
        )
    }
}
