import { useAppData } from "../Context/AppDataContext";
import { HeaderLogo } from "./HeaderLogo";
import React, { useEffect } from "react";
import { useHistory, Link as RouterLink } from "react-router-dom";
import { roleHomeRoute } from "../utils/roleHomeRoute";
import {
  useMediaQuery,
  useTheme,
  Typography,
  AppBar,
  Toolbar,
  Theme,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  ListItemText,
  Grid,
  Fade,
  Backdrop,
  Modal,
  Box,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import clsx from "clsx";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import HomeRounded from "@mui/icons-material/HomeRounded";
import InfoRounded from "@mui/icons-material/InfoRounded";
import ContactMailRounded from "@mui/icons-material/ContactMailRounded";
import HelpRounded from "@mui/icons-material/HelpRounded";
import RoomServiceRounded from "@mui/icons-material/RoomServiceRounded";
import MailIcon from "@mui/icons-material/Mail";
import { useSubscription } from "@apollo/client";
import { ORDERS_SUBSCRIPTION } from "../GraphQL/Subscriptions";
import { Link } from "react-router-dom";

// interface State {
//   genralLocation: string;
// }

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "& .MuiInputBase-root": {
        color: "#9B9B9B",
        borderColor: "#EEE",
        border: "0.1px solid",
        borderRadius: "25px",
      },
      "& .MuiSelect-select:$focus": {
        backgroundColor: "inherit",
        color: "#9B9B9B",
      },
      "& .MuiFormLabel-root": {
        fontWeight: 700,
        fontSize: "1.2rem",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#9B9B9B",
      },
    },
    appbar: {
      // position: "fixed",
      backgroundColor: "#FFFFFF",
    },
    logoArea: {
      // flex: "auto",
    },
    logo: {
      height: 50.49015808105469,
      width: 147,
    },
    btn: {
      borderRadius: "50px",
      fontFamily: "PT Sans",
      marginRight: "15px",
    },
    btn2: {
      borderRadius: "50px",
      fontFamily: "PT Sans",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    Typo1: {
      fontFamily: "Open Sans",
      fontWeight: 600,
      fontSize: 16,
      fontStyle: "normal",
      lineHeight: "132.69%",
      color: "#000000",
      marginRight: 0,
      flex: "none",
    },
    icons: {
      fill: "#F7B614",
      paddingRight: 6,
      paddingTop: 7,
    },
    mainContainer: {
      margin: 0,
      padding: 0,
    },
    mobileGrid: {
      textAlign: "center",
    },
    desktopGrid: {
      textAlign: "end",
    },
    mobileGridContainer: {
      justifyContent: "space-evenly",
    },
    desktopGridContainer: {
      display: "flex",
      justifyContent: "space-evenly",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginLeft: "0px",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #FF5E14",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minWidth: "34%",
      maxWidth: "400px",
      borderRadius: "50px",
      borderColor: theme.palette.primary.light,
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    toolbar: theme.mixins.toolbar,
    menuItem: {
      color: "#444444",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      marginRight: "15px",
    },
    menuItemPrimary: {
      color: "#F7B614",
      fontFamily: "Inter",
      fontStyle: "normal",
      fontWeight: 600,
      fontSize: "16px",
      lineHeight: "19px",
      marginRight: "15px",
    },
    menuPrimaryCircle: {
      position: "absolute",
      width: "10px",
      height: "10px",
      backgroundColor: "#F7B614",
      bottom: "-7px",
      borderRadius: "25px",
    },
    linkBtn: {
      textDecoration: "none",
      color: "#1D2635",
    },
    cartIcon: {
      position: "absolute",
      top: 18,
      right: 10,
    },
  }),
);

type Anchor = "top" | "bottom" | "right";

const headersData = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "What We Do",
    href: "/Services",
  },
  // {
  //   label: "FAQ'S",
  //   href: "/#",
  // },
  // {
  //   label: "How it works",
  //   href: "/HIW",
  // },
  {
    label: "Contact Us",
    href: "/ContactUs",
  },
];

export const Header2: React.FC = function Header2() {
  var history = useHistory();
  var location = history.location;
  var referralPath = location.pathname;
  var { value } = useAppData();
  var {
    orders,
    refreshingOrderTables,
    getPaySettingsData,
    paySettings,
    currentUser,
    userInfo,
    userRolef,
    loggedIn,
    loading,
  } = value;
  const isSignedIn =
    Boolean(currentUser) ||
    Boolean(loggedIn) ||
    Boolean(userInfo?.email);
  const accountHref = roleHomeRoute(userRolef);
  const accountLabel = "Dashboard";
  const OPS_ROLES = new Set(["Admin", "Urged_Staff", "Rider"]);
  const hideMarketingOnHome =
    referralPath === "/" &&
    (OPS_ROLES.has(userRolef) ||
      (Boolean(currentUser) &&
        (loading || !userRolef || userRolef === "")));
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  // AddGeneralLocation, serviceWorkerUpdated, serviceWorkerRegistration

  //Subscriptions
  const { data } = useSubscription(ORDERS_SUBSCRIPTION);
  const classes = useStyles();

  //Breakpoints
  const theme = useTheme();

  //State
  //const [open, setOpen] = React.useState(false);
  //var [error, setError] = React.useState('');
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  //Media Query
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //const isMaatchMedium = useMediaQuery(theme.breakpoints.down('md'));

  // const [values, setValues] = React.useState<State>({
  //   genralLocation: 'Select Location',
  // });

  //const isServiceWorkerUpdated  = serviceWorkerUpdated;

  useEffect(
    function () {
      // if(generalLocation === undefined){
      //   setOpen(true);
      // }else{
      //   setOpen(false);
      // }
      try {
        //Subscribe to order data
        if (value.userRolef !== undefined) {
          if (value.userRolef === "Admin" || value.userRolef === "Urged_Staff") {
            if (data !== undefined) {
              //console.log(data)
              var OrdersNew = [] as Object[];
              orders.map((item) => OrdersNew.push(item));
              OrdersNew.push(data.orderCreated);
              refreshingOrderTables(value, OrdersNew).then(() => {});
            }
          }
        }

        if (paySettings !== undefined) {
          //console.log(paySettings.badWeather);
          if (paySettings.badWeather) {
            if (value.userRolef === "" || value.userRolef === "Customer") {
              setTimeout(() => {
                setOpen2(true);
              }, 2000);
            } else {
              setOpen2(false);
            }
          }
          if (paySettings.holiday) {
            if (value.userRolef === "" || value.userRolef === "Customer") {
              setTimeout(() => {
                setOpen3(true);
              }, 2000);
            } else {
              setOpen3(false);
            }
          }
        } else {
          getPaySettingsData(value).then(() => {
            return;
          });
        }

      } catch (err) {
        //console.log(err);
      }
      // react-hooks/exhaustive-deps
    },
    [value.userRolef, data, paySettings],
  );

  // const handleChange = (event) => {
  //   try{
  //     //setError('');
  //     if(event.target.value !== "Select Location"){
  //       setValues({...values,[event.target.name]:event.target.value});
  //       //AddGeneralLocation(value, event.target.value, "");
  //     }else{
  //       //setError('Please Select Location');
  //     }
  //   }catch(err){
  //     //console.log(err);
  //   }
  // };

  // const updateServiceWorker = () => {
  //   const registrationWaiting = serviceWorkerRegistration.waiting;
  //   if (registrationWaiting) {
  //     registrationWaiting.postMessage({ type: 'SKIP_WAITING' });
  //     registrationWaiting.addEventListener('statechange', e => {
  //       if (e.target.state === 'activated') {
  //         window.location.reload();
  //       }
  //     });
  //   }
  // }

  // const handleOpen = (item) => {
  //   //setOpen(true);
  // };

  const handleClose = () => {
    setOpen2(false);
  };

  const handleClose3 = () => {
    setOpen3(false);
  };

  if (
    hideMarketingOnHome ||
    (referralPath !== "/" &&
      referralPath.toLowerCase() !== "/services" &&
      referralPath.toLowerCase() !== "/contactus" &&
      referralPath.toLowerCase() !== "/processpaymentresult")
  ) {
    return (
      <>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open2}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open2}>
            <div
              className={clsx(classes.paper, "modalMobile")}
              style={{ position: "relative" }}
            >
              <h3
                id="transition-modal-title"
                style={{ textAlign: "center", color: "#F7B614" }}
              ></h3>
              <Link
                to={referralPath}
                className={classes.cartIcon}
                onClick={handleClose}
              >
                <img src="Images/CartCloseIcon.png" alt="closeweather" />
              </Link>
              <br />
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.root}
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <form autoComplete="off">
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        className={classes.root}
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <img
                            src="Images/ClosedWeather.webp"
                            alt="closeweather"
                            width={"100%"}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open3}
          onClose={handleClose3}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open3}>
            <div
              className={clsx(classes.paper, "modalMobile")}
              style={{ position: "relative" }}
            >
              <h3
                id="transition-modal-title"
                style={{ textAlign: "center", color: "#F7B614" }}
              ></h3>
              <Link
                to={referralPath}
                className={classes.cartIcon}
                onClick={handleClose3}
              >
                <img src="Images/CartCloseIcon.png" alt="closeweather" />
              </Link>
              <br />
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.root}
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <form autoComplete="off">
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        className={classes.root}
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <img
                            src="Images/ClosedHoliday.jpg"
                            alt="closeholiday"
                            width={"100%"}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
      </>
    );
  }

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {headersData.map(({ label, href }, index) => {
          return referralPath === "/" && href === "/" ? (
            <ListItem button key={index}>
              <ListItemIcon>
                <HomeRounded color="primary" />
              </ListItemIcon>
              <ListItemText style={{ color: "#F7B614" }} primary={label} />
            </ListItem>
          ) : referralPath === "/Services" && href === "/Services" ? (
            <ListItem button key={index}>
              <ListItemIcon>
                <RoomServiceRounded color="primary" />
              </ListItemIcon>
              <ListItemText style={{ color: "#F7B614" }} primary={label} />
            </ListItem>
          ) : referralPath === "/HowItWorks" && href === "/HowItWorks" ? (
            <ListItem button key={index}>
              <ListItemIcon>
                <HelpRounded color="primary" />
              </ListItemIcon>
              <ListItemText style={{ color: "#F7B614" }} primary={label} />
            </ListItem>
          ) : referralPath === "/HowItWorks" && href === "/HowItWorks" ? (
            <ListItem button key={index}>
              <ListItemIcon>
                <InfoRounded color="primary" />
              </ListItemIcon>
              <ListItemText style={{ color: "#F7B614" }} primary={label} />
            </ListItem>
          ) : referralPath === "/ContactUs" && href === "/ContactUs" ? (
            <ListItem button key={index}>
              <ListItemIcon>
                <ContactMailRounded color="primary" />
              </ListItemIcon>
              <ListItemText style={{ color: "#F7B614" }} primary={label} />
            </ListItem>
          ) : label === "Home" ? (
            <a
              href={href}
              key={index}
              title="Place Order"
              className={classes.linkBtn}
            >
              <ListItem button>
                <ListItemIcon>
                  <HomeRounded style={{ color: "#5D6467;" }} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </a>
          ) : label === "What We Do" ? (
            <a
              href={href}
              key={index}
              title="Place Order"
              className={classes.linkBtn}
            >
              <ListItem button>
                <ListItemIcon>
                  <RoomServiceRounded />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </a>
          ) : label === "FAQ'S" ? (
            <a
              href={href}
              key={index}
              title="Place Order"
              className={classes.linkBtn}
            >
              <ListItem button>
                <ListItemIcon>
                  <HelpRounded style={{ color: "#5D6467;" }} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </a>
          ) : label === "How it works" ? (
            <a
              href={href}
              key={index}
              title="Place Order"
              className={classes.linkBtn}
            >
              <ListItem button>
                <ListItemIcon>
                  <InfoRounded style={{ color: "#5D6467;" }} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </a>
          ) : label === "Contact Us" ? (
            <a
              href={href}
              key={index}
              title="Place Order"
              className={classes.linkBtn}
            >
              <ListItem button>
                <ListItemIcon>
                  <ContactMailRounded style={{ color: "#5D6467;" }} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItem>
            </a>
          ) : (
            <ListItem button key={label}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={label} />
            </ListItem>
          );
        })}
      </List>
      <Divider />
      <List>
        <ListItem button key="Place Order">
          <a
            href="/Restaurants"
            key={"Place Order"}
            title="Place Order"
            className={classes.linkBtn}
          >
            <Button className={classes.btn} variant="contained" color="primary">
              Place an Order
            </Button>
          </a>
        </ListItem>
        <ListItem button key="sign in">
          {isSignedIn ? (
            <a href={accountHref} title={accountLabel} className={classes.linkBtn}>
              <Button className={classes.btn2} variant="outlined" color="primary">
                {accountLabel}
              </Button>
            </a>
          ) : (
            <a href="/Login" title="Login" className={classes.linkBtn}>
              <Button className={classes.btn2} variant="outlined" color="primary">
                Sign In
              </Button>
            </a>
          )}
        </ListItem>
      </List>
    </div>
  );
  if (referralPath.toLowerCase() !== "/processpaymentresult") {
    return (
      <>
        <AppBar elevation={0} position="relative" className={classes.appbar}>
          <Toolbar>
            <HeaderLogo />
            {isMatch ? (
              <>
                <div style={{ position: "absolute", right: 10 }}>
                  {(["right"] as Anchor[]).map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button onClick={toggleDrawer(anchor, true)}>
                        <img
                          src="Images/MobileMenuIcon.png"
                          alt="MobileMenuIcon"
                        />
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))}
                </div>
              </>
            ) : (
              <>
                <Box component="nav" sx={{ textAlign: "right", width: "100%" }}>
                  {headersData.map(({ label, href }) => {
                    return referralPath === "/" && href === "/" ? (
                      <Button
                        {...{
                          key: label,
                          className: classes.menuItemPrimary,
                          to: href,
                          component: RouterLink,
                        }}
                      >
                        {label}
                        <div className={classes.menuPrimaryCircle}></div>
                      </Button>
                    ) : referralPath === "/Services" && href === "/Services" ? (
                      <Button
                        {...{
                          key: label,
                          className: classes.menuItemPrimary,
                          to: href,
                          component: RouterLink,
                        }}
                      >
                        {label}
                        <div className={classes.menuPrimaryCircle}></div>
                      </Button>
                    ) : referralPath === "/ContactUs" &&
                      href === "/ContactUs" ? (
                      <Button
                        {...{
                          key: label,
                          className: classes.menuItemPrimary,
                          to: href,
                          component: RouterLink,
                        }}
                      >
                        {label}
                        <div className={classes.menuPrimaryCircle}></div>
                      </Button>
                    ) : (
                      <Button
                        {...{
                          key: label,
                          className: classes.menuItem,
                          to: href,
                          component: RouterLink,
                        }}
                      >
                        {label}
                      </Button>
                    );
                  })}
                  <a
                    href="/Restaurants"
                    title="Place Order"
                    className={classes.linkBtn}
                  >
                    <Button
                      className={classes.btn}
                      variant="contained"
                      color="primary"
                    >
                      Place an Order
                    </Button>
                  </a>
                  {isSignedIn ? (
                    <a
                      href={accountHref}
                      title={accountLabel}
                      className={classes.linkBtn}
                    >
                      <Button
                        className={classes.btn2}
                        variant="outlined"
                        color="primary"
                      >
                        {accountLabel}
                      </Button>
                    </a>
                  ) : (
                    <a href="/Login" title="Login" className={classes.linkBtn}>
                      <Button
                        className={classes.btn2}
                        variant="outlined"
                        color="primary"
                      >
                        Sign In
                      </Button>
                    </a>
                  )}
                </Box>
              </>
            )}
          </Toolbar>
        </AppBar>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open2}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open2}>
            <div
              className={clsx(classes.paper, "modalMobile")}
              style={{ position: "relative" }}
            >
              <h3
                id="transition-modal-title"
                style={{ textAlign: "center", color: "#F7B614" }}
              ></h3>
              <Link
                to={referralPath}
                className={classes.cartIcon}
                onClick={handleClose}
              >
                <img src="Images/CartCloseIcon.png" alt="closemodal" />
              </Link>
              <br />
              <Grid
                container
                direction="row"
                spacing={1}
                className={classes.root}
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Grid item xs={12}>
                    <form autoComplete="off">
                      <Grid
                        container
                        direction="row"
                        spacing={1}
                        className={classes.root}
                        alignItems="center"
                      >
                        <Grid item xs={12}>
                          <img
                            src="Images/ClosedWeather.webp"
                            alt="closeweather"
                            width={"100%"}
                          />
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </Fade>
        </Modal>
        {/* {isServiceWorkerUpdated && (
              <Alert
                severity="info"
              >
                There is a new version available.
                <Button type="button" onClick={updateServiceWorker}>
                  Update
                </Button>
              </Alert>
            )} */}
      </>
    );
  }
  return <></>;
};
