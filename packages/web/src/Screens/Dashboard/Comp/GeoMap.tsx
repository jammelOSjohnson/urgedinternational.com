import { makeStyles, createStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import addressPI from '../../../Apis/addressPI';

interface State {
    lat: any;
    long: any;
}

interface ParentState {
    Street: string;
    Town: string;
    ContactNum: string;
    PaymentMethod: string;
    Parish: string;
    lat: any;
    long: any;
}

interface Props {
    setValues: (ParentState: ParentState) => void;
    values: ParentState;
}



// const useStyles = makeStyles((theme: Theme) => 
//     createStyles({
//         root: {
//             borderRadius: "33px",
//             "& .MuiInputBase-root": {
//                 color: "#9B9B9B ",
//                 borderColor: "#888888",
//                 border: "0.1px dotted",
//                 marginBottom: "3%",
//                 borderRadius: "12px"
//             },
//             "& .MuiSelect-select:$focus": {
//                 backgroundColor: "inherit",
//                 color: "#9B9B9B"
//             },
//             "& .MuiFormLabel-root": {
//                 fontWeight: 700,
//                 fontSize: "1.2rem"
//             },
//             "& .MuiInputLabel-root.Mui-focused":{
//                 color: "#9B9B9B"
//             }
//         },
//         formHeading: {
//             fontSize: "1.5rem",
//             fontWeight: "normal",
//             lineHeight: "21px",
//             color: "#4A4A4A",
//             fontFamily: "PT Sans",
//             paddingTop: "2%",
//             paddingBottom: "2%"
//         },
//         formSubheading: {
//             fontSize: "14px",
//             fontFamily: "Open Sans",
//             fontStyle: "normal",
//             color: "#4A4A4A",
//             paddingTop: "5%",
//             paddingBottom: "5%",
//             fontWeight: "normal"
//         },
//         paper: {
//             borderRadius: "33px"
//         },
//         divider: {
//             height: "3px"
//         },
//         form: {
//             marginLeft: "5%",
//             marginRight: "5%",
//         },
//         cardTitle: {
//             fontSize: "20px",
//             fontWeight: 700,
//             color: "#1D2635",
//             fontFamily: "PT Sans",
//         },
//         cardContent: {
//             flexGrow: 1,
//             textAlign: "left",
//             paddingBottom: "0px",
//             paddingTop: "0px",
//         },
//         cardImage: {
//             textAlign: "left",
//             position: "relative"
//         },
//         card: {
//             background: "#FFFFFF",
//             border: "0.813791px solid #E2E2E2",
//             boxSizing: "border-box",
//             boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
//             borderRadius: "34.3745px",
//         },
//         OrderResult1: {
//             position: "absolute",
//             top: "23%",
//             right: "9%",
//             color: "#13ADD1",
//             fontFamily: "PT Sans",
//             fontWeight: "bold"
//         },
//         OrderResult2: {
//             position: "absolute",
//             top: "23%",
//             right: "9%",
//             color: "#13ADD1",
//             fontFamily: "PT Sans",
//             fontWeight: "bold"
//         },
//         button: {
//             margin: theme.spacing(1),
//             color: "#FFFFFF",
//             backgroundColor: "#FF5E14",
//             borderRadius: "22px",
//             width: "95%"
//         },
//         alert: {
//             marginBottom: "5%"
//         },
//         formControl: {
//             margin: theme.spacing(1),
//             minWidth: 120,
//             marginLeft: "0px"
//         },
//         fees: {
//             fontSize: "14px",
//             fontFamily: "PT Sans",
//             fontStyle: "normal",
//             color: "#4A4A4A",
//             fontWeight: 600
//         }
//     }),
// );

export const GeoMap: React.FC<Props> = function GeoMap({setValues, values}) {
    //const classes = useStyles();

    const [compCoords, setcompCoords] = React.useState<State>({
        lat: null,
        long: null
    });

    //const [isgeoAllowed, setIsGeoAllowed] = useState(false);

    



    const getLocation = () => {
        try{
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError);
              } else {
                //alert("Geolocation is not supported by this browser.");
            }
            var location = "";

            // AddGeneralLocation(value, )
        }catch(err){

        }
    }

    const getCoordinates = (position) => {
        // console.log(position);
        setcompCoords({lat: position.coords.latitude, long: position.coords.longitude});
    }

    const reverseGeoCodeCoordinates = () => {
        try{
            addressPI.get(`/json?latlng=${compCoords.lat},${compCoords.long}&key=${process.env.REACT_APP_GEO_API2}`).then((response) => {
                if(response.data !== null){
                    if(response.data.results !== undefined){
                        let resArr = response.data.results;
                        let addressArr = "";
                        resArr.map((item,index) => {
                            if(item.types[0] === "route"){
                                addressArr = item.formatted_address.split(',')
                            }
                        })
                        // resArr[0].formatted_address.split(',');
                        setValues({...values, Street: addressArr[0], Town: addressArr[1]});
                    }
                }
            }).catch((err) => {
    
            });
        }catch(err){

        }
        
    }

    const handleLocationError = (error) => {
        switch(error.code) {
            case error.PERMISSION_DENIED:
              console.log("User denied the request for Geolocation.");
              break;
            case error.POSITION_UNAVAILABLE:
              console.log("Location information is unavailable.");
              break;
            case error.TIMEOUT:
              console.log("The request to get user location timed out.");
              break;
            case error.UNKNOWN_ERROR:
              console.log("An unknown error occurred.");
              break;
            default:
                break;    
        }
    }

    useEffect(() =>{

        if(compCoords.lat === null && compCoords.long === null){
            getLocation();
        }else{
            reverseGeoCodeCoordinates();
        }
    },[compCoords.lat, compCoords.long])
    // generalLocation, values.Town
      
    return (
        <>
            {
                compCoords.lat && compCoords.long ?
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${compCoords.lat},${compCoords.long}&zoom=14&size=600x300&sensor=false&markers=color:orange%7C${compCoords.lat},${compCoords.long}&key=${process.env.REACT_APP_GEO_API}`} style={{width: "100%"}} alt='' />
                :
                <></>
            }    
        </>
    )
}