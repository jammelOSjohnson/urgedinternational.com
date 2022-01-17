import { Container, Grid , makeStyles, createStyles, Theme } from '@material-ui/core';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import React from 'react';
// import { useHistory } from 'react-router-dom';
// import clsx from 'clsx';
// import { NotificationImportantRounded, ShoppingCartRounded } from "@material-ui/icons/";

// interface Props {
    
// }

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        },
        main: {
            padding: 0,
        },
        gridRoot: {
            padding: "0px"
        },
    }),
);

export const EmployeeDetailsRight: React.FC = function EmployeeDetailsRight() {
    const classes = useStyles();
    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });
    
      //var history = useHistory();

    
      
    return (
        <>
            <Container maxWidth="xl" className={classes.main} style={{background: "transparent"}}>
                <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                    <Grid item xs={12} spacing={1}>
                        Calendar
                    </Grid>
                    <Grid item xs={12} spacing={1}style={{marginTop: "100%"}}>
                        Employee Card
                    </Grid>
                    {/* <Grid container direction="row" xs={6} spacing={1}>
                        <Grid item xs={12} spacing={0}>
                            Employee Card
                        </Grid>
                    </Grid> */}
                </Grid>
            </Container>
        </>
    )
}