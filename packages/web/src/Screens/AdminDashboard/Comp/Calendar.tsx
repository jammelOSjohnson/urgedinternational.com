import React, { useState } from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
// import { Paper } from "@material-ui/core";
import { MuiThemeProvider, createTheme } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";


import { MuiPickersUtilsProvider, KeyboardDatePicker, } from "@material-ui/pickers";

const theme = createTheme({
  palette: {
    primary: { light: green[300], main: green[200], dark: green[400] }
  }
});

export const Calendar: React.FC =  function Calendar ()  {
  const [date, changeDate] = useState(new Date());

  const handleDateChange = (date) => {
    changeDate(date);
    console.log("Date is: ", date);
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  </>
  );
}