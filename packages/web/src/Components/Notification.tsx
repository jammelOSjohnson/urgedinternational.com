import { useAppData } from '../Context/AppDataContext';
import { Badge , makeStyles, createStyles, Theme, } from '@material-ui/core';
import React from 'react';
import { NotificationImportantRounded } from "@material-ui/icons/";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        }
    }),
);

export const Notification: React.FC = function Notification() {
    const classes = useStyles();

    var { value }  = useAppData();
    var { noties } = value;

    
      
    return (
        <>
            <Badge badgeContent={noties.length} color="primary" className="hideOnMobile">
                <NotificationImportantRounded className={classes.noti} />
            </Badge>
            <style>
                {
                    `
                        @media only screen and (max-width: 768px){
                            .hideOnMobile{
                                display: none;
                            }
                        }
                    `
                }
            </style>
        </>
    )
}