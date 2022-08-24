import React, { useEffect, useState } from "react";
import 'date-fns';
import { TextField } from "@material-ui/core";
import { createStyles, makeStyles , Theme} from "@material-ui/core/styles";
import { useAppData } from '../../../Context/AppDataContext';
import moment from "moment";

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

type Props = {
  type: string,
  setStartDate: React.Dispatch<React.SetStateAction<string>>,
  setEndDate: React.Dispatch<React.SetStateAction<string>>
}


export const Calendar: React.FC<Props> =  function Calendar ({type, setStartDate, setEndDate})  {
  var { value }  = useAppData();
  var { riders, selectedRider, fetchOrdersForRider2 } = value;
  const Year = new Date().getFullYear();
  const month = new Date().getMonth() + 1;
  const [date, changeDate] = useState( Year + "-" + month.toString().padStart(2,"0") + "-01T00:00");
  const [searchdate, changeSearchDate] = useState();
  const [searchEnddate, changeSearchEndDate] = useState();
  const classes = useStyles();

  useEffect(() => {
    try{
      if(searchEnddate != undefined &&
        searchdate !== undefined && 
        riders.length !== 0 && selectedRider !== undefined){
        console.log(selectedRider);
        let riderId = riders[selectedRider]._id;
        let start = searchdate;
        let end = searchEnddate; 
        //moment().endOf('month').format('YYYY-MM-DD[T00:00:00.000Z]');
        //console.log("fetching");
        if(type != "general"){
          fetchOrdersForRider2(value, riderId, start, end).then(()=>{
            return;
          });
        }else{

        }
      }
    }catch(err) {
      console.log(err);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRider, searchdate, searchEnddate])

  const handleDateChange = (date) => {
    let form  = document.getElementById("#dateform");
    if(type === "general"){
      setStartDate(date.target.value);
    }else{
      changeSearchDate(date.target.value);
    }
    changeDate(date.target.value);
    console.log("Start Date is: ", date.target.value);
    form?.click();
  };

  const handleEndDateChange = (date) => {
    let form  = document.getElementById("#dateform");
    if(type === "general"){
      setEndDate(date.target.value);
    }else{
      changeSearchEndDate(date.target.value);
    }
    changeDate(date.target.value);
    console.log("End Date is: ", date.target.value);
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
        label="Select Start Date"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleDateChange}
      />&nbsp;&nbsp;&nbsp;&nbsp;
      <TextField
        id="datetime-local"
        label="Select End Date"
        type="datetime-local"
        defaultValue={date}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        onChange={handleEndDateChange}
      />
    </form>
  </>
  );
}