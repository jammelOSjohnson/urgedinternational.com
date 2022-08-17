import { makeStyles, createStyles, Typography, Theme, useMediaQuery, useTheme, IconButton } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
//import clsx from 'clsx';
//import { PlayArrowRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import { HistoryRounded } from "@material-ui/icons/";
import {CloseRounded} from '@material-ui/icons';
import clsx from 'clsx';
import { useAppData } from '../../../Context/AppDataContext';

// interface State {
//     email: string;
//     password: string;
//     showPassword: boolean;
// }

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        links: {
            textDecoration: "none",
            color: "inherit"
        },list: {
            width: 250,
        },
        fullList: {
          width: 'auto',
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        activeItem: {
            backgroundColor: "#FEC109",
            color: "#FFFFFF",
            borderRadius: "50px",
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto"
        },
        activeItem2: {
          backgroundColor: "#FF5E14",
          color: "#FFFFFF",
          borderRadius: "50px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto"
        },
        activeIcon2: {
          color: "#FFFFFF"
        },closeIcon: {
            fontWeight: "bolder",
            color: theme.palette.primary.light,
            fontSize: "30px",
            zIndex: 700
        },
        closeBtn: {
            position: "absolute",
            right: 5
        },
        loginIconStyle: {
            transform: "rotate(180deg)",
        },
        expandIconStyle: {
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
            bottom: "-102%",
        },
        hide: {
            display: 'none',
        },
        callapsibleIconStyle: {
            right: 0,
            position: "absolute",
            transform: "rotate(180deg)",
            bottom: "-102%",
        },
    }),
);

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const HeaderLeft: React.FC = function HeaderLeft() {
    const classes = useStyles();
    const theme = useTheme();
    var { value }  = useAppData();
    var { logout, userInfo } = value;
    const [open1, setOpen1] = React.useState(false);
    // const [values, setValues] = React.useState<State>({
    //     email: '',
    //     password: '',
    //     showPassword: false,
    //   });

    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('md'));
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleDrawerOpen1 = () => {
        setOpen1(true);
    };
    
    const handleDrawerClose1 = () => {
        setOpen1(false);
    };

    const handleLogout = async (event) => {
        try{
          event.preventDefault();
          logout(value);
          setTimeout(() => {
            history.push('/Login');
          }, 3000);
        }catch{
          ////////console.log('Failed to logout.');
        }
    }

    const handleLogin = (event) => {
        try{
          event.preventDefault();
          history.push('/Login', { from: history.location.pathname});
        }catch{
          ////////console.log('Failed to logout.');
        }
    }

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
      ) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }
  
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(anchor, true)}
                edge="start"
                className={classes.closeBtn}
            >
                <CloseRounded className={classes.closeIcon}/>
            </IconButton>
            <List>
                    {['Overview', 'Employees' , 'Admin Orders', 'Organisations'].map((text, index) => (
                        referralPath === "/AdminDashboard" && text === "Overview" ?
                          <ListItem button key={text}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/OverviewActive.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/EmployeesActive.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/OrdersActive.png" alt="BlackMarket icon"/> : 
                                index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/AdminOrderSDetails" && text === "Admin Orders" ?
                          <ListItem button key={text} >
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/EmployeesIActive.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/OrdersActive.png" alt="BlackMarket icon"/> : 
                                index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/AdminOrders" && text === "Admin Orders" ?
                          <ListItem button key={text} >
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/EmployeesIActive.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/OrdersActive.png" alt="BlackMarket icon"/> : 
                                index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/Employees" && text === "Employees" ?
                          <ListItem button key={text} >
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/EmployeesActive.png" alt="AEmployeees" /> : 
                                index === 2 ? <img src="Images/OrdersIActive.png" alt="BlackMarket icon"/> : 
                                index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/Organisations" && text === "Organisations" ?
                          <ListItem button key={text} >
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/EmployeesActive.png" alt="AEmployeees" /> : 
                                index === 2 ? <img src="Images/OrdersActive.png" alt="BlackMarket icon"/> :
                                index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        text === "Overview" ?
                          <Link to="/AdminDashboard" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/OverviewIActive.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : 
                                    index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text === "Admin Orders" ?
                          <Link to="/AdminOrders" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/EmployeesIActive.png" alt="truck icon"/> : 
                                    index === 2 ? <img src="Images/OrdersIActive.png" alt="BlackMarket icon"/> : 
                                    index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text === "Employees" ?
                          <Link to="/Employees" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/EmployeesIActive.png" alt="IEmployeees" /> : 
                                    index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : 
                                    index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text === "Organisations" ?
                          <Link to="/Organisations" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/EmployeesIActive.png" alt="truck icon"/> : 
                                    index === 2 ? <img src="Images/OrdersIActive.png" alt="BlackMarket icon"/> :
                                    index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                        :
                        text !== "Overview"?
                          <ListItem button key={text} style={{marginTop: "5%"}}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                  index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : 
                                  index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                          </ListItem>
                      :
                        <ListItem button key={text}>
                          <ListItemIcon>
                            {
                              index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                              index === 1 ? <img src="Images/EmployeesIActive.png" alt="truck icon"/> : 
                              index === 2 ? <img src="Images/OrdersIActive.png" alt="BlackMarket icon"/> : 
                              index === 3 ? <img src="Images/OrganizationsIActive.png" alt="OrganizationsIActive icon"/> : <MailIcon />
                            }
                          </ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItem>
                    ))}
                    </List>
                    <Divider />
                    <List>
                        {userInfo.fullName !== null && userInfo.fullName !== "" && userInfo.fullName !== undefined?
                        ['Settings', 'Logout'].map((text, index) => (
                            text === 'Logout'?
                            <a href="/" onClick={handleLogout} className={classes.inactiveItemLink}>
                              <ListItem button key={text} >
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/SettingIActive.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/LogoutIActive.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </a>
                            :
                            <Link to="/AdminSettings" className={classes.inactiveItemLink}>
                              <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/SettingIActive.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/LogoutIActive.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </Link>
                        )) :
                        ['Settings', 'Login'].map((text, index) => (
                          text === 'Login'?
                          <a href="/Login" onClick={handleLogin} className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/SettingIActive.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/LogoutIActive.png" className={classes.loginIconStyle} alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                              </ListItem>
                          </a>
                          :
                          <Link href="/AdminSettings" className={classes.inactiveItemLink}>
                            <ListItem button key={text}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/SettingIActive.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/LogoutIActive.png" alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItem>
                          </Link>
                      ))
                      }
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen1}
                            edge="start"
                            className={clsx(classes.expandIconStyle,{
                            [classes.hide]: open1,
                            })}
                        >
                            <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerClose1}
                            edge="start"
                            className={clsx( classes.callapsibleIconStyle, {
                            [classes.hide]: !open1,
                            })}
                        >
                            <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                        </IconButton>
                    </List>
        </div>
    );
      
    return (
        <>
            {isMatchMedium? (
                <Typography variant="h6" style={{fontWeight: "bold", background: "transparent"}}>
                    {referralPath === "/Organisations" || referralPath === "/organisations" ?
                    <span><Link to="/Organisations" className={classes.links}>Organisations</Link></span> :
                    referralPath === "/AdminDashboard" || referralPath === "/admindashboard" ?
                    <span><Link to="/AdminDashboard" className={classes.links}>Dashboard</Link></span> :
                    referralPath === "/Employees" || referralPath === "/employees" ?
                    <span><Link to="/Employees" className={classes.links}>Employees</Link></span> :
                    referralPath === "/AdminOrderSDetails" || referralPath === "/adminordersdetails" ?
                    <span><Link to="/AdminOrderSDetails" className={classes.links}>Order Details</Link></span> :
                    referralPath === "/AdminSettings" || referralPath === "/adminsettings" ?
                    <span><Link to="/AdminSettings" className={classes.links}>Settings</Link></span> :
                    referralPath === "/PaySettings" || referralPath === "/paysettings" ?
                    <span><Link to="/PaySettings" className={classes.links}>Pay Settings</Link></span> : ""}
                    
                </Typography>
            ):<></>}

            {isMatch? (
                <div style={{marginTop: "1%", marginBottom: "1%"}}>
                    {(['left'] as Anchor[]).map((anchor) => (
                        <React.Fragment key={anchor}>
                        <div style={{display: "flex"}}>
                            <Button style={{zIndex: 2, position: 'fixed'}} onClick={toggleDrawer(anchor, true)} className="mobileMenuToggle">
                                <img src="Images/MobileMenuIcon.png" alt="MobileMenuIcon"></img>
                            </Button>
                        </div>
                        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                            {list(anchor)}
                        </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            ):
                <></>
            }
        </>
    )
}