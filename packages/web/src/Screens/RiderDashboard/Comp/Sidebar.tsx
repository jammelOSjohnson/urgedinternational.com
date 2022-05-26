import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Theme, IconButton, useTheme, CssBaseline, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import "../CSS/sidebar.css";
import MailIcon from '@material-ui/icons/Mail';



interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

// const drawerWidth = "16.5%";
const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        logo: {
            height: "37px",
            width: "107.72px",
            marginLeft: "auto",
            marginRight: "auto" ,
            marginTop: "10%"       
        },
        logosmall: {
          height: "107.72px",
          width: "37px",
          marginLeft: "auto",
          marginRight: "auto" ,
          marginTop: "10%"       
        },
        root: {
            display: 'flex',
          },
          appBar: {
            zIndex: theme.zIndex.drawer + 1,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          menuButton: {
            marginRight: 36,
          },
          hide: {
            display: 'none',
          },
          drawer: {
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
          },
          drawerOpen: {
            width: drawerWidth,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
          },
          drawerClose: {
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.leavingScreen,
            }),
            overflowX: 'hidden',
            width: theme.spacing(7) + 1,
            [theme.breakpoints.up('sm')]: {
              width: theme.spacing(9) + 1,
            },
          },
          toolbar: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
          },
          content: {
            flexGrow: 1,
            padding: theme.spacing(3),
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
          },
          inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
          },
          callapsibleIconStyle: {
              right: 0,
              position: "absolute",
              transform: "rotate(180deg)",
              bottom: "-102%",
          },
          expandIconStyle: {
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
            bottom: "-102%",
          },
          loginIconStyle: {
            transform: "rotate(180deg)",
          }
          
    }),
);


export const Sidebar: React.FC = function Sidebar({children}) {
    const classes = useStyles();
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('lg'));
    const isMatchMedium = useMediaQuery(theme.breakpoints.up('xl'));
    var { value }  = useAppData();
    var { logout, userInfo } = value;

    const [open, setOpen] = React.useState(true);
    const [open1, setOpen1] = React.useState(false);

    const [values, setValues] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });
    
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;
    
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    
    const handleDrawerClose = () => {
        setOpen(false);
    };

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
    
      
    return (
        <>
          
          {isMatchMedium? (
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                    }, )}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                    }}
                >
                    {/* <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div> */}
                    
                    {open && <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>}
                    {!open && <img className={classes.logosmall} src="Images/SmallSidebarLogo.png" alt="Urged Logo"></img>}
                    <List style={{marginTop: "20%"}}>
                    {['Overview', 'Delivery Orders'].map((text, index) => (
                        referralPath === "/AdminDashboard" && text === "Overview" ?
                          <ListItem button key={0} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={1} />
                          </ListItem>
                        :
                        referralPath === "/DeliveryOrdersDetails" || referralPath === "/DeliveryOrders" && text === "Delivery Orders" ?
                          <ListItem button key={2} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        text === "Overview" ?
                          // <Link to="/AdminDashboard" className={classes.inactiveItemLink}>
                            <ListItem button key={3}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          // </Link>
                        :
                        <ListItem button key={4}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
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
                              <ListItem button key={5} >
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </a>
                            :
                            <ListItem button key={6}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                            </ListItem>
                        )) :
                        ['Settings', 'Login'].map((text, index) => (
                          text === 'Login'?
                          <a href="/Login" onClick={handleLogin} className={classes.inactiveItemLink}>
                            <ListItem button key={7}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/Logout.png" className={classes.loginIconStyle} alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                              </ListItem>
                          </a>
                          :
                          <ListItem button key={8}>
                          <ListItemIcon>
                            {
                              index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                              index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                            }
                          </ListItemIcon>
                          <ListItemText primary={text} />
                          </ListItem>
                      ))
                      }
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.expandIconStyle,{
                            [classes.hide]: open,
                            })}
                        >
                            <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerClose}
                            edge="start"
                            className={clsx( classes.callapsibleIconStyle, {
                            [classes.hide]: !open,
                            })}
                        >
                            <img src="Images/collapse_icon1.svg" style={{width: "100%"}} alt="icon"/>
                        </IconButton>
                    </List>
                </Drawer>
                <main className={classes.content} style={{padding: "0px"}}>
                  {children}
                </main>
            </div>
          ) : <></>}

          {isMatch? (
            <div className={classes.root}>
                <CssBaseline />
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open1,
                    [classes.drawerClose]: !open1,
                    }, "hideOnMobile")}
                    classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open1,
                        [classes.drawerClose]: !open1,
                    }),
                    }}
                >
                    {/* <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div> */}
                    
                    {open1 && <img className={classes.logo} src="Images/urged logo.svg" alt="Urged Logo"></img>}
                    {!open1 && <img className={classes.logosmall} src="Images/SmallSidebarLogo.png" alt="Urged Logo"></img>}
                    <List>
                    {['Overview', 'Delivery Orders'].map((text, index) => (
                        referralPath === "/AdminDashboard" && text === "Overview" ?
                          <ListItem button key={0} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        referralPath === "/DeliveryOrdersDetails" || referralPath === "/DeliveryOrders" && text === "Delivery Orders" ?
                          <ListItem button key={1} className={classes.activeItem}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
                        :
                        text === "Overview" ?
                          // <Link to="/AdminDashboard" className={classes.inactiveItemLink}>
                            <ListItem button key={2}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                    index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                          // </Link>
                        :
                        text !== "Overview"?
                          <ListItem button key={3} style={{marginTop: "5%"}}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                                  index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                          </ListItem>
                      :
                        <ListItem button key={4}>
                          <ListItemIcon>
                            {
                              index === 0 ? <img src="Images/GroupSquareIcon2.png" alt="square icon"/> :
                              index === 1 ? <img src="Images/blacktruckIconImage.png" alt="truck icon"/> : 
                              index === 2 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> : <MailIcon />
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
                              <ListItem button key={5} >
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                              </ListItem>
                            </a>
                            :
                            <ListItem button key={6}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                            </ListItem>
                        )) :
                        ['Settings', 'Login'].map((text, index) => (
                          text === 'Login'?
                          <a href="/Login" onClick={handleLogin} className={classes.inactiveItemLink}>
                            <ListItem button key={7}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/Logout.png" className={classes.loginIconStyle} alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText primary={text} />
                              </ListItem>
                          </a>
                          :
                          <ListItem button key={8}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText primary={text} />
                          </ListItem>
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
                </Drawer>
                <main className={classes.content} style={{padding: "0px"}}>
                  {children}
                </main>
            </div>
          ) : <></>}

        </>
    )
}
