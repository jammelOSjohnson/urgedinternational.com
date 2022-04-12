import React, { useEffect, useState } from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { Paper, TextField } from "@material-ui/core";
import { createStyles, createTheme, makeStyles , Theme} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import { useAppData } from '../../../Context/AppDataContext';


import { MuiPickersUtilsProvider, KeyboardDatePicker, } from "@material-ui/pickers";
import moment from "moment";

const theme = createTheme({
  palette: {
    primary: { light: green[300], main: green[200], dark: green[400] }
  }
});

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 1% 0px"
        },cardTitle0: {
            fontSize: "20px",
            fontWeight: 300,
            fontFamily: "PT Sans",
            color: "#11263C"
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
        },
        container: {

        },
        textField: {

        }
    }),
);


export const Calendar: React.FC =  function Calendar ()  {
  var { value }  = useAppData();
  var { riders, selectedRider, fetchOrdersForRider2 } = value;
  const Year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const [date, changeDate] = useState( Year + "-" + month.toString().padStart(2,"0") + "-01T00:00");
  const [searchdate, changeSearchDate] = useState();
  const classes = useStyles();

  useEffect(() => {
    try{
      if(searchdate !== undefined && riders.length !== 0 && selectedRider !== undefined){
        console.log(selectedRider);
        let riderId = riders[selectedRider]._id;
        let start = searchdate;
        let end =  moment().endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
        //console.log("fetching");
        fetchOrdersForRider2(value, riderId, start, end).then(()=>{
        
        });
      }
    }catch(err) {
      console.log(err);
    }
    
  }, [selectedRider, searchdate])

  const handleDateChange = (date) => {
    let form  = document.getElementById("#dateform");
    changeSearchDate(date.target.value);
    changeDate(date.target.value);
    console.log("Date is: ", date.target.value);
    form?.click();
  };

  console.log(date)
  console.log(new Date().getMonth())

  return (
    <>
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Paper style={{ overflow: "hidden" }}>
        <KeyboardDatePicker
          autoOk
          variant="static"
          openTo="year"
          value={date}
          onChange={handleDateChange}
        />
      </Paper>
    </MuiPickersUtilsProvider> */}
    <form className={classes.container} noValidate >
      <TextField
        id="datetime-local"
        label="Select Date"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleDateChange}
      />
    </form>
  </>
  );
}