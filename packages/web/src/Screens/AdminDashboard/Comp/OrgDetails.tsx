import { useAppData } from '../../../Context/AppDataContext';
import { AppBar ,Grid, makeStyles, createStyles, Typography, Theme, Card, CardHeader, Avatar, CardMedia, CardContent, TextField, FormControl, InputLabel, Select, MenuItem, Button, Box, Tabs, Tab } from '@material-ui/core';
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
    City: string;
    Contact: string;
    Category: string;
    Menu: object[];
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
            padding: "2% 5% 0% 5%",
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
        City: '',
        Contact: '',
        Category: '',
        Menu: []
    });
    const [tab, setTab] = React.useState(0);
    var { value }  = useAppData();
    var { fetchRestaurants, selectedRestaurant, restaurants, viewMenuItems } = value;
    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');

    //Define table attributes
    const rows = [] as Object[];
    const options = {
        filterType: 'dropdown',
        search: true,
        selectableRows: false,
        download: false,
        print: false
    };

    useEffect(() => {
        //console.log("inside use effect");
        //console.log(restaurants);
        try{
            if(restaurants.length > 0 && selectedRestaurant !== undefined && values.Menu.length !== 0){
                let restaurant = restaurants[selectedRestaurant];
                setValues({
                    Name: restaurant.FirstName,
                    Email: restaurant.Email,
                    StreetAddress: restaurant.AddressLine1,
                    City: restaurant.City,
                    Contact: restaurant.ContactNumber,
                    Category: restaurant.category.Name,
                    Menu: restaurant.MenuItems
                })
            }
        }catch(err) {
            console.log(err)
        }
        
    }, [restaurants, selectedRestaurant])

    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
    var history = useHistory();

    const handleSubmit = async () => {
        try{
            setError('');
            setSuccess('');
            
        }catch(e: any) { 
            ////console.log(e.message)
            let path = e.message
            let result = path.split("Path")
            setError(result[1]);
        }
    }

    var handleSelectedRestaurant = async function(index){
        if(index !== undefined || index !== null){
            //console.log("Index is");
            //console.log(index);
            var payload = value;
            payload.selectedRestaurant = index;
            await viewMenuItems(payload).then(() => {
                history.push("/Menu")
            })
        } 
    }
    const handleChange3 = (event: React.ChangeEvent<{}>, newValue: number) => {
        setTab(newValue);
      };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleChange = (event) => {
        setValues({...values,[event.target.name]:event.target.value});
    };

    if (restaurants.length !== 0 && restaurants[selectedRestaurant].MenuItems.length !== 0){
        restaurants[selectedRestaurant].MenuItems.map((item, index) => {
            let row = {
              MenuCategory: item.MenuCategory,
              ItemName: item.ItemName, 
              ItemCost: item.ItemCost,
              ItemDescription: item.ItemDescription,
              Actions: <><a href="javascript()" title="edit" onClick={(e) => {e.preventDefault(); history.push('/DeliveryOrdersDetails', { from: index});}}><EditRounded color="primary" /></a></>
            };
      
            rows.push(row)
            return true;
          })  
        return (
            <>
                <Typography variant="h5" 
                style={{paddingTop: "3%", paddingBottom: "3%",
                 fontWeight: "bold", textAlign: "center", color: "#FF5E14"}}>
                    Edit restaurant details below.
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
                                        </Grid>
                                    </Grid>  
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
