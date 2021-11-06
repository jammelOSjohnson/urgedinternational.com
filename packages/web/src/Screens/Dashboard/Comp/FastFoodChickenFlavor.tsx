import { FormControl, Grid, InputLabel, makeStyles, createStyles, MenuItem, Select, Theme } from '@material-ui/core'
import React from 'react'

interface State {
    chickenFlavour1: string;
    chickenFlavour2: string;
    drink: string;
    otherIntructions: string;
    itemName: string;
    itemCost: number;
    imageName: string;
    orderStatus: string;
    deliveredBy: string;
    itemCategory: string;
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 0px 0% 0px",
            borderRadius: "22px",
            "& .MuiInputBase-root": {
                color: "#9B9B9B ",
                borderColor: "#888888",
                border: "0.1px dotted"
            },
            "& .MuiSelect-select:$focus": {
                backgroundColor: "inherit",
                color: "#9B9B9B"
            },
            "& .MuiFormLabel-root": {
                fontWeight: 700,
                fontSize: "1.2rem"
            },
            "& .MuiInputLabel-root.Mui-focused":{
                color: "#9B9B9B"
            }
            
        },
        category: {
            fontWeight: "bold"
        },
        cardTitle: {
            fontSize: "20px",
            fontWeight: 700,
            color: "#1D2635",
            fontFamily: "PT Sans",
        },
        cardContent: {
            flexGrow: 1,
            textAlign: "left",
            paddingBottom: "0px",
            paddingTop: "0px",
        },
        cardImage: {
            textAlign: "left",
            position: "relative"
        },
        card: {
            background: "#FFFFFF",
            border: "0.813791px solid #E2E2E2",
            boxSizing: "border-box",
            boxShadow: "0px 4.64215px 12.2069px rgba(0, 0, 0, 0.11)",
            borderRadius: "34.3745px",
        },
        OrderResult1: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        OrderResult2: {
            position: "absolute",
            top: "23%",
            right: "9%",
            color: "#13ADD1",
            fontFamily: "PT Sans",
            fontWeight: "bold"
        },
        gridSpacing: {
            marginLeft: "auto", 
            marginRight: "auto",
            minHeight: "446.99px"
        },
        avatar: {
            width: "52px",
            height: "52px"
          },
        kfcImage: {
            marginTop: "-24%"
        },
        btnLayout: {
            textAlign: "left",
            width: "100%",
            left: "50%",
            // top: "-108%",
            position: "relative",
            paddingTop: "3%",
            zIndex: 1
        },
        inactiveItemLink: {
            textDecoration: "none",
            color: "inherit",
        },
        Button: {
            backgroundColor: theme.palette.primary.light,
            border: "1.21951px solid #FFFFFF",
            height: "41px",
            width: "113px",
            borderRadius: 36,
        },
        btnfonts: {
            fontFamily: "PT Sans",
            fontSize: "13px",
            lineHeight: "16.82px",
            fontWeight: "bolder",
            color: "#FAFAFA",
            textTransform: "none"
        },
        priceText: {
            color: theme.palette.primary.light,
            fontWeight: "bolder",
        },
        media: {
            height: 274,
            margin: "1% 1% 0% 1%",
            borderRadius: "5% 5% 0% 0%",
        },
        modal: {
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
           borderRadius: "50px",
           borderColor: theme.palette.primary.light
          
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px",
            width: "100%"
        },
    }),
);

export const FastFoodChickenFlavor: React.FC<{props:State, handleChange: any}> = function FastFoodChickenFlavor({props,handleChange}) {
    const classes = useStyles();
    return (
        <>
            {props.itemCategory !== "Hot Wings" && props.itemCategory !== "Popcorn Chicken" && props.itemCategory !== "Zingers" &&  props.itemCategory !== "Famous Bowl" && props.itemCategory !=="Buckets" && props.itemCategory !=="Sides"  ?
                <>
                    <Grid item xs={10} sm={6} md={6} lg={6}>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">1st choice</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.chickenFlavour1}
                                onChange={handleChange}
                                label="Flavour1"
                                name="chickenFlavour1"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                <MenuItem value={"Original"}>Original</MenuItem>
                                <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                <MenuItem value={"Spicy"}>Spicy</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={10} sm={6} md={6} lg={6}>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">2nd choice</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.chickenFlavour2 }
                                onChange={handleChange}
                                label="Flavour2"
                                name="chickenFlavour2"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                <MenuItem value={"Original"}>Original</MenuItem>
                                <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                <MenuItem value={"Spicy"}>Spicy</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={10} sm={12} >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Drink</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.drink }
                                onChange={handleChange}
                                label="drink"
                                name="drink"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Drink"}>Select Drink</MenuItem>
                                <MenuItem value={"Water"}>Water</MenuItem>
                                <MenuItem value={"Pepsi"}>Pepsi</MenuItem>
                                <MenuItem value={"Ginger Beer"}>Ginger Beer</MenuItem>
                                <MenuItem value={"Flavour Splash"}>Flavour Splash</MenuItem>
                                <MenuItem value={"Tropics Orangeade"}>Tropics Orangeade</MenuItem>
                                <MenuItem value={"Topics Fruit Punch"}>Topics Fruit Punch</MenuItem>
                                <MenuItem value={"Tropics Grape"}>Tropics Grape</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </>
                :props.itemCategory === "Hot Wings"?
                <>
                    <Grid item xs={12} >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">choice</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.chickenFlavour1}
                                onChange={handleChange}
                                label="Flavour1"
                                name="chickenFlavour1"
                                className={classes.root}
                                fullWidth
                            >
                                <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                <MenuItem value={"Spicy"}>Spicy</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={10} sm={12} >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Drink</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.drink }
                                onChange={handleChange}
                                label="drink"
                                name="drink"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Drink"}>Select Drink</MenuItem>
                                <MenuItem value={"Water"}>Water</MenuItem>
                                <MenuItem value={"Pepsi"}>Pepsi</MenuItem>
                                <MenuItem value={"Ginger Beer"}>Ginger Beer</MenuItem>
                                <MenuItem value={"Flavour Splash"}>Flavour Splash</MenuItem>
                                <MenuItem value={"Tropics Orangeade"}>Tropics Orangeade</MenuItem>
                                <MenuItem value={"Topics Fruit Punch"}>Topics Fruit Punch</MenuItem>
                                <MenuItem value={"Tropics Grape"}>Tropics Grape</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </>
                :props.itemCategory === "Famous Bowl" ?
                <>
                    <Grid item xs={12} >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">choice</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.chickenFlavour1}
                                onChange={handleChange}
                                label="Flavour1"
                                name="chickenFlavour1"
                                className={classes.root}
                                fullWidth
                            >
                                <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                <MenuItem value={"Spicy"}>Original</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={10} sm={12} >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Drink</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.drink }
                                onChange={handleChange}
                                label="drink"
                                name="drink"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Drink"}>Select Drink</MenuItem>
                                <MenuItem value={"Water"}>Water</MenuItem>
                                <MenuItem value={"Pepsi"}>Pepsi</MenuItem>
                                <MenuItem value={"Ginger Beer"}>Ginger Beer</MenuItem>
                                <MenuItem value={"Flavour Splash"}>Flavour Splash</MenuItem>
                                <MenuItem value={"Tropics Orangeade"}>Tropics Orangeade</MenuItem>
                                <MenuItem value={"Topics Fruit Punch"}>Topics Fruit Punch</MenuItem>
                                <MenuItem value={"Tropics Grape"}>Tropics Grape</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </>
                :props.itemCategory === "Buckets"? 
                    <>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">choice</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.chickenFlavour1}
                                onChange={handleChange}
                                label="Flavour1"
                                name="chickenFlavour1"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Flavour"}>Select Flavour</MenuItem>
                                <MenuItem value={"Mixed"}>Mixed</MenuItem>
                                <MenuItem value={"Original"}>Original</MenuItem>
                                <MenuItem value={"Barbeque"}>Barbeque</MenuItem>
                                <MenuItem value={"Spicy"}>Spicy</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={10} sm={12} >
                        <FormControl variant="outlined" className={classes.formControl} fullWidth>
                            <InputLabel id="demo-simple-select-outlined-label">Drink</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={props.drink }
                                onChange={handleChange}
                                label="drink"
                                name="drink"
                                className={classes.root}
                            >
                                <MenuItem value={"Select Drink"}>Select Drink</MenuItem>
                                <MenuItem value={"Pepsi"}>Pepsi</MenuItem>
                                <MenuItem value={"Kola Champagne"}>Kola Champagne</MenuItem>
                                <MenuItem value={"Ting"}>Ting</MenuItem>
                                <MenuItem value={"Grape"}>Grape</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    </>
                :props.itemCategory === "Popcorn Chicken" ?
                <Grid item xs={10} sm={12} >
                    <FormControl variant="outlined" className={classes.formControl} fullWidth>
                        <InputLabel id="demo-simple-select-outlined-label">Drink</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={props.drink }
                            onChange={handleChange}
                            label="drink"
                            name="drink"
                            className={classes.root}
                        >
                            <MenuItem value={"Select Drink"}>Select Drink</MenuItem>
                            <MenuItem value={"Water"}>Water</MenuItem>
                            <MenuItem value={"Pepsi"}>Pepsi</MenuItem>
                            <MenuItem value={"Ginger Beer"}>Ginger Beer</MenuItem>
                            <MenuItem value={"Flavour Splash"}>Flavour Splash</MenuItem>
                            <MenuItem value={"Tropics Orangeade"}>Tropics Orangeade</MenuItem>
                            <MenuItem value={"Topics Fruit Punch"}>Topics Fruit Punch</MenuItem>
                            <MenuItem value={"Tropics Grape"}>Tropics Grape</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                :
                <></>
            }
        </>
    )
}
