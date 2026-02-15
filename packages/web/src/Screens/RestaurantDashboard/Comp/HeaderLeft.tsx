import React from "react";
import { Link } from "react-router-dom";
import { useAppData } from "../../../Context/AppDataContext";
import { useHistory } from "react-router-dom";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import HistoryRounded from "@mui/icons-material/HistoryRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import clsx from "clsx";
import {
  Typography,
  Theme,
  useMediaQuery,
  useTheme,
  Grid,
  IconButton,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

//import { useAppData } from '../../../Context/AppDataContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiInputBase-root": {
        color: "#9B9B9B ",
        borderColor: "#888888",
        border: "0.1px dotted",
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
      "& .MuiSwitch-colorSecondary.Mui-checked": {
        color: "#FFF",
      },
      "& .MuiSwitch-colorSecondary.Mui-checked + .MuiSwitch-track": {
        backgroundColor: "#76ff03",
      },
      "& .MuiSwitch-colorSecondary + .MuiSwitch-track": {
        backgroundColor: "#b2102f",
      },
    },
    links: {
      textDecoration: "none",
      color: "inherit",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
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
      marginRight: "auto",
    },
    activeItem2: {
      backgroundColor: "#FF5E14",
      color: "#FFFFFF",
      borderRadius: "50px",
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    activeIcon2: {
      color: "#FFFFFF",
    },
    closeIcon: {
      fontWeight: "bolder",
      color: theme.palette.primary.light,
      fontSize: "30px",
      zIndex: 700,
    },
    closeBtn: {
      position: "absolute",
      right: 5,
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
      display: "none",
    },
    callapsibleIconStyle: {
      right: 0,
      position: "absolute",
      transform: "rotate(180deg)",
      bottom: "-102%",
    },
  }),
);

type Anchor = "top" | "left" | "bottom" | "right";

export const HeaderLeft: React.FC = function HeaderLeft() {
  const classes = useStyles();
  const theme = useTheme();
  //var { value }  = useAppData();
  //, rider, fetchRiderInfo, udateRiderStatusInfo
  //var { userInfo } = value;
  //console.log(userInfo)
  //const [availability, setAvailability] = React.useState(rider !== undefined ? rider.isAvailable : false);

  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const isMatchMedium = useMediaQuery(theme.breakpoints.up("md"));
  var { value } = useAppData();
  var { logout, userInfo } = value;

  const [open1, setOpen1] = React.useState(false);

  var history = useHistory();
  var location = history.location;
  var referralPath = location.pathname;

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     //setAvailability(event.target.checked);
  //     udateRiderStatusInfo(value, userInfo._id, event.target.checked, rider.disabled );
  // }

  // useEffect(() => {
  //     if(rider === undefined && userInfo._id !== ""){
  //         //console.log(userInfo._id)
  //         fetchRiderInfo(value,userInfo._id);
  //     }else if(rider !== undefined){
  //         if(rider.isAvailable !== availability){
  //             setAvailability(rider.isAvailable)
  //         }
  //     }
  // }, [rider, userInfo._id])

  const handleDrawerOpen1 = () => {
    setOpen1(true);
  };

  const handleDrawerClose1 = () => {
    setOpen1(false);
  };

  const handleLogout = async (event) => {
    try {
      event.preventDefault();
      logout(value);
      setTimeout(() => {
        history.push("/Login");
      }, 3000);
    } catch {
      ////////console.log('Failed to logout.');
    }
  };

  const handleLogin = (event) => {
    try {
      event.preventDefault();
      history.push("/Login", { from: history.location.pathname });
    } catch {
      ////////console.log('Failed to logout.');
    }
  };

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
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={toggleDrawer(anchor, true)}
        edge="start"
        className={classes.closeBtn}
      >
        <CloseRounded className={classes.closeIcon} />
      </IconButton>
      <List>
        {["Overview", "Delivery Orders"].map((text, index) =>
          referralPath === "/RestaurantDashboard" && text === "Overview" ? (
            <ListItem button key={0} className={classes.activeItem}>
              <ListItemIcon>
                {index === 0 ? (
                  <img src="Images/GroupSquareIcon2.png" alt="square icon" />
                ) : index === 1 ? (
                  <img src="Images/blacktruckIconImage.png" alt="truck icon" />
                ) : index === 2 ? (
                  <img
                    src="Images/BackMarketPlaceIcon.png"
                    alt="BlackMarket icon"
                  />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ) : referralPath === "/ViewOrdersDetails" &&
            text === "Delivery Orders" ? (
            <ListItem button key={1} className={classes.activeItem}>
              <ListItemIcon>
                {index === 0 ? (
                  <img src="Images/GroupSquareIcon2.png" alt="square icon" />
                ) : index === 1 ? (
                  <img src="Images/blacktruckIconImage.png" alt="truck icon" />
                ) : index === 2 ? (
                  <img
                    src="Images/BackMarketPlaceIcon.png"
                    alt="BlackMarket icon"
                  />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ) : text === "Overview" ? (
            // <Link to="/AdminDashboard" className={classes.inactiveItemLink}>
            <ListItem button key={2}>
              <ListItemIcon>
                {index === 0 ? (
                  <img src="Images/GroupSquareIcon2.png" alt="square icon" />
                ) : index === 1 ? (
                  <img src="Images/blacktruckIconImage.png" alt="truck icon" />
                ) : index === 2 ? (
                  <img
                    src="Images/BackMarketPlaceIcon.png"
                    alt="BlackMarket icon"
                  />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ) : // </Link>
          text !== "Overview" ? (
            <ListItem button key={3} style={{ marginTop: "5%" }}>
              <ListItemIcon>
                {index === 0 ? (
                  <img src="Images/GroupSquareIcon2.png" alt="square icon" />
                ) : index === 1 ? (
                  <img src="Images/blacktruckIconImage.png" alt="truck icon" />
                ) : index === 2 ? (
                  <img
                    src="Images/BackMarketPlaceIcon.png"
                    alt="BlackMarket icon"
                  />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ) : (
            <ListItem button key={4}>
              <ListItemIcon>
                {index === 0 ? (
                  <img src="Images/GroupSquareIcon2.png" alt="square icon" />
                ) : index === 1 ? (
                  <img src="Images/blacktruckIconImage.png" alt="truck icon" />
                ) : index === 2 ? (
                  <img
                    src="Images/BackMarketPlaceIcon.png"
                    alt="BlackMarket icon"
                  />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ),
        )}
      </List>
      <Divider />
      <List>
        {userInfo.fullName !== null &&
        userInfo.fullName !== "" &&
        userInfo.fullName !== undefined
          ? ["Settings", "Logout"].map((text, index) =>
              text === "Logout" ? (
                <a
                  href="/"
                  onClick={handleLogout}
                  className={classes.inactiveItemLink}
                >
                  <ListItem button key={5}>
                    <ListItemIcon>
                      {index === 0 ? (
                        <img src="Images/Setting.png" alt="BlackMarket icon" />
                      ) : index === 1 ? (
                        <img src="Images/Logout.png" alt="BlackMarket icon" />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </a>
              ) : (
                <Link
                  to="/RestaurantProfile"
                  className={classes.inactiveItemLink}
                >
                  <ListItem button key={6}>
                    <ListItemIcon>
                      {index === 0 ? (
                        <img src="Images/Setting.png" alt="BlackMarket icon" />
                      ) : index === 1 ? (
                        <img src="Images/Logout.png" alt="BlackMarket icon" />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              ),
            )
          : ["Settings", "Login"].map((text, index) =>
              text === "Login" ? (
                <a
                  href="/Login"
                  onClick={handleLogin}
                  className={classes.inactiveItemLink}
                >
                  <ListItem button key={7}>
                    <ListItemIcon>
                      {index === 0 ? (
                        <img src="Images/Setting.png" alt="BlackMarket icon" />
                      ) : index === 1 ? (
                        <img
                          src="Images/Logout.png"
                          className={classes.loginIconStyle}
                          alt="BlackMarket icon"
                        />
                      ) : (
                        <MailIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </a>
              ) : (
                <ListItem button key={8}>
                  <ListItemIcon>
                    {index === 0 ? (
                      <img src="Images/Setting.png" alt="BlackMarket icon" />
                    ) : index === 1 ? (
                      <img src="Images/Logout.png" alt="BlackMarket icon" />
                    ) : (
                      <MailIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ),
            )}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen1}
          edge="start"
          className={clsx(classes.expandIconStyle, {
            [classes.hide]: open1,
          })}
        >
          <img
            src="Images/collapse_icon1.svg"
            style={{ width: "100%" }}
            alt="icon"
          />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerClose1}
          edge="start"
          className={clsx(classes.callapsibleIconStyle, {
            [classes.hide]: !open1,
          })}
        >
          <img
            src="Images/collapse_icon1.svg"
            style={{ width: "100%" }}
            alt="icon"
          />
        </IconButton>
      </List>
    </div>
  );

  return (
    <>
      {isMatchMedium ? (
        <Typography
          variant="h6"
          style={{ fontWeight: "bold", background: "transparent" }}
        >
          {/* <form>
                        <FormGroup row className={classes.root}>
                            <FormControlLabel
                                control={
                                <Switch
                                    checked={availability}
                                    onChange={handleChange}
                                    name="availability"
                                />
                                }
                                label={availability? "I'm Available" : "Not Available"}
                            />
                        </FormGroup>
                    </form> */}
          {referralPath === "/restaurantdashboard" ||
          referralPath === "/RestaurantDashboard" ? (
            <span>DASHBOARD</span>
          ) : referralPath === "/viewordersdetails" ||
            referralPath === "/ViewOrdersDetails" ? (
            <span style={{ color: "#FF5E14" }}>
              <ArrowBackRounded />{" "}
              <Link to="/RestaurantDashboard" className={classes.links}>
                RETURN
              </Link>
            </span>
          ) : referralPath === "/restaurantprofile" ||
            referralPath === "/RestaurantProfile" ? (
            <span style={{ color: "#FF5E14" }}>
              <ArrowBackRounded />{" "}
              <Link to="/RestaurantDashboard" className={classes.links}>
                RETURN
              </Link>
            </span>
          ) : referralPath === "/Restaurants" ||
            referralPath === "/restaurants" ? (
            <span>
              <PlayArrowRounded /> FOOD DELIVERY <PlayArrowRounded />{" "}
              RESTAURANTS
            </span>
          ) : (
            ""
          )}
        </Typography>
      ) : (
        <></>
      )}

      {isMatch ? (
        <>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={3}>
              <div style={{ marginTop: "1%", marginBottom: "1%" }}>
                {(["left"] as Anchor[]).map((anchor) => (
                  <React.Fragment key={anchor}>
                    <div style={{ display: "flex" }}>
                      <Button
                        style={{ zIndex: 2, position: "fixed" }}
                        onClick={toggleDrawer(anchor, true)}
                        className="mobileMenuToggle"
                      >
                        <img
                          src="Images/MobileMenuIcon.png"
                          style={{ marginTop: "10px" }}
                          alt="MobileMenuIcon"
                        ></img>
                      </Button>
                    </div>
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
            </Grid>
          </Grid>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default HeaderLeft;
