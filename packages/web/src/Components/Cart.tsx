import { useAppData } from '../Context/AppDataContext';
import { Badge , makeStyles, createStyles, Theme, Popper, Paper, Grow, MenuList, ClickAwayListener, MenuItem, Grid, Typography, Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import clsx from 'clsx';
import { PlayArrowRounded, ShoppingCartRounded } from "@material-ui/icons/";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        noti: {
            color: "#FF5E14"
        },
        menu: {
            border: "3px solid",
            borderColor: theme.palette.primary.light,
            borderRadius: "10px",
            top: "12px !important",
            left: "-11% !important",
            minWidth: "290px",
            maxWidth: "310px",
            zIndex: 1
        },
        img: {
            width: "48px",
            height: "48px",
            borderRadius: "5px"
        },
        cartIcon: {
            position: "absolute",
            top: 0,
            right: 10
        },
        cartTitle: {
            fontWeight: 700,
            paddingLeft: "16px",
            paddingTop: "8px"
        },
        seeMore: {
            paddingLeft: "16px",
            color: theme.palette.primary.light,
            fontWeight: "bolder"
        },
        Button: {
            backgroundColor: theme.palette.primary.light,
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "80%",
            borderRadius: 36
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        link:{
            textDecoration: "none"
        }
    }),
);

export const Cart: React.FC = function Cart() {
    const classes = useStyles();
    var history = useHistory();
    
    var { value }  = useAppData();
    var { cartItems } = value;

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    
    const handleClose = (event: React.MouseEvent<EventTarget>) => {
      if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
        return;
      }

      setOpen(false);
    };

    const handleCheckout =(event) =>{
        //setOpen(false);
        console.log("here");
        history.push("/Checkout");
    }
    
    function handleListKeyDown(event: React.KeyboardEvent) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
    
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current!.focus();
      }

      prevOpen.current = open;
    }, [open]);  

    
      
    return (
        <>
            <Link 
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                <Badge badgeContent={cartItems.length} color="primary">
                    <ShoppingCartRounded className={classes.noti} />
                </Badge>
            </Link>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} className={classes.menu} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <Grid container direction="row" spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h5" className={classes.cartTitle}>Food Cart</Typography>
                                <Link className={classes.cartIcon} onClick={handleClose}>
                                    <img src="Images/CartCloseIcon.png" alt="closecart" />
                                </Link>
                                {cartItems.length > 0 ?
                                <Link to="/Checkout" className={classes.link}>
                                    <Typography className={classes.seeMore}>See More <PlayArrowRounded /></Typography>
                                </Link>
                                :
                                <></>
                                }
                            </Grid>
                            <Grid item xs={12}>
                                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    {cartItems.length > 0 ?
                                        cartItems.map((item, idex) => (
                                            <MenuItem onClick={handleClose}>
                                                <Grid item xs={8}>
                                                    <Grid container direction="row" spacing={1}>
                                                        <Grid item xs={6}>
                                                            <img className={classes.img} src={item.imageName} alt="meal display"/>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <Typography>{item.itemName}</Typography>
                                                            <p style={{display: "flex"}}>
                                                            <Typography>x1</Typography>&nbsp; &nbsp;&nbsp;
                                                            <Typography><span>$</span>{ parseFloat(item.itemCost).toFixed(2)}</Typography>
                                                            </p>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </MenuItem>
                                        ))
                                    :
                                        <Typography style={{paddingLeft: "16px" }}>Cart is empty</Typography>
                                    }
                                </MenuList>
                            </Grid>
                            {cartItems.length > 0 ?
                                <Grid item xs={12} style={{textAlign: "center"}}>
                                    <Link onClick={handleCheckout} className={classes.link}>
                                        <Button size="large"  fullWidth={true} className={clsx(classes.Button,classes.btnfonts)}   type="button">
                                                Checkout 
                                        </Button>
                                    </Link>
                                </Grid>
                            :
                                <></>
                            }
                        </Grid>

                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    )
}