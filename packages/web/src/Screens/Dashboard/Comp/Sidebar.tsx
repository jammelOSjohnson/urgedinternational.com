import { useAppData } from '../../../Context/AppDataContext';
import { makeStyles, createStyles, Theme, IconButton, useTheme, CssBaseline, Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, Modal, Fade, Grid, Typography, Backdrop, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import "../CSS/sidebar.css";

import MailIcon from '@material-ui/icons/Mail';
import {HistoryRounded} from "@material-ui/icons";



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
            marginRight: "auto",
            '&:hover': {
              background: "#FF5E14",
           },
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
              bottom: "-65%",
          },
          expandIconStyle: {
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
            bottom: "-65%",
          },
          loginIconStyle: {
            transform: "rotate(180deg)",
          }, modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
           
          },
          paper: {
             backgroundColor: theme.palette.background.paper,
             border: '2px solid #000',
             boxShadow: theme.shadows[5],
             padding: theme.spacing(2, 4, 3),
             minWidth: "34%",
             maxWidth: "400px",
             borderRadius: "20px",
             borderColor: theme.palette.primary.light
            
          },
          ButtonMobile: {
              backgroundColor: theme.palette.primary.light,
              border: "1.21951px solid #FFFFFF",
              height: "41px",
              width: "100%",
              borderRadius: 4,
          },
          btnfonts: {
              fontFamily: "PT Sans",
              fontSize: "13px",
              lineHeight: "16.82px",
              fontWeight: "bolder",
              color: "#FAFAFA",
              textTransform: "none"
          },
          cartIcon: {
              position: "absolute",
              top: 18,
              right: 10
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
    const [open2, setOpen2] = React.useState(false);

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

    const handleLogout = (event) => {
      try{
        event.preventDefault();
        logout(value);
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

    const handleClose2 = () => {
      setOpen2(false);
    };

    const handleOpen2 = () => {
      try
      {
        setOpen2(true);
      }catch(err){

      }
      
    };
    
      
    return (
        <>
          {isMatchMedium? (
            <>
              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={classes.modal}
                  open={open2}
                  onClose={handleClose2}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                  timeout: 500,
                  }}
              >
                  <Fade in={open2}>
                  <div className={clsx(classes.paper, 'modalMobile')}>
                      <h2 id="transition-modal-title" style={{textAlign: "center"}}>Whatsapp Delivery</h2>
                      <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose2}>
                              <img src="Images/CartCloseIcon.png" alt="closemodal" />
                      </Link>
                      <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                          <Grid item xs={12}>
                              <Grid item xs={12}>
                              <Typography style={{textAlign: "center"}}>
                                We provide both errand services and package delivery.<br />
                                Click continue to contact us on whatsapp.
                              </Typography>
                              </Grid><br/>
                              <Grid item xs={10} sm={12} >
                                <a href="http://wa.me/18767735015" target="_blank" rel="nofollow noreferrer" style={{textDecoration: "none"}}>
                                  <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen2()} type="button">
                                    Continue 
                                  </Button>
                                </a>
                              </Grid>
                          </Grid>
                      </Grid>
                  </div>
                  </Fade>
              </Modal>
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
                      {['Overview', 'Food Delivery', 'Errands Solution', 'Uship', "Sally's Pantry", 'Orders'].map((text, index) => (
                          referralPath === "/Dashboard" && text === "Overview" ?
                            <ListItem button key={text} className={clsx(classes.activeItem, "activeLinkHover")}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                  index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                  index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                  index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                  index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          (referralPath === "/FoodDelivery" || referralPath === "/Restaurants" || referralPath === "/Menu" || referralPath === "/RestaurantItem") && text === "Food Delivery" ?
                            <ListItem button key={text} className={classes.activeItem2}>
                              <ListItemIcon className={classes.activeIcon2}>
                              {
                                  index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                  index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                  index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                  index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                  index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          referralPath === "/PackageDelivery" && text === "Errands Solution" ?
                            <ListItem button key={text} className={classes.activeItem}>
                              <ListItemIcon>
                              {
                                  index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                  index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                  index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                  index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                  index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          (referralPath === "/CargoAndFreight" || referralPath === "/Rates") && text === "Uship" ?
                            <ListItem button key={text} className={classes.activeItem}>
                              <ListItemIcon>
                              {
                                  index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                  index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                  index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                  index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                  index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          referralPath === "/Orders" && text === "Orders" ?
                            <Link to="/OrdersHistory" className={clsx(classes.activeItem, "inactiveLinkHover")}>
                              <ListItem button key={text}>
                                <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                  index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                  index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                  index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                  index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                  index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                }
                                </ListItemIcon>
                                <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Overview" ?
                            <Link to="/Dashboard" style={{color: "#5D6467"}} className={classes.inactiveItemLink}>
                              <ListItem button key={text}>
                                  <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                  }
                                  </ListItemIcon>
                                  <ListItemText className="link-font" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Food Delivery" ?
                            <Link to="/Restaurants" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                              <ListItem button key={text}>
                                  <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                  }
                                  </ListItemIcon>
                                  <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Errands Solution" ?
                            <ListItem button key={text} onClick={handleOpen2}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText className="link-fontH" primary={text} />
                            </ListItem>
                          :
                          text === "Uship" ?
                            <Link to="/CargoAndFreight" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                              <ListItem button key={text} >
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Sally's Pantry" ?
                            <a href='https://sallyspantry.com/' target="_blank" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")} title="Sally's Pantry">
                              <ListItem button key={text} >
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </a>
                          :
                          text === "Orders" ?
                            userInfo.email !== null && userInfo.email !== "" && userInfo.email !== undefined?
                              <Link to="/OrderHistory" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                                <ListItem button key={text}>
                                    <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                    </ListItemIcon>
                                    <ListItemText className="link-fontH" primary={text} />
                                </ListItem>
                              </Link>
                              :
                              <></>
                          :
                          <ListItem button key={text} style={{paddingLeft: "12px"}}>
                              <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                    index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                    index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                    index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                    index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                    index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                  }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                          </ListItem>
                      ))}
                      </List>
                      <Divider />
                      <List>
                          {userInfo.fullName !== null && userInfo.fullName !== "" && userInfo.fullName !== undefined?
                          ['Settings', 'Logout'].map((text, index) => (
                              text === 'Logout'?
                              <a href="/" onClick={handleLogout} className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                                <ListItem button key={text} >
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                      index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-fontH" primary={text} />
                                </ListItem>
                              </a>
                              :
                              <ListItem button key={text}>
                              <ListItemIcon>
                                {
                                  index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                  index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                              </ListItem>
                          )) :
                          ['Settings', 'Login'].map((text, index) => (
                            text === 'Login'?
                            <a href="/Login" onClick={handleLogin} className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                              <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/Logout.png" className={classes.loginIconStyle} alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText className="link-fontH" primary={text} />
                                </ListItem>
                            </a>
                            :
                            <ListItem button key={text}>
                            <ListItemIcon>
                              {
                                index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                              }
                            </ListItemIcon>
                            <ListItemText className="link-font" primary={text} />
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
                  <style>
                    {
                      `
                        .link-font{
                          font-family: 'PT Sans'
                        }

                        .link-fontH  {
                          font-family: 'PT Sans';
                          color: #5D6467;
                        }

                        .MuiTypography-body1 {
                          font-family: PT Sans;
                        }

                        .activeLinkHover:hover{
                          background-color: #F25A29;
                        }

                        .inactiveLinkHover:hover{
                          background-color: #5D6467;
                        }

                        .MuiButton-root:hover {
                          background-color: #FF5E14;
                        }

                        .modalMobile{
                          position: relative;
                        }
                      `
                    }
                  </style>
              </div>
            </>
          ) : <></>}

          {isMatch? (
            <>
              <Modal
                  aria-labelledby="transition-modal-title"
                  aria-describedby="transition-modal-description"
                  className={clsx(classes.modal)}
                  open={open2}
                  onClose={handleClose2}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                  timeout: 500,
                  }}
              >
                  <Fade in={open2}>
                  <div className={clsx(classes.paper, "modalMobile")}>
                      <h2 id="transition-modal-title" style={{textAlign: "center"}}>Whatsapp Delivery</h2>
                      <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose2}>
                              <img src="Images/CartCloseIcon.png" alt="closemodal" />
                      </Link>
                      <Grid container direction="row" spacing={1} className={classes.root} alignItems="center">
                          <Grid item xs={12}>
                          <Typography style={{textAlign: "center"}}>
                            We provide both errand services and package delivery.<br />
                            Click continue to contact us on whatsapp.
                          </Typography>
                          </Grid><br />
                          <Grid item xs={12} sm={12} >
                            <a href="http://wa.me/18767735015" target="_blank" rel="nofollow noreferrer" style={{textDecoration: "none"}}>  
                              <Button size="small"  fullWidth={true} className={`${classes.ButtonMobile} ${classes.btnfonts}`} onClick={() => handleOpen2()} type="button">
                                Continue 
                              </Button>
                            </a>
                          </Grid>
                      </Grid>
                  </div>
                  </Fade>
              </Modal>
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
                      {['Overview', 'Food Delivery', 'Errands Solution', 'Uship', "Sally's Pantry", 'Orders'].map((text, index) => (
                          referralPath === "/Dashboard" && text === "Overview" ?
                            <ListItem button key={text} className={clsx(classes.activeItem, "activeLinkHover")}>
                              <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          (referralPath === "/FoodDelivery" || referralPath === "/Restaurants" || referralPath === "/Menu" || referralPath === "/RestaurantItem")  && text === "Food Delivery" ?
                            <ListItem button key={text} className={classes.activeItem2}>
                              <ListItemIcon className={classes.activeIcon2}>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          referralPath === "/PackageDelivery" && text === "Errands Solution" ?
                            <ListItem button key={text} className={classes.activeItem}>
                              <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          (referralPath === "/CargoAndFreight" || referralPath === "/Rates") && text === "Uship" ?
                            <ListItem button key={text} className={classes.activeItem}>
                              <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                              </ListItemIcon>
                              <ListItemText className="link-font" primary={text} />
                            </ListItem>
                          :
                          referralPath === "/OrderHistory" && text === "Orders" ?
                            <Link to="/OrdersHistory" className={classes.inactiveItemLink}>
                              <ListItem button key={text} className={classes.activeItem}>
                                <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Overview" ?
                            <Link to="/Dashboard" style={{color: "#5D6467"}} className={classes.inactiveItemLink}>
                              <ListItem button key={text}>
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-font" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Orders" ?
                            userInfo.email !== null && userInfo.email !== "" && userInfo.email !== undefined?
                              <Link to="/OrderHistory" className={classes.inactiveItemLink}>
                                <ListItem button key={text} style={{paddingLeft: "12px"}}>
                                    <ListItemIcon>
                                      {
                                        index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                        index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                        index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                        index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                        index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                        index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                      }
                                    </ListItemIcon>
                                    <ListItemText className="link-font" primary={text} />
                                </ListItem>
                              </Link>
                              :
                              <></>
                          :
                          text === "Food Delivery" ?
                            <Link to="/Restaurants" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                              <ListItem button key={text}>
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-font" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Errands Solution" ?
                            <ListItem button key={text} onClick={handleOpen2}>
                                <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText className="link-fontH" primary={text} />
                            </ListItem>
                          :
                          text === "Uship" ?
                            <Link to="/CargoAndFreight" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                              <ListItem button key={text} >
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </Link>
                          :
                          text === "Sally's Pantry" ?
                          <a href='https://sallyspantry.com/' target="_blank" className={clsx(classes.inactiveItemLink, "inactiveLinkHover")} title="Sally's Pantry">
                              <ListItem button key={text} >
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-fontH" primary={text} />
                              </ListItem>
                            </a>
                          :
                          text !== "Overview"?
                            <ListItem button key={text} style={{marginTop: "5%"}}>
                                <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                                </ListItemIcon>
                                <ListItemText className="link-font" primary={text} />
                            </ListItem>
                        :
                          <ListItem button key={text} style={{paddingLeft: "12px"}}>
                            <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/GroupSquareIcon.png" alt="square icon"/> :
                                      index === 1 ? <img src="Images/BlackFoodDeliveryService.png" alt="Food icon"/> : 
                                      index === 2 ? <img src="Images/BlackUShip.png" alt="truck icon"/> : 
                                      index === 3 ? <img src="Images/blacktruckIconImage.png" alt="BlackMarket icon"/> :
                                      index === 4 ? <img src="Images/BackMarketPlaceIcon.png" alt="BlackMarket icon"/> :
                                      index === 5 ? <HistoryRounded style={{width: "36px", height: "38px"}}  /> : <MailIcon />
                                    }
                            </ListItemIcon>
                            <ListItemText className="link-font" primary={text} />
                          </ListItem>
                      ))}
                      </List>
                      <Divider />
                      <List>
                          {userInfo.fullName !== null && userInfo.fullName !== "" && userInfo.fullName !== undefined?
                              ['Settings', 'Logout'].map((text, index) => (
                                  text === 'Logout'?
                                  <a href="/" onClick={handleLogout} className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                                    <ListItem button key={text} >
                                      <ListItemIcon>
                                        {
                                          index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                          index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                        }
                                      </ListItemIcon>
                                      <ListItemText className="link-fontH" primary={text} />
                                    </ListItem>
                                  </a>
                                  :
                                  <ListItem button key={text}>
                                  <ListItemIcon>
                                    {
                                      index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                      index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                    }
                                  </ListItemIcon>
                                  <ListItemText className="link-font" primary={text} />
                                  </ListItem>
                              )) :
                              ['Settings', 'Login'].map((text, index) => (
                                text === 'Login'?
                                <a href="/Login" onClick={handleLogin} className={clsx(classes.inactiveItemLink, "inactiveLinkHover")}>
                                  <ListItem button key={text}>
                                    <ListItemIcon>
                                      {
                                        index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                        index === 1 ? <img src="Images/Logout.png" className={classes.loginIconStyle} alt="BlackMarket icon"/> : <MailIcon />
                                      }
                                    </ListItemIcon>
                                    <ListItemText className="link-fontH" primary={text} />
                                    </ListItem>
                                </a>
                                :
                                <ListItem button key={text}>
                                <ListItemIcon>
                                  {
                                    index === 0 ? <img src="Images/Setting.png" alt="BlackMarket icon"/> :
                                    index === 1 ? <img src="Images/Logout.png" alt="BlackMarket icon"/> : <MailIcon />
                                  }
                                </ListItemIcon>
                                <ListItemText className="link-font" primary={text} />
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
                  <style>
                    {
                      `
                        .link-font{
                          font-family: 'PT Sans'
                        }

                        .link-fontH  {
                          font-family: 'PT Sans';
                          color: #5D6467;
                        }

                        .MuiTypography-body1 {
                          font-family: PT Sans;
                        }

                        .activeLinkHover:hover{
                          background-color: #F25A29;
                        }

                        .inactiveLinkHover:hover{
                          background-color: #5D6467;
                        }

                        .MuiButton-root:hover {
                          background-color: #FF5E14;
                        }

                        @media only screen and (max-height: 679px) {
                          .modalMobile{
                              max-height: 590px;
                              overflow-x: hidden;
                              overflow-y: auto;
                          }
                        }

                        @media only screen and (max-height: 600px) {
                            .modalMobile{
                                max-height: 500px;
                                overflow-x: hidden;
                                overflow-y: auto;
                            }
                        }

                        @media only screen and (max-height: 560px) {
                            .modalMobile{
                                max-height: 490px;
                                overflow-x: hidden;
                                overflow-y: auto;
                            }
                        }

                        .modalMobile{
                          position: relative;
                        }
                      `
                    }
                  </style>
              </div>
            </>
          ) : <></>}

        </>
    )
}
