import { Container, Grid, makeStyles, createStyles, Theme, Typography, CardContent, Card, Button, Modal, Fade, Backdrop, CardMedia, TextField, FormControl, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
//Import Components
import { HeaderRight } from './Comp/HeaderRight';
import { useAppData } from '../../Context/AppDataContext';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import { Field } from './Comp/Field';
import DescriptionIcon from '@material-ui/icons/Description';
import Alert from '@material-ui/lab/Alert';
import { ShippingAddress } from './Comp/ShippingAddress';
import { LiveChatWidget } from '@livechat/widget-react';
const MailBoxNumber = React.lazy(() => import('./Comp/MailBoxNumber'));
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));
const DashboardFooter = React.lazy(() => import('./Comp/DashboardFooter'));


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            "& .MuiFormLabel-root": {
              color: "#eee"
            },
            color: "#eee",
            "& .MuiIconButton-root": {
                fontFamily: "PT Sans"
            },
            "& .MuiButtonBase-root": {
                fontFamily: "PT Sans"
            },
        },
        root2: {
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
            backgroundImage: "url(Images/FoodPortalBackground.png)",
            height: "100vh"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
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
        card2: {
          background: "#FFFFFF",
          border: "1.14582px solid #F3F3F3",
          boxSizing: "border-box",
          boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
          borderRadius: "34.3745px",
          paddingLeft: 0,
          paddingTop: "10px"
        },
        card3: {
            background: "#FFFFFF",
            border: "1.14582px solid #F3F3F3",
            boxSizing: "border-box",
            boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
            paddingLeft: 16,
            paddingRight: 16,
            paddingTop: "10px"
        },
        cardContent: {
            flexGrow: 1,
            padding: 0,
            paddingTop: "30px"
        },
        cardTitle2: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#000",
            width: "100%",
            textAlign: "center"
        },
        cardTitle3: {
            fontSize: "20px",
            fontWeight: 700,
            fontFamily: "PT Sans",
            color: "#000",
            width: "100%",
            textAlign: "left"
        },
        paragraph: {
            width: "70%",
            fontWeight: "normal",
            fontSize: "16px",
            color: "#000"
        },
        paragraphHeadings: {
            fontWeight: "bold"
        },
        trackBtn: {
            backgroundColor: "#FF5E14",
            color: "#FFF",
            borderRadius: "50px",
            textTransform: "none",
            width: "150px",
            
        },
        form: {
            textAlign: "center"
        },
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: "90vh"
        },
        paper: {
            backgroundColor: theme.palette.primary.contrastText,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
            minWidth: "34%",
            maxWidth: "400px",
            borderRadius: "20px",
            borderColor: theme.palette.primary.contrastText,
            position: "relative"
         },
         paper2: {
            backgroundColor: theme.palette.primary.contrastText,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 2, 3),
            minWidth: "34%",
            maxWidth: "400px",
            borderRadius: "20px",
            borderColor: theme.palette.primary.contrastText,
            position: "relative"
         },
         cartIcon: {
            position: "absolute",
            top: 18,
            right: 10
        },
        cardImage: {
            textAlign: "center",
            paddingTop: "3%"
        },
        icon: {
            color: theme.palette.primary.main,
            fontSize: "50px"
        },
        links: {
            textDecoration: "none"
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        },
        alert: {
            marginBottom: "5%"
        },
    }),
);

interface content {
    lastModified: number;
    name: string;
    size: number;
    type: string;
    webkitRelativePath: string;
    lastModifiedDate: Date;
}

interface State {
    trackingNum: string;
    trackingNum2: string;
    contact: string;
    deliver: boolean;
    pickup: boolean;
    file: string;
    content: content;
    aLine1: string;
    aLine2: string;
    city: string;
}

export const CargoAndFreight: React.FC = function CargoAndFreight() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { currentUser, userInfo, createPreAlert, mailbox_Num } = value;

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);

    let initContent = {
        lastModified: 0,
        name: '',
        size: 0,
        type: '',
        webkitRelativePath: '',
        lastModifiedDate: new Date(),
    }

    const [state, setState] = React.useState<State>({
        trackingNum: '',
        trackingNum2: '',
        contact: '',
        deliver: false,
        pickup: false,
        file: '',
        content: initContent,
        aLine1: userInfo.addressLine1,
        aLine2: userInfo.addressLine2,
        city: userInfo.city,
    });
    var [file_display, setFile_Display] = useState('');
      
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    if(currentUser === undefined){
        history.push("/Login", { from: "/Uship" })
    }

    const handleClose4 = () => {
        setOpen4(false);
      };
  
    const handleOpen4 = () => {
        try
        {
          setOpen4(true);
        }catch(err){
  
        }
        
    };

    const handleClose3 = () => {
        setOpen3(false);
    };
  
    const handleOpen3 = () => {
        try
        {
          setOpen3(true);
        }catch(err){
  
        }
        
    };

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

      const handleClose1 = () => {
        setOpen1(false);
      };
  
      const handleOpen1 = () => {
        try
        {
          setOpen1(true);
        }catch(err){
  
        }
        
      };

    const handleChange2 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [prop]: event.target.value });
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.name === 'deliver' && event.target.checked === true){
            setState({ ...state, [event.target.name]: event.target.checked, pickup: false });
        }else if(event.target.name === 'pickup' && event.target.checked === true){
            setState({ ...state, [event.target.name]: event.target.checked, deliver: false });
        }else{
            setState({ ...state, [event.target.name]: event.target.checked });
        }
        
      };

    var onInputChange2 = function onInputChange2(event){
        //console.log(event.target.value);
        let {value, name } = event.target;

        if(name === "file"){
            //console.log(event.target.files[0])
            setState({...state,[name.toLowerCase()]: value, content: event.target.files[0]});
        }else{
            setState({...state,[name.toLowerCase()]: value})
        }
    };

    useEffect(() => {
        if(state.content !== undefined && state.content.name !== file_display){
            setFile_Display(state.content.name);
        }
    }, [state.content, file_display])
    
    var getBase64 = async function getBase64(file, cb){
        try{
            if(file !== ""){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function () {
                    cb(reader.result)
                };
                reader.onerror = function (error) {
                    //console.log('Error: ', error);
                };
            }else{
                return "";
            }
            
        }catch(err){
            //console.log(err);
            setError('Unable to create Pre Alert at this time.');
        }
        
    }

    var handleSubmit = async function handleSubmit(event){
        event.preventDefault();
        let data = '';
        
        
        if(state.trackingNum2.length < 5){
            setError("Please enter a valid tracking number.");
        }else if(state.contact.length < 7){
            setError("Please enter a valid contact number.");
        }else if(state.deliver && state.aLine1.length < 5){
            setError("Please enter a address line 1.");
        }else if(state.deliver && state.city.length < 2){
            setError("Please a Parish.");
        
        }else{
            if(state.content !== null && state.content !== undefined ){
                if(state.content.type !== null || state.content.type !== undefined){
                    if(state.content.type === "application/pdf" || 
                        state.content.type === "image/png" ||
                        state.content.type === "image/svg+xml" ||
                        state.content.type === "image/jpeg"){
                            await getBase64(state.content, async function(result){
                                data = result;
                                console.log("data is: ");
                                console.log(data);
                                //prevents default form refresh
                                //console.log("I am inside fuction");
                                // if(state.password !== state.passwordconf){
                                //     return setError('Passwords do not match');
                                // }
                                try{
                                    setError('');
                                    setSuccess('');
                                    // var createPreAlertBtn = document.getElementById("create_prealert_btn") as HTMLButtonElement;
                                    // var dateFeildDesktop = document.getElementById("your_unique_id_desk");
                                    // var dateFeildMobile = document.getElementById("your_unique_id_mobile");
                                    await createPreAlert(state, data, currentUser.uid, userInfo, mailbox_Num).then(function(res){
                                        if(res === true){
                                            setSuccess('Pre alert created successfully.');
                                            // if(createPreAlertBtn !== null){
                                            //     if(createPreAlertBtn.disabled === true){
                                            //         //console.log("Enabling button");
                                            //         createPreAlertBtn.disabled = false;
                                            //     }
                                            // }

                                            setState({
                                                trackingNum: '',
                                                trackingNum2: '',
                                                contact: '',
                                                deliver: false,
                                                pickup: false,
                                                file: '',
                                                content: initContent,
                                                aLine1: userInfo.addressLine1,
                                                aLine2: userInfo.addressLine2,
                                                city: userInfo.city
                                            });
                                            //console.log(dateFeildDesktop.value);
                                            
                                        }else if(res === false){
                                            setError('Unable to create Pre Alert at this time');
                                            // if(createPreAlertBtn !== null){
                                            //     if(createPreAlertBtn.disabled === true){
                                            //         //console.log("Enabling button");
                                            //         createPreAlertBtn.disabled = false;
                                            //     }
                                            // }
                                        }else if(res === "Tracking number exist"){
                                            setError("A package was already added with tracking number " + state.trackingNum2);
                                            // if(createPreAlertBtn !== null){
                                            //     if(createPreAlertBtn.disabled === true){
                                            //         //console.log("Enabling button");
                                            //         createPreAlertBtn.disabled = false;
                                            //     }
                                            // }
                                        }
                                    }).catch(function(err){
                                        //console.log(err);
                                    });
                
                                }catch{
                                    setError('Unable to create Pre Alert at this time.');
                                    // var createPreAlertBtn = document.getElementById("create_prealert_btn") as HTMLButtonElement;
                                    // if(createPreAlertBtn !== null){
                                    //     if(createPreAlertBtn.disabled === true){
                                    //         //console.log("Enabling button");
                                    //         createPreAlertBtn.disabled = false;
                                    //     }
                                    // }
                                }
                            });
                        }else{
                            setError("Please upload a valid invoice. Only Pdf, Png, Jpg/Jpeg and Svg files are allowed.")
                        }
                    }else{
                        setError("Please upload a valid invoice. Only Pdf, Png, Jpg/Jpeg and Svg files are allowed.")
                    }
                }else{
                    setError("Please upload a valid invoice. Only Pdf, Png, Jpg/Jpeg and Svg files are allowed.")
                } 
            
            }
    }

    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12} style={{textAlign: "center"}}>
                                <img src="Images/uship logo.PNG" style={{width: "200px"}} alt="uship" />
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={12}  sm={6}>
                                        <Link to={`${referralPath}`} onClick={handleOpen1} className={classes.links}>
                                            <Card className={classes.card2}>
                                                <CardMedia className={classes.cardImage}>
                                                    <NotificationsIcon className={classes.icon} />
                                                </CardMedia>
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle2}>
                                                        Create PreAlert
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}  sm={6}>
                                        <Link to={`${referralPath}`} onClick={handleOpen2} className={classes.links}>
                                            <Card className={classes.card2}>
                                                <CardMedia className={classes.cardImage}>
                                                    <HelpIcon className={classes.icon} />
                                                </CardMedia>
                                                <CardContent className={classes.cardContent}>
                                                <Typography gutterBottom className={classes.cardTitle2}>
                                                        How It Works?
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}  sm={6}>
                                        <Link to={"/Rates"} className={classes.links}>
                                            <Card className={classes.card2}>
                                                <CardMedia className={classes.cardImage}>
                                                    <AttachMoneyIcon className={classes.icon} />
                                                </CardMedia>
                                                <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle2}>
                                                        Our Rates
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                    <Grid item xs={12}  sm={6}>
                                        <Link to={`${referralPath}`} onClick={handleOpen3} className={classes.links}>
                                            <Card className={classes.card2}>
                                            <CardMedia className={classes.cardImage}>
                                                <GpsFixedIcon className={classes.icon} />
                                            </CardMedia>
                                            <CardContent className={classes.cardContent}>
                                                    <Typography gutterBottom className={classes.cardTitle2}>
                                                        Track Package
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Grid container direction="row" spacing={1}>
                                    <Grid item xs={12}>
                                        <Card className={classes.card}>
                                            <CardContent className={classes.cardContent}>
                                            <Grid container direction="row" spacing={1}>
                                                    <Grid item xs={12} sm={10}>
                                                        <ShippingAddress />
                                                        <br />
                                                        <Typography style={{fontWeight: "bold"}}>
                                                            Mailbox Number
                                                        </Typography>
                                                        <Typography>
                                                            <span style={{color: "#FF5E14"}}>
                                                                <MailBoxNumber />
                                                            </span>
                                                        </Typography>
                                                    </Grid>
                                                    <hr />
                                                    <br />
                                                    <Grid item xs={12} sm={10}>
                                                        <Typography style={{fontWeight: "bold"}}>
                                                            {/* &nbsp;UShip Sea Shipping Address */}
                                                        </Typography>
                                                        <Typography >
                                                        {/* &nbsp;Name: 
                                                            <span style={{color: "#FF5E14"}}>{userInfo.fullName}</span> */}
                                                        </Typography>
                                                        <Typography>
                                                        &nbsp;{/* Address 1&nbsp;
                                                            <span>3489 N.W 19th street</span>  */}
                                                        </Typography>
                                                        <Typography>
                                                        &nbsp;{/* Address 2:&nbsp;
                                                            <span>Urged</span> */}
                                                        </Typography>
                                                        <Typography>
                                                        &nbsp;{/* City:&nbsp;
                                                            <span>Lauderdale Lakes</span>  */}
                                                        </Typography>
                                                        <Typography>
                                                            {/* State:&nbsp;
                                                            <span>Florida</span>&nbsp;ZipCode:&nbsp;
                                                            <span>33311</span> */}
                                                        </Typography>
                                                    </Grid>
                                            </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                    <DashboardFooter />
                            </Grid>
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
                                    <div className={clsx(classes.paper2, 'modalMobile')} style={{maxHeight: "90vh"}}>
                                        <h2 id="transition-modal-title" style={{textAlign: "center", color: "#FF5E14"}}>How It Works?</h2>
                                        <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose2}>
                                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                                        </Link>
                                        <br />
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center" >
                                            <Grid item xs={12}>
                                                <Grid item xs={12} style={{overflowY: "auto", maxHeight: "60vh"}}>
                                                <Card className={classes.card} >
                                                    <CardContent className={classes.cardContent} >
                                                        <Typography gutterBottom className={classes.cardTitle3}>
                                                            Shop online then experience safe, convenient &amp; reliable shipping from USA to Jamaica for both personal &amp; commercial purpose. 
                                                            <br /><br />We convey by Air and Sea.
                                                        </Typography>
                                                        
                                                        <hr />
                                                        <br />
                                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                                            How it Works :
                                                        </Typography>
                                                        <br />
                                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                                            1. <span className={classes.paragraph}>
                                                                Shop at your favorite stores online and send the order to your new US shipping address. Also have friends, business partners or family send packages to your US shipping address.
                                                            </span>
                                                        </Typography>
                                                        <br />
                                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                                            2. <span className={classes.paragraph}>
                                                                We receive your order at our US warehouse and notify you.
                                                            </span>
                                                        </Typography>
                                                        <br />
                                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                                            3. <span className={classes.paragraph}>
                                                                We will send a notification when your package is in Jamaica and ready for delivery.
                                                            </span>
                                                        </Typography>
                                                        <br />
                                                        <hr />
                                                        <Typography variant="h6" className={classes.paragraphHeadings}>
                                                            ISLAND WIDE DELIVERY:
                                                        </Typography>
                                                        <Typography>
                                                            When your package arrives, we provide free delivery to your home or office in May Pen and island wide delivery for an affordable fee.
                                                        </Typography>
                                                        <hr />
                                                    </CardContent>
                                                </Card>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Fade>
                            </Modal>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open1}
                                onClose={handleClose1}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open1}>
                                    <div className={clsx(classes.paper2, 'modalMobile')} style={{maxHeight: "90vh"}}>
                                        <h2 id="transition-modal-title" style={{textAlign: "center", color: "#FF5E14"}}>Create PreAlert</h2>
                                        <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose1}>
                                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                                        </Link>
                                        <br />
                                        <Grid container direction="row" spacing={1} className={classes.root2} alignItems="center" >
                                            <Grid item xs={12}>
                                                <Grid item xs={12} style={{overflowY: "auto", maxHeight: "60vh"}}>
                                                <Card className={classes.card3} >
                                                    <CardContent className={classes.cardContent} >
                                                        <form onSubmit={handleSubmit} className={classes.form}>
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Enter Tracking Number"
                                                                    value={state.trackingNum2}
                                                                    variant="outlined"
                                                                    onChange={handleChange2('trackingNum2')}
                                                                />
                                                            </FormControl>
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Enter Contact Number"
                                                                    value={state.contact}
                                                                    variant="outlined"
                                                                    onChange={handleChange2('contact')}
                                                                />
                                                            </FormControl>
                                                            <FormGroup row>
                                                                <FormControlLabel
                                                                    control={
                                                                        <Checkbox 
                                                                            checked={state.pickup} 
                                                                            onChange={handleChange} 
                                                                            name="pickup"
                                                                            color="primary" 
                                                                        />
                                                                    }
                                                                    label="Store Pick Up"
                                                                />
                                                                <FormControlLabel
                                                                    control={
                                                                    <Checkbox
                                                                        checked={state.deliver}
                                                                        onChange={handleChange}
                                                                        name="deliver"
                                                                        color="primary"
                                                                    />
                                                                    }
                                                                    label="Deliver To My Address"
                                                                />
                                                            </FormGroup>
                                                            {state.deliver &&<>
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Enter Address Line1"
                                                                    value={state.aLine1}
                                                                    variant="outlined"
                                                                    onChange={handleChange2('aLine1')}
                                                                />
                                                            </FormControl>
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Enter Address Line2"
                                                                    value={state.aLine2}
                                                                    variant="outlined"
                                                                    onChange={handleChange2('aLine2')}
                                                                />
                                                            </FormControl>
                                                            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                                <TextField
                                                                    id="outlined-helperText"
                                                                    label="Enter Parish"
                                                                    value={state.city}
                                                                    variant="outlined"
                                                                    onChange={handleChange2('city')}
                                                                />
                                                            </FormControl>
                                                            </>}
                                                            <Field 
                                                                name="file" 
                                                                placeholder='Upload invoice'
                                                                value={state.file}
                                                                type="file"
                                                                onChange={onInputChange2}
                                                                required='' 
                                                            />
                                                            {file_display && <div style={{paddingBottom: "1%"}}><DescriptionIcon style={{color: "#F7B614", fontSize: "30px"}} /> {file_display}</div> }
                                                            {error && <Alert severity="error" className={classes.alert}>{error}</Alert>}
                                                            {success && <Alert severity="success" className={classes.alert}>{success}</Alert>}
                                                            <Button 
                                                                className={classes.trackBtn} 
                                                                id="create_prealert_btn"
                                                                type="submit"
                                                            >
                                                                Create
                                                            </Button>
                                                        </form>
                                                    </CardContent>
                                                </Card>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Fade>
                            </Modal>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open3}
                                onClose={handleClose3}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open3}>
                                    <div className={clsx(classes.paper2, 'modalMobile')} style={{maxHeight: "90vh"}}>
                                        <h2 id="transition-modal-title" style={{textAlign: "center", color: "#FF5E14"}}>Track Package</h2>
                                        <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose3}>
                                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                                        </Link>
                                        <br />
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center" >
                                            <Grid item xs={12}>
                                                <Grid item xs={12} style={{maxHeight: "60vh"}} className={classes.root2}>
                                                    <form className={classes.form}>
                                                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                                                            <TextField
                                                                id="outlined-helperText"
                                                                label="Enter Tracking Number"
                                                                value={state.trackingNum}
                                                                variant="outlined"
                                                                onChange={handleChange2('trackingNum')}
                                                            />
                                                        </FormControl>
                                                        <a href={`${'https://www.aftership.com/track/'}${state.trackingNum}`} 
                                                            target={'_blank'} 
                                                            rel={'no-refer'}
                                                            className={classes.links}
                                                        >
                                                            <Button className={classes.trackBtn}>
                                                                Track
                                                            </Button>
                                                        </a>
                                                    </form>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Fade>
                            </Modal>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open4}
                                onClose={handleClose4}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                timeout: 500,
                                }}
                            >
                                <Fade in={open4}>
                                    <div className={clsx(classes.paper2, 'modalMobile')} style={{maxHeight: "90vh"}}>
                                        <h2 id="transition-modal-title" style={{textAlign: "center", color: "#FF5E14"}}>Rates</h2>
                                        <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose4}>
                                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                                        </Link>
                                        <br />
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center" >
                                            <Grid item xs={12}>
                                                <Grid item xs={12} style={{overflowY: "auto", maxHeight: "60vh"}} className={classes.root2}>
                                                    <Typography gutterBottom className={classes.cardTitle3}>
                                                        Air Freight Shipping Rates:
                                                    </Typography>
                                                    <Typography className={classes.paragraph}>
                                                        1LB $650
                                                    </Typography> 
                                                    <Typography className={classes.paragraph}>
                                                        2lb $650
                                                    </Typography>
                                                    <Typography className={classes.paragraph}>
                                                        3lb $1200
                                                    </Typography>
                                                    <Typography className={classes.paragraph}>
                                                        4lb $1550
                                                    </Typography>  
                                                    <Typography className={classes.paragraph}>
                                                        5lb $1900
                                                    </Typography>
                                                    <Typography className={classes.paragraph}>
                                                        6lb $2200
                                                    </Typography>
                                                    <Typography className={classes.paragraph}>
                                                        7lb $2500
                                                    </Typography>
                                                    <Typography className={classes.paragraph}>
                                                        8lb $2850
                                                    </Typography>     
                                                    <Typography className={classes.paragraph}>
                                                        9lb $3100
                                                    </Typography>    
                                                    <Typography className={classes.paragraph}>
                                                        10lb $3450
                                                    </Typography>    
                                                    <Typography className={classes.paragraph}>
                                                        Each additional lb over 10lbs is just $350JMD per lb
                                                    </Typography>
                                                    <br />
                                                    <Typography gutterBottom className={classes.cardTitle3}>
                                                        Processing Fee:
                                                    </Typography> 
                                                    <Typography className={classes.paragraph}> 
                                                        Each package is subject to a processing fee of $230 { /* &#125;&#125; */} 
                                                        <br /><br />
                                                        <Typography variant={"h6"} className={classes.paragraphHeadings}>
                                                            Customs Fee:
                                                        </Typography>
                                                        Packages deemed by Customs as intended for personal use, valued in excess of US$50.00 (C.I.F.) may be subject to Customs Duty Charges.
                                                        For more details as it relates to customs charges, please visit <a href="https://www.jacustoms.gov.jm/" title="jacustoms" target="_blank">www.jacustoms.gov.jm</a>
                                                        <br /><br />
                                                        <Typography variant={"h6"} className={classes.paragraphHeadings}>
                                                            Our Local Delivery Rates:
                                                        </Typography> 
                                                        May Pen: 
                                                        Packages under 10lb Free Delivery by Urged 
                                                        <br /><br />
                                                        Other Parishes: 
                                                        Delivery starts at $300 
                                                        <br /><br />
                                                        Third party couriers includes Zipmail, Knutsford Express or Doorway Express 
                                                        <br /><br />
                                                        Prices are Subjected to Change.
                                                    </Typography>    
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </Fade>
                            </Modal>
                            <style>
                                {
                                    `
                                        ::-webkit-scrollbar {
                                            width: 12px;
                                            // background-color: #FF5E14;
                                            // border-radius: 50px;
                                        }

                                        /*Track */
                                        ::-webkit-scrollbar-track {
                                            -webkit-box-shadow: inset 0 0 6px rgbs(0,0,0,0.3);
                                            -webkit-border-radius: 10px;
                                            border-radius: 10px;
                                        }

                                        /*Handle */
                                        ::-webkit-scrollbar-thumb {
                                            -webkit-border-radius: 10px;
                                            border-radius: 10px;
                                            background-color: #FF5E14;
                                        }
                                    `
                                }
                            </style>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
            {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_LIVECHAT_LICENSE !== undefined? process.env.REACT_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
        </>
    );
}

export default CargoAndFreight;
