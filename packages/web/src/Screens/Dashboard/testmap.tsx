import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Autocomplete from "react-google-autocomplete";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
      autocomplete: {
        height: "400px",
        width: "100%"
      }
    }),
);

const Testmap: React.FC = function Testmap() {
  const classes = useStyles();

  const onPlaceSelectedHandler = (place) => {
    const newAddress = {
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    };

    // create center point; Miami
    const center = new window.google.maps.LatLng(17.96454, -77.24515);

    // user selected address
    const to = new window.google.maps.LatLng(
      place.geometry.location.lat(),
      place.geometry.location.lng()
    );

    // now check the distance between two address, is it inside 50Miles 
    const contains =
      window.google.maps.geometry.spherical.computeDistanceBetween(
        center,
        to
      ) <= 8046.72; // meters it's 5Miles

   if (contains) { console.log('go ahead how can we help you') }
   else { console.log('Sorry we do not offer our service yet') }
  }

  return (
    <Autocomplete
        apiKey={process.env.REACT_APP_GEO_API}
        className={classes.autocomplete}
        onPlaceSelected={onPlaceSelectedHandler}
        componentRestrictions={{ country: "ja" }}
        options={{
          types: ["geocode", "establishment"],
        }}
      />
  )
}

export default Testmap;
