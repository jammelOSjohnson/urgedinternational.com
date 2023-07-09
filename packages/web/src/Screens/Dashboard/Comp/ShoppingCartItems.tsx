import {
  Avatar,
  Grid,
  makeStyles,
  createStyles,
  Typography,
  Theme,
  CardMedia,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@material-ui/core";
import { useAppData } from "../../../Context/AppDataContext";
import React from "react";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { CloseRounded } from "@material-ui/icons";
const PaymentOptionsForm = React.lazy(() => import("./PaymentOptionsForm"));

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      width: "100%",
    },
    details: {
      display: "flex",
      flexDirection: "row",
    },
    removeButton: {
      backgroundColor: "#F6F6F6 !important",
      width: "5px",
      height: "5px",
    },
    addButton: {
      backgroundColor: "#FF5E14",
      width: "5px",
      height: "5px",
    },
    divider: {
      height: "30px",
      width: "20px",
      backgroundColor: "#FF5E14",
    },
    packageRoot: {
      padding: "0% 0px 2% 0px",
    },
    category: {
      fontWeight: "bold",
    },
    image: {
      maxWidth: "102px",
      maxHeight: "81px",
      marginLeft: "12px",
    },
    card: {
      display: "block",
      background: "#FFFFFF",
      border: "1.14582px solid #F3F3F3",
      boxSizing: "border-box",
      boxShadow: "0px 4.58327px 17.1873px rgba(0, 0, 0, 0.11)",
      borderRadius: "12px",
      paddingLeft: "20px",
      paddingTop: "10px",
    },
    cardHeading: {
      fontWeight: "bold",
      fontFamily: "PT Sans",
    },
    cardBody1: {
      marginTop: "10px",
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "12px",
    },
    cardBody2: {
      marginTop: "10px",
      fontFamily: "Roboto",
      fontSize: 14,
      lineHeight: "22px",
      fontWeight: "bold",
      // fontFamily: "PT Sans"
    },
    cardHeader: {
      background: "#FFF",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    },
    cardContent: {
      flexGrow: 1,
      paddingTop: 0,
    },
    close: {
      background: theme.palette.primary.light,
    },
    avatar: {
      background: theme.palette.primary.main,
    },
  })
);

type Props = {
  Fail: boolean;
};

export const ShoppingCartItems: React.FC<Props> = function ShoppingCartItems({
  Fail,
}) {
  const classes = useStyles();
  var { value } = useAppData();
  var { cartItems, removeCartItem, addItemToCart } = value;

  // eslint-disable-next-line

  // const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  // const handleReset = () => {
  //     setActiveStep(0);
  // };

  const handleRemove = async (index) => {
    try {
      await removeCartItem(index, value, cartItems);
    } catch (err) {
      //console.log(err)
    }
  };

  const increment = async (index) => {
    try {
      //console.log(cartItems[index].quantity);
      if (cartItems[index].quantity >= 1) {
        var item = cartItems[index];
        item.quantity = item.quantity + 1;
        var payload = value;
        await addItemToCart(payload, item, index).then(() => {});
      }
    } catch (err) {
      //console.log(err);
    }
  };

  const decrement = async (index) => {
    try {
      if (cartItems[index].quantity > 1) {
        var item = cartItems[index];
        item.quantity = item.quantity - 1;

        var payload = value;
        await addItemToCart(payload, item, index).then(() => {});
      }
    } catch (err) {
      //console.log(err);
    }
  };

  return (
    <>
      <Grid
        container
        direction="row"
        spacing={3}
        className={classes.packageRoot}
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={3} container spacing={1}>
          <Grid item xs={10} md={10}>
            <Typography variant="subtitle1" className={classes.category}>
              Shopping Cart
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        spacing={1}
        className={classes.packageRoot}
        alignItems="flex-start"
      >
        {cartItems.length > 0 ? (
          <>
            <Grid item xs={12} md={7} style={{ overflowY: "scroll" }}>
              {cartItems.map((order, index) =>
                index !== cartItems.length - 1 ? (
                  <>
                    <Card
                      style={{ marginBottom: "12px" }}
                      className={classes.card}
                      key={index}
                    >
                      <div style={{ flex: "0 0 100%", flexFlow: "row" }}>
                        <CardHeader
                          //className={classes.avatar}
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            >
                              {index + 1}.
                            </Avatar>
                          }
                          action={
                            <>
                              {/* <IconButton className={classes.removeButton} onClick={() => decrement(index)}>
                                        <RemoveIcon />
                                      </IconButton>
                                      <IconButton className={classes.addButton} onClick={() => increment(index)}>
                                          <AddIcon />
                                      </IconButton> */}
                              <IconButton
                                aria-label="settings"
                                onClick={() => handleRemove(index)}
                              >
                                <Avatar
                                  aria-label="recipe"
                                  className={classes.close}
                                >
                                  <CloseRounded />
                                </Avatar>
                              </IconButton>
                            </>
                          }
                          title={
                            <>
                              <IconButton
                                className={classes.removeButton}
                                onClick={() => decrement(index)}
                              >
                                <RemoveIcon style={{ color: "#C4C4C4" }} />
                              </IconButton>
                              &nbsp;{cartItems[index].quantity}&nbsp;
                              <IconButton
                                className={classes.addButton}
                                onClick={() => increment(index)}
                              >
                                <AddIcon style={{ color: "#FFFFFF" }} />
                              </IconButton>
                            </>
                          }
                          className={classes.cardHeader}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <CardMedia>
                          {/* eslint-disable-next-line */}
                          <img
                            src={window.location.origin + "/" + order.imageName}
                            className={classes.image}
                            alt="Package Image"
                          ></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                          <Typography className={classes.cardHeading}>
                            {order.itemName}
                          </Typography>
                          <Typography>{order.itemDescription}</Typography>
                          {order.side !== "" && order.side !== "Select Side" ? (
                            <Typography>Side: {order.side}</Typography>
                          ) : (
                            <></>
                          )}
                        </CardContent>
                      </div>
                    </Card>
                  </>
                ) : (
                  <>
                    <Card
                      style={{ marginBottom: "12px" }}
                      className={classes.card}
                      key={index}
                    >
                      <div style={{ flex: "0 0 100%", flexFlow: "row" }}>
                        <CardHeader
                          //className={classes.avatar}
                          avatar={
                            <Avatar
                              aria-label="recipe"
                              className={classes.avatar}
                            >
                              {index + 1}.
                            </Avatar>
                          }
                          action={
                            <>
                              {/* <IconButton className={classes.removeButton} onClick={() => decrement(index)}>
                                        <RemoveIcon />
                                      </IconButton>
                                      <IconButton className={classes.addButton} onClick={() => increment(index)}>
                                          <AddIcon />
                                      </IconButton> */}
                              <IconButton
                                aria-label="settings"
                                onClick={() => handleRemove(index)}
                              >
                                <Avatar
                                  aria-label="recipe"
                                  className={classes.close}
                                >
                                  <CloseRounded />
                                </Avatar>
                              </IconButton>
                            </>
                          }
                          title={
                            <>
                              <IconButton
                                className={classes.removeButton}
                                onClick={() => decrement(index)}
                              >
                                <RemoveIcon style={{ color: "#C4C4C4" }} />
                              </IconButton>
                              &nbsp;{cartItems[index].quantity}&nbsp;
                              <IconButton
                                className={classes.addButton}
                                onClick={() => increment(index)}
                              >
                                <AddIcon style={{ color: "#FFFFFF" }} />
                              </IconButton>
                            </>
                          }
                          className={classes.cardHeader}
                        />
                      </div>
                      <div style={{ display: "flex" }}>
                        <CardMedia>
                          {/* eslint-disable-next-line */}
                          <img
                            src={window.location.origin + "/" + order.imageName}
                            className={classes.image}
                            alt="Package Image"
                          ></img>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                          <Typography className={classes.cardHeading}>
                            {order.itemName}
                          </Typography>
                          <Typography>{order.itemDescription}</Typography>
                          {order.side !== "" && order.side !== "Select Side" ? (
                            <Typography>Side: {order.side}</Typography>
                          ) : (
                            <></>
                          )}
                        </CardContent>
                      </div>
                    </Card>
                  </>
                )
              )}
            </Grid>
            <Grid item xs={12} md={5}>
              <PaymentOptionsForm Fail={Fail} />
            </Grid>
          </>
        ) : (
          <>
            <Typography>No Items In Cart</Typography>
            <PaymentOptionsForm Fail={Fail} />
          </>
        )}
      </Grid>
      <style>
        {`
                  button:focus:not(:focus-visible) {
                    background-color: #FF5E14;
                  }
                `}
      </style>
    </>
  );
};
