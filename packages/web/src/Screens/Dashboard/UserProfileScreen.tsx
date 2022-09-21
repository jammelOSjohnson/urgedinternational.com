import { LiveChatWidget } from '@livechat/widget-react';
import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
import { HeaderRight } from './Comp/HeaderRight';
import { Profile } from './Comp/Profile';
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
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
    }),
);


export const UserProfileScreen: React.FC = function UserProfileScreen () {
    const classes = useStyles();
    
    return(
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" spacing={0} className={classes.gridRoot} alignItems="center">
                        <Grid container direction="row" xs={12} spacing={0}>
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12}>
                                <Profile />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Sidebar>
            {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_APP_LIVECHAT_LICENSE !== undefined? process.env.REACT_APP_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
        </>
    )
}
