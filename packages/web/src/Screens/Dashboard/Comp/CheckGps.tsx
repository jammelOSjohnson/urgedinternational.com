import { Button, Fade, FormControl, Grid, makeStyles, Modal, TextField, Theme, createStyles, Backdrop, Typography } from "@material-ui/core"
import { Alert } from "@material-ui/lab";
import clsx from "clsx";
import React, { useState } from "react";
import {Link, useHistory} from 'react-router-dom';
import MapContainer from '../Testmap';

interface NoGps {
    open : boolean,
    open2 : boolean,
    open3 : boolean,
    errorMessage: string
}

interface State {
    Address: string;
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

export const CheckGps: React.FC = function CheckGps(){
    const classes = useStyles();
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    var coords= [
        {lat: 17.862452783274218,  lng: -77.23639526977539},
        {lat: 17.867027547705508,  lng: -77.22970047607421},
        {lat: 17.87013178508555,   lng: -77.22523728027343},
        {lat: 17.876013349305136,  lng: -77.22214737548828},
        {lat: 17.88483533051143,   lng: -77.22540894165039},
        {lat: 17.89218664670124,   lng: -77.22935715332031},
        {lat: 17.90427481565215,   lng: -77.23313370361328},
        {lat: 17.915055460439493,  lng: -77.23364868774414},
        {lat: 17.921915529370207,  lng: -77.22764053955078},
        {lat: 17.93171516703546,   lng: -77.22420731201171},
        {lat: 17.931225198031044,  lng: -77.22008743896484},
        {lat: 17.930408580010674,  lng: -77.21459427490234},
        {lat: 17.929755282882773,  lng: -77.2066978515625},
        {lat: 17.92779537703784,   lng: -77.18633393476061},
        {lat: 17.92599877762573,   lng: -77.1804974479442},
        {lat: 17.934001671127607,  lng: -77.17294434735827},
        {lat: 17.940371062512373,  lng: -77.17260102460436},
        {lat: 17.94755676732203,   lng: -77.17483262250475},
        {lat: 17.95599167057216,   lng: -77.17620591352038},
        {lat: 17.96236027017859,   lng: -77.17753119808778},
        {lat: 17.96236027017859,   lng: -77.17976279598817},
        {lat: 17.96023742913794,   lng: -77.18491263729676},
        {lat: 17.961870386047654,  lng: -77.19383902889832},
        {lat: 17.96562612968135,   lng: -77.2063703094159}, 
        {lat: 17.97117795230354,   lng: -77.21684165341004},
        {lat: 17.974443648811068,  lng: -77.22319312435731},
        {lat: 17.981954521597256,  lng: -77.22611136776551},
        {lat: 17.99425027689381,   lng: -77.23023124081239},
        {lat: 18.007147739754515,  lng: -77.23433859353429},
        {lat: 18.015636694018298,  lng: -77.23657019143468},
        {lat: 18.02053398158723,   lng: -77.23708517556554},
        {lat: 18.020860462583922,  lng: -77.24257833962804},
        {lat: 18.021023702855295,  lng: -77.24652655129796},
        {lat: 18.01971777644781,   lng: -77.25047476296788},
        {lat: 18.016942650682616,  lng: -77.25459463601476},
        {lat: 18.013351246561335,  lng: -77.25940115456945},
        {lat: 18.007474245556644,  lng: -77.26403601174718},
        {lat: 18.001597048589822,  lng: -77.27399237161046},
        {lat: 17.994087011824647,  lng: -77.28137381081945},
        {lat: 17.986413383144694,  lng: -77.29047186379796},
        {lat: 17.98461737930594,   lng: -77.29974157815343},
        {lat: 17.980698762041577,  lng: -77.30632670428857},
        {lat: 17.97873942079002,   lng: -77.31817133929833},
        {lat: 17.976616776563944,  lng: -77.32589610126122},
        {lat: 17.972861266582456,  lng: -77.33087428119286},
        {lat: 17.96453354657696,   lng: -77.3329342177163},
        {lat: 17.96061448370187,   lng: -77.33447917010888},
        {lat: 17.954735726460253,  lng: -77.3358524611245},
        {lat: 17.948366852206146,  lng: -77.33619578387841},
        {lat: 17.94265100056745,   lng: -77.33653910663232},
        {lat: 17.93579173486814,   lng: -77.33653910663232},
        {lat: 17.928605552375455,  lng: -77.33568079974755},
        {lat: 17.92321572412226,   lng: -77.33516581561669},
        {lat: 17.91945908017353,   lng: -77.33344920184716},
        {lat: 17.917499060406673,  lng: -77.32761271503075},
        {lat: 17.916355705530886,  lng: -77.31954463031396},
        {lat: 17.914885666994387,  lng: -77.30993159320458},
        {lat: 17.914885666994387,  lng: -77.30358012225732},
        {lat: 17.929912152704475,  lng: -77.29276545550927},
        {lat: 17.93856813634327,   lng: -77.29207881000146},
        {lat: 17.94706038811354,   lng: -77.29053385760888},
        {lat: 17.946243843155717,  lng: -77.28984721210107},
        {lat: 17.94689707942351,   lng: -77.28366740253075},
        {lat: 17.94689707942351,   lng: -77.27422602679833},
        {lat: 17.94608053371187,   lng: -77.26495631244286},
        {lat: 17.945590604475775,  lng: -77.2589481642495},
        {lat: 17.939058085023788,  lng: -77.25002177264794},
        {lat: 17.93513845760386,   lng: -77.24899180438622},
        {lat: 17.932198680081093,  lng: -77.24899180438622},
        {lat: 17.92615565077495,   lng: -77.24899180438622},
        {lat: 17.91994908172759,   lng: -77.24813349750146},
        {lat: 17.916682379105264,  lng: -77.2476185133706},
        {lat: 17.91161887103798,   lng: -77.24727519061669},
        {lat: 17.907861981262222,  lng: -77.24727519061669},
        {lat: 17.90149142102272,   lng: -77.24590189960107},
        {lat: 17.89855108527332,   lng: -77.24555857684716},
        {lat: 17.89234354977092,   lng: -77.24573023822411},
        {lat: 17.890383230288194,  lng: -77.24487193133935},
        {lat: 17.88646252637189,   lng: -77.24401362445458},
        {lat: 17.88205163096784,   lng: -77.24349864032372},
        {lat: 17.878620858793475,  lng: -77.24281199481591},
        {lat: 17.87437314428871,   lng: -77.24264033343896},
        {lat: 17.872576003731417,  lng: -77.24298365619286},
        {lat: 17.869798568935522,  lng: -77.24195368793114},
        {lat: 17.867511237097325,  lng: -77.24126704242333},
        {lat: 17.864815415354528,  lng: -77.24040873553857},
        {lat: 17.863916799021514,  lng: -77.23869212176902},
        {lat: 17.86294591977265,   lng: -77.23697550799949},
        {lat: 17.862700840464154,  lng: -77.23671801593406},
        {lat: 17.862621763081062,  lng: -77.23659332624848},
        {lat: 17.862529858212387,  lng: -77.23649140230592},
        {lat: 17.862489011588853,  lng: -77.23648067346986},
        {lat: 17.862443059126143,  lng: -77.23643775812562},
        {lat: 17.862452783274218,  lng: -77.23639526977539}
    ];

    var turnOnGps = function(){
        const successCallback = (position) => {
            console.log(position);
        };
          
        const errorCallback = (error) => {
            console.log(error);
        };
          
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }

    const [gpsCheck, setgpsCheck] = React.useState<NoGps>({
        open3: false,
        open2: false,
        open: false,
        errorMessage: `Please Click ${<a href={history.location.pathname} onClick={turnOnGps}></a>} To Turn On GPS.`
    });

    var [error, setError] = useState('');
    var [success, setSuccess] = useState('');
    var [loading, setLoading] = useState(false);

    const [values, setValues] = React.useState<State>({
        Address: '',
    });

    var handleSubmit = async function handleSubmit(event) {
        event.preventDefault();
        //prevents default form refresh
        //console.log("I am inside fuction");
        try{
            setSuccess('');
            setError('');
            setLoading(true);
            if(values.Address === ''){
                setError('Please enter delivery address')
                setLoading(false);
            }else{
                console.log(values.Address);
                getCoords(values.Address);
                setLoading(false);
            }

        }catch(err){
            console.log(err)
        }
    }

    var getCoords = function getCoords(Address){
        var geocoder = new google.maps.Geocoder();

        geocoder.geocode( { 'address': Address}, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                var latitude = results !== null? results[0].geometry.location.lat() : 0;
                var longitude = results !== null? results[0].geometry.location.lng(): 0;
                console.log(`${latitude},${longitude}`);
                checkFence(coords,latitude, longitude)
            } 
        }); 
    }

    var checkFence = function checkFence(polygonCoords, lat, lng){
        if(!gpsCheck.open3){
          var polygon = new window.google.maps.Polygon({
            paths: polygonCoords,
          });
      
          const contains = window.google.maps.geometry.poly.containsLocation(
              new window.google.maps.LatLng(lat, lng),
              polygon
          );
    
          if (!contains){
            console.log(document.location.pathname);
            //console.log(setLoading);
            setSuccess('We can deliver to this address.')
            // if(setLoading !== "none" && setLoading !== undefined){
            //   setLoading(true);
            // }
            if(!gpsCheck.open3){
              setgpsCheck({...gpsCheck, open3: true});
            }
            
          }else{
            setError("We can't deliver to this address.")
          }
        }
      }

    const handleClose = () => {
        setgpsCheck({...gpsCheck, open2:false});
    };

    const handleChange4 = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    

    return(
        <>
            <Grid item xs={12}>
                <MapContainer setLoading={"none"} setgpsCheck={setgpsCheck} gpsCheck={gpsCheck} />
            </Grid>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={gpsCheck.open2}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={gpsCheck.open2}>
                    <div className={clsx(classes.paper, 'modalMobile')}>
                        <h3 id="transition-modal-title" style={{textAlign: "center", color: "#F7B614"}}>Out Of Range</h3>
                        <Link to={referralPath} className={classes.cartIcon} onClick={handleClose}>
                                <img src="Images/CartCloseIcon.png" alt="closemodal" />
                        </Link>
                        <br />
                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                            <Grid item xs={12}>
                                <Grid item xs={12} >
                                    <form autoComplete="off">
                                        <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                                            <Grid item xs={12}>
                                            <Typography variant={'caption'}>
                                                You are either outiside the areas we deliver to or your GPS is turned off.
                                                Please turn on GPS or enter the delivery address below.
                                            </Typography>
                                            </Grid>
                                            <Grid item xs={12} >
                                                <TextField
                                                    id="outlined-multiline-static1"
                                                    label="Enter Delivery Address Here"
                                                    // multiline
                                                    // rows={4}
                                                    value={values.Address}
                                                    onChange={handleChange4('Address')}
                                                    variant="outlined"
                                                    placeholder="Enter Address"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Button variant="contained" 
                                                    style={{backgroundColor: "#F7B614", fontFamily: "PT Sans"}}
                                                    color="secondary" size="small" 
                                                    className={`${classes.Button} ${classes.btnfonts}`}
                                                    onClick={handleSubmit}
                                                    type="button"
                                                    fullWidth
                                                    disabled={loading}>
                                                    Submit Address
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
    )
}

export default CheckGps;