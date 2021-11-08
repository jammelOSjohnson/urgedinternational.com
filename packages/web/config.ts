import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
    NODE_ENV: string|undefined;
    REACT_APP_ServiceFee:string|undefined;
    REACT_APP_Restricted_Area1:string|undefined;
    REACT_APP_Restricted_Area2:string|undefined;
    REACT_APP_FEE_MayPen:string|undefined;
    REACT_APP_FEE_Denbigh:string|undefined;
    REACT_APP_FEE_Bushypark:string|undefined;
    REACT_APP_FEE_Treadlight:string|undefined;
    REACT_APP_FEE_Bucknor:string|undefined;
    REACT_APP_FEE_MidlandGlades:string|undefined;
    REACT_APP_FEE_MuirheadAvenue:string|undefined;
    REACT_APP_FEE_Fourpaths:string|undefined;
    REACT_APP_FEE_Swansea:string|undefined;
    REACT_APP_FEE_OsborneStore:string|undefined;
    REACT_APP_FEE_Tollgate:string|undefined;
    REACT_APP_FEE_Clarendonpark:string|undefined;
    REACT_APP_FEE_TrentonRoad:string|undefined;
    REACT_APP_FEE_Hazard:string|undefined;
    REACT_APP_FEE_JunoCrescent:string|undefined;
    REACT_APP_FEE_Paisley:string|undefined;
    REACT_APP_FEE_PalmersCross:string|undefined;
    REACT_APP_FEE_MineralHeights:string|undefined;
    REACT_APP_FEE_CuratoeHil:string|undefined;
    REACT_APP_FEE_HalseHall:string|undefined;
    REACT_APP_FEE_TwinPalmEstate:string|undefined;
    REACT_APP_FEE_SandyBay:string|undefined;
    REACT_APP_FEE_Vere:string|undefined;
    REACT_APP_FEE_Hayescornpiece:string|undefined;
    REACT_APP_FEE_MayPenHospital:string|undefined;
    REACT_APP_FEE_RaceTrack:string|undefined; 
    REACT_APP_FEE_HartwellGardens:string|undefined;
    REACT_APP_FEE_Glenmuir:string|undefined;
    REACT_APP_FEE_Inglewood:string|undefined;
    REACT_APP_FEE_FogaRoad:string|undefined;
}

interface Config {
    NODE_ENV:string;
    REACT_APP_ServiceFee:string;
    REACT_APP_Restricted_Area1:string;
    REACT_APP_Restricted_Area2:string;
    REACT_APP_FEE_MayPen:string;
    REACT_APP_FEE_Denbigh:string;
    REACT_APP_FEE_Bushypark:string;
    REACT_APP_FEE_Treadlight:string;
    REACT_APP_FEE_Bucknor:string;
    REACT_APP_FEE_MidlandGlades:string;
    REACT_APP_FEE_MuirheadAvenue:string;
    REACT_APP_FEE_Fourpaths:string;
    REACT_APP_FEE_Swansea:string;
    REACT_APP_FEE_OsborneStore:string;
    REACT_APP_FEE_Tollgate:string;
    REACT_APP_FEE_Clarendonpark:string;
    REACT_APP_FEE_TrentonRoad:string;
    REACT_APP_FEE_Hazard:string;
    REACT_APP_FEE_JunoCrescent:string;
    REACT_APP_FEE_Paisley:string;
    REACT_APP_FEE_PalmersCross:string;
    REACT_APP_FEE_MineralHeights:string;
    REACT_APP_FEE_CuratoeHil:string;
    REACT_APP_FEE_HalseHall:string;
    REACT_APP_FEE_TwinPalmEstate:string;
    REACT_APP_FEE_SandyBay:string;
    REACT_APP_FEE_Vere:string;
    REACT_APP_FEE_Hayescornpiece:string;
    REACT_APP_FEE_MayPenHospital:string;
    REACT_APP_FEE_RaceTrack:string; 
    REACT_APP_FEE_HartwellGardens:string;
    REACT_APP_FEE_Glenmuir:string;
    REACT_APP_FEE_Inglewood:string;
    REACT_APP_FEE_FogaRoad:string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    REACT_APP_ServiceFee:process.env.REACT_APP_ServiceFee,
    REACT_APP_Restricted_Area1:process.env.REACT_APP_Restricted_Area1,
    REACT_APP_Restricted_Area2:process.env.REACT_APP_Restricted_Area2,
    REACT_APP_FEE_MayPen:process.env.REACT_APP_FEE_MayPen,
    REACT_APP_FEE_Denbigh:process.env.REACT_APP_FEE_Denbigh,
    REACT_APP_FEE_Bushypark:process.env.REACT_APP_FEE_Bushypark,
    REACT_APP_FEE_Treadlight:process.env.REACT_APP_FEE_Treadlight,
    REACT_APP_FEE_Bucknor:process.env.REACT_APP_FEE_Bucknor,
    REACT_APP_FEE_MidlandGlades:process.env.REACT_APP_FEE_MidlandGlades,
    REACT_APP_FEE_MuirheadAvenue:process.env.REACT_APP_FEE_MuirheadAvenue,
    REACT_APP_FEE_Fourpaths:process.env.REACT_APP_FEE_Fourpaths,
    REACT_APP_FEE_Swansea:process.env.REACT_APP_FEE_Swansea,
    REACT_APP_FEE_OsborneStore:process.env.REACT_APP_FEE_OsborneStore,
    REACT_APP_FEE_Tollgate:process.env.REACT_APP_FEE_Tollgate,
    REACT_APP_FEE_Clarendonpark:process.env.REACT_APP_FEE_Clarendonpark,
    REACT_APP_FEE_TrentonRoad:process.env.REACT_APP_FEE_TrentonRoad,
    REACT_APP_FEE_Hazard:process.env.REACT_APP_FEE_Hazard,
    REACT_APP_FEE_JunoCrescent:process.env.REACT_APP_FEE_JunoCrescent,
    REACT_APP_FEE_Paisley:process.env.REACT_APP_FEE_Paisley,
    REACT_APP_FEE_PalmersCross:process.env.REACT_APP_FEE_PalmersCross,
    REACT_APP_FEE_MineralHeights:process.env.REACT_APP_FEE_MineralHeights,
    REACT_APP_FEE_CuratoeHil:process.env.REACT_APP_FEE_CuratoeHil,
    REACT_APP_FEE_HalseHall:process.env.REACT_APP_FEE_HalseHall,
    REACT_APP_FEE_TwinPalmEstate:process.env.REACT_APP_FEE_TwinPalmEstate,
    REACT_APP_FEE_SandyBay:process.env.REACT_APP_FEE_SandyBay,
    REACT_APP_FEE_Vere:process.env.REACT_APP_FEE_Vere,
    REACT_APP_FEE_Hayescornpiece:process.env.REACT_APP_FEE_Hayescornpiece,
    REACT_APP_FEE_MayPenHospital:process.env.REACT_APP_FEE_MayPenHospital,
    REACT_APP_FEE_RaceTrack:process.env.REACT_APP_FEE_RaceTrack, 
    REACT_APP_FEE_HartwellGardens:process.env.REACT_APP_FEE_HartwellGardens,
    REACT_APP_FEE_Glenmuir:process.env.REACT_APP_FEE_Glenmuir,
    REACT_APP_FEE_Inglewood:process.env.REACT_APP_FEE_Inglewood,
    REACT_APP_FEE_FogaRoad:process.env.REACT_APP_FEE_FogaRoad,
  };
};

// Throwing an Error if any field was undefined we don't 
// want our app to run if it can't connect to DB and ensure 
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type 
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;