import { useAppData } from '../../../Context/AppDataContext';
import { FormControl, IconButton, InputAdornment, makeStyles, createStyles, OutlinedInput, Theme, useTheme, Modal, Backdrop, Fade } from '@material-ui/core';
import { SearchRounded } from '@material-ui/icons';
import { useHistory, Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import clsx from 'clsx';

interface restItemsArr {
    ImageName: string;
    ItemName: string;
    ItemDescription: string;
    ItemCost: number;
    MenuCategory: string;
    rest: Object[];
}

interface Props {
    color: string;
    backgroundColor: string;
    screen: string;
}

  
const useStyles = makeStyles((theme: Theme) => 
        createStyles({
          root: {
            display: 'flex',
            "& .MuiFormLabel-root": {
              color: "#4D4D4D"
            },
            color: "#4D4D4D",
            "& .MuiIconButton-root": {
                fontFamily: "PT Sans"
            },
            "& .MuiButtonBase-root": {
                fontFamily: "PT Sans"
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#4D4D4D"
            },
        },
        link: {
            textDecoration: "none",
            color: "inherit"
        },
        list: {
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
        },
        loginIconStyle: {
            transform: "rotate(180deg)",
        },
        closeIcon: {
            fontWeight: "bolder",
            color: theme.palette.primary.light,
            fontSize: "30px",
            zIndex: 700
        },
        closeBtn: {
            position: "absolute",
            right: 5
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
        },
        textBox: {
          width: "100%",
          borderColor: "#F3F3F3",
          backgroundColor: "#D8D8D8",
          borderRadius: "25px",
          fontFamily: "PT Sans"
          // border: "2px solid #ffffff"
        },
        textBoxMobile:{
            width: "100%",
            borderColor: "#F3F3F3",
            backgroundColor: "#D8D8D8",
            borderRadius: "25px",
            fontFamily: "PT Sans"
            // border: "2px solid #ffffff"
        },
        searchResult: { 
          textAlign: "left", 
          zIndex: 100, 
          position: "absolute", 
          backgroundColor: "#FFF", 
          width: "300px", 
          maxHeight: "400px", 
          overflowY: "scroll" 
        },
        searchResultMobile: { 
            textAlign: "left", 
            backgroundColor: "#FFF", 
            width: "auto", 
            maxHeight: "400px", 
            overflowY: "scroll" 
        },
        mobileSearchContainer: {
          position: 'fixed',
          top: '-3px',
          right: '46%',
        }
    }),
);

const PortalSearch: React.FC<Props> = function PortalSearch({color, backgroundColor, screen}) {
    const classes = useStyles();
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [restItems, setRestItems] = React.useState<restItemsArr[]>([]);
    var { value }  = useAppData();
    var { restaurants, viewMenuItems } = value;
    var history = useHistory();
    var location = history.location;
    var referralPath = location.pathname;

    const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClose2 = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    var handleSelectedRestaurant = async function(restaurantToView){
        var payload = value;
        let index = restaurants.indexOf(restaurantToView);
        // console.log("Index is");
        // console.log(index);
        payload.selectedRestaurant = index;
        payload.selectedRestaurantName = restaurantToView.FirstName;
        await viewMenuItems(payload).then(() => {
            //console.log("about to leave page")
            history.push("/Menu")
        })
    }

    var handleSelectedRestaurantItem = async function(restaurantToView){
        var payload = value;
        let index = restaurants.indexOf(restaurantToView.rest);
        let itemOBJ = {
          ImageName: restaurantToView.ImageName,
          ItemName: restaurantToView.ItemName,
          ItemDescription: restaurantToView.ItemDescription,
          ItemCost: restaurantToView.ItemCost,
          MenuCategory: restaurantToView.MenuCategory,
        }
        let itemIndex = null; 
        restaurants[index].MenuItems.map((item, index) => { 
          if(item.ItemName === itemOBJ.ItemName) {
            itemIndex = index; 
          }
        })
        // console.log("Item Index is");
        // console.log(itemIndex);
        // console.log("Index is");
        // console.log(index);
        // console.log(restaurantToView.rest.FirstName);
        payload.selectedRestaurant = index;
        payload.selectedRestaurantName = restaurantToView.rest.FirstName;
        payload.selectedMenuSearchItem = itemIndex;
        await viewMenuItems(payload).then(() => {
            //console.log("about to leave page")
            history.push("/RestaurantItem")
        })
    }

    useEffect(() => {
        if (restaurants.length > 0) {
          let itemArr = restItems;
          restaurants.map((val) => {
            val.MenuItems.map((item) => {
              itemArr.push({...item, rest: val});
              setRestItems(itemArr);
            })
          })
        }
    }, [restaurants])

    if (screen === "mobile") {
        return (
            <>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={clsx(classes.modal)}
                    open={open}
                    onClose={handleClose2}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <div className={clsx(classes.paper, "modalMobile")}>
                            <Link to={`${referralPath}`} className={classes.cartIcon} onClick={handleClose2}>
                            <img src="Images/CartCloseIcon.png" alt="closemodal" />
                            </Link>
                            <div style={{backgroundColor: backgroundColor, display: "flex"}}>
                                <FormControl variant="outlined" style={{color: color}}>
                                    {/* <InputLabel htmlFor="search" className={classes.root}>Portal Search</InputLabel> */}
                                    <OutlinedInput 
                                        className={classes.textBox}
                                        id="search"
                                        type={'text'}
                                        value={searchTerm}
                                        onChange={handleChange()}
                                        placeholder="Portal Search"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconButton style={{color: "#374957"}}>
                                                    <SearchRounded/>
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        style={{color: "#4D4D4D"}}
                                        labelWidth={70}
                                        required={true}
                                        autoComplete="off"
                                    />
                                </FormControl>
                            </div>
                            <div className={classes.searchResultMobile}>
                            {
                                restaurants.filter((val) => {
                                    if(searchTerm === "") {
                                    return;
                                    }else if(val.FirstName.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                                    }
                                    return 
                                }).map((val, index) => {
                                    return(
                                    <>
                                        <Link onClick={(e) => { e.preventDefault(); handleSelectedRestaurant(val);}} className={classes.link}>
                                        <div style={{ textAlign: "left"}} key={index}>
                                            <div style={{ display: "flex", marginTop: "10px" }}>
                                            <img 
                                                src={val.ImageName} 
                                                alt="restaurant" 
                                                width={"50px"}
                                                height={"50px"}
                                                />
                                            <p>{val.FirstName}</p>
                                            </div>
                                        </div>
                                        </Link>
                                    </>
                                    ) 
                                })
                            }
                            {
                                restItems.filter((val) => {
                                if(searchTerm === "") {
                                    return;
                                }else if(val.ItemName.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return val;
                                }
                                return 
                                }).map((val, index) => {
                                return(
                                    <>
                                    <Link onClick={(e) => { e.preventDefault(); handleSelectedRestaurantItem(val);}} className={classes.link}>
                                        <div style={{ textAlign: "left"}} key={index}>
                                        <div style={{ display: "flex", marginTop: "10px" }}>
                                            <img 
                                                src={val.ImageName} 
                                                alt="restaurant" 
                                                width={"50px"}
                                                height={"50px"}
                                            />
                                            <p>{val.ItemName}</p>
                                        </div>
                                        </div>
                                    </Link>
                                    </>
                                ) 
                                })
                            }
                            </div>
                        </div>
                    </Fade>
                </Modal>
                <div className={classes.mobileSearchContainer}>
                    <IconButton 
                        style={{color: "#374957", marginLeft: "auto"}}
                        onClick={handleOpen}
                    >
                        <SearchRounded/>
                    </IconButton>
                </div>
                <style>
                  {
                    `
                      @media only screen and (min-width: 769px){
                        .mobileMenuToggle{
                          display: none;
                        }
                      }
                      .modalMobile{
                        position: relative;
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
                    `
                  }
                </style>
            </>
        )
    }else{
        return (
            <>
                <div style={{backgroundColor: backgroundColor, display: "flex", top: 0}}>
                      <FormControl variant="outlined" style={{color: color}}>
                          {/* <InputLabel htmlFor="search" className={classes.root}>Portal Search</InputLabel> */}
                          <OutlinedInput 
                              className={classes.textBoxMobile}
                              id="search"
                              type={'text'}
                              value={searchTerm}
                              onChange={handleChange()}
                              placeholder="Portal Search"
                              startAdornment={
                                  <InputAdornment position="start">
                                      <IconButton style={{color: "#374957"}}>
                                          <SearchRounded/>
                                      </IconButton>
                                  </InputAdornment>
                              }
                              style={{color: "#4D4D4D"}}
                              labelWidth={70}
                              required={true}
                              autoComplete="off"
                          />
                      </FormControl>
                </div>
                <div className={classes.searchResultMobile}>
                  {
                      restaurants.filter((val) => {
                        if(searchTerm === "") {
                          return;
                        }else if(val.FirstName.toLowerCase().includes(searchTerm.toLowerCase())){
                          return val;
                        }
                        return 
                      }).map((val, index) => {
                        return(
                          <>
                            <Link onClick={(e) => { e.preventDefault(); handleSelectedRestaurant(val);}} className={classes.link}>
                              <div style={{ textAlign: "left"}} key={index}>
                                <div style={{ display: "flex", marginTop: "10px" }}>
                                  <img 
                                      src={val.ImageName} 
                                      alt="restaurant" 
                                      width={"50px"}
                                      height={"50px"}
                                    />
                                  <p>{val.FirstName}</p>
                                </div>
                              </div>
                            </Link>
                          </>
                        ) 
                      })
                  }
                  {
                    restItems.filter((val) => {
                      if(searchTerm === "") {
                        return;
                      }else if(val.ItemName.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val;
                      }
                      return 
                    }).map((val, index) => {
                      return(
                        <>
                          <Link onClick={(e) => { e.preventDefault(); handleSelectedRestaurantItem(val);}} className={classes.link}>
                            <div style={{ textAlign: "left"}} key={index}>
                              <div style={{ display: "flex", marginTop: "10px" }}>
                                <img 
                                    src={val.ImageName} 
                                    alt="restaurant" 
                                    width={"50px"}
                                    height={"50px"}
                                  />
                                <p>{val.ItemName}</p>
                              </div>
                            </div>
                          </Link>
                        </>
                      ) 
                    })
                  }
                </div>
            </>
        )
    }
}

export default PortalSearch;