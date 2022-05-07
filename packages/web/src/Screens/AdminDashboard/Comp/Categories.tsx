import { createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from "@material-ui/core";
import React, { useEffect } from "react";
import { useAppData } from "../../../Context/AppDataContext";

interface Cats {
    _id: string,
    Id: string,
    Name: string
}

interface Props {
    values,
    handleChange
}

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            padding: "0% 5% 0% 5%",
            // borderRadius: "22px"
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
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
            marginLeft: "0px"
        }
    })
)

export const Categories: React.FC<Props> = ({handleChange, values}) => {
    const classes = useStyles();
    var { value }  = useAppData();
    var { fetchCategories, restaurantCategories } = value;
    const [Categs,setCategories] = React.useState<Cats[]>([]);


    useEffect(() => {
        try{
            if(restaurantCategories.length === 0)
                fetchCategories(value);
            else 
                setCategories(restaurantCategories)
        }catch(err){

        }
    },[restaurantCategories])

    if(Categs.length > 0) {
        return (
            <>
                <FormControl variant="outlined" className={classes.formControl} fullWidth required>
                    <InputLabel id="demo-simple-select-outlined-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={values.Category}
                        onChange={handleChange}
                        label="Category"
                        name="Category"
                        className={classes.root}
                        required
                    >
                        <MenuItem value={"Select Category"}>Select Category</MenuItem>
                        {
                            Categs.map((item, index) => {
                                return <MenuItem value={item._id} key={index}>{item.Name}</MenuItem>
                            })
                        }
                        
                    </Select>
                </FormControl>
            </>
        )
    }else{
        return (
            <>
             Loading
            </>
        )
    }
    

}
