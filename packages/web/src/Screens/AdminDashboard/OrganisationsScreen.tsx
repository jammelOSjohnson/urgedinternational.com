import { Container, Grid, makeStyles, createStyles, Theme } from '@material-ui/core';
import React from 'react';
//Import Components
import { HeaderRight } from './Comp/HeaderRight';
import { OrganisationsCardList } from './Comp/OrganisationsCardList';
const AddOrg = React.lazy(() => import('./Comp/AddOrg'));
const Sidebar = React.lazy(() => import('./Comp/Sidebar'));
const HeaderLeft = React.lazy(() => import('./Comp/HeaderLeft'));

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
            backgroundImage: "url(Images/FoodPortalBackground.png)"
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
          },
    }),
);

export const OrganisationsScreen: React.FC = () => {
    const classes = useStyles();



    return (
        <>
            <Sidebar>
                <Container maxWidth="xl" style={{ paddingLeft: "8px", paddingRight: "8px" }} className={classes.main}>
                    <Grid container direction="row" className={classes.gridRoot} alignItems="center">
                            <Grid item xs={8} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderLeft />
                            </Grid>
                            <Grid item xs={4} style={{ marginBottom: "2%", marginTop: "1%", background: "transparent" }}>
                                <HeaderRight />
                            </Grid>
                            <Grid item xs={12}>
                                {/* <FilterBar /> */}
                                <AddOrg />
                                <OrganisationsCardList />
                            </Grid>
                        </Grid>
                </Container>
            </Sidebar>
        </>
    );
}
