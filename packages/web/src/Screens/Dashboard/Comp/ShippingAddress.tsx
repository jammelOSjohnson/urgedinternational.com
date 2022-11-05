import { Grid, makeStyles, createStyles, Typography, Theme, CircularProgress, Backdrop } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useAppData } from '../../../Context/AppDataContext';
import { MailBoxNumber } from './MailBoxNumber';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
          },
    }),
);

export const ShippingAddress: React.FC = function ShippingAddress() {
    const classes = useStyles();
    var { value }  = useAppData();
    var { userInfo, shippingAddress, getShippingAddress } = value;
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        try{
            getShippingAddress(value);
        }catch(err){
            console.log(err)
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
    };

    if(shippingAddress !== undefined && shippingAddress !== null){
        return (
            <>
                {/* <Typography style={{fontWeight: "bold"}}>
                    My Air Freight Address
                </Typography> */}
                <Typography style={{fontWeight: "bold"}}>
                    Delivery Address
                </Typography>
                {/* <Typography >
                    Name:&nbsp; 
                    <span style={{color: "#FF5E14"}}>{userInfo.fullName?.toUpperCase()}</span>
                </Typography> */}
                {/* <Typography>
                    Address 1:&nbsp;
                    <span>{shippingAddress.AirFreight.addressLine1}</span> 
                </Typography> */}
                {/* <Typography>
                    Address 2:&nbsp;
                    <span>{shippingAddress.AirFreight.addressLine2}
                        <MailBoxNumber /> -Air
                    </span>
                </Typography> */}
                {/* <Typography>
                    City:&nbsp;
                    <span>{shippingAddress.AirFreight.city}</span> 
                </Typography> */}
                {/* <Typography>
                    State:&nbsp;
                    <span>{shippingAddress.AirFreight.state}</span>&nbsp;&nbsp;ZipCode:&nbsp;
                    <span>{shippingAddress.AirFreight.zipCode}</span>
                </Typography> */}
                <Typography>
                    For more information call or <br />WhatsApp us <a href='tel:8767735015' title='WhatsApp Number'>876-773-5015</a>.
                </Typography>
            </>
        )
    }else{
        return (
            <>
                <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
                    <CircularProgress color="inherit" />
                </Backdrop>
            </>
        )
    }
    
}