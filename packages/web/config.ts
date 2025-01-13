import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  MODE: string | undefined;
  REACT_APP_ServiceFee: string | undefined;
  REACT_APP_Restricted_Area1: string | undefined;
  REACT_APP_Restricted_Area2: string | undefined;
  REACT_APP_FEE_MayPen: string | undefined;
  REACT_APP_FEE_Denbigh: string | undefined;
  REACT_APP_FEE_Bushypark: string | undefined;
  REACT_APP_FEE_Treadlight: string | undefined;
  REACT_APP_FEE_Bucknor: string | undefined;
  REACT_APP_FEE_MidlandGlades: string | undefined;
  REACT_APP_FEE_MuirheadAvenue: string | undefined;
  REACT_APP_FEE_Fourpaths: string | undefined;
  REACT_APP_FEE_Swansea: string | undefined;
  REACT_APP_FEE_OsborneStore: string | undefined;
  REACT_APP_FEE_Tollgate: string | undefined;
  REACT_APP_FEE_Clarendonpark: string | undefined;
  REACT_APP_FEE_TrentonRoad: string | undefined;
  REACT_APP_FEE_Hazard: string | undefined;
  REACT_APP_FEE_JunoCrescent: string | undefined;
  REACT_APP_FEE_Paisley: string | undefined;
  REACT_APP_FEE_PalmersCross: string | undefined;
  REACT_APP_FEE_MineralHeights: string | undefined;
  REACT_APP_FEE_CuratoeHil: string | undefined;
  REACT_APP_FEE_HalseHall: string | undefined;
  REACT_APP_FEE_TwinPalmEstate: string | undefined;
  REACT_APP_FEE_SandyBay: string | undefined;
  REACT_APP_FEE_Vere: string | undefined;
  REACT_APP_FEE_Hayescornpiece: string | undefined;
  REACT_APP_FEE_MayPenHospital: string | undefined;
  REACT_APP_FEE_RaceTrack: string | undefined;
  REACT_APP_FEE_HartwellGardens: string | undefined;
  REACT_APP_FEE_Glenmuir: string | undefined;
  REACT_APP_FEE_Inglewood: string | undefined;
  REACT_APP_FEE_FogaRoad: string | undefined;
  REACT_APP_GCT: string | undefined;
  REACT_APP_DEFAULT_RESTAURANT_LOGO: string | undefined;
  REACT_APP_RESTAURANT_ROLE_ID: string | undefined;
  REACT_APP_LIVECHAT_LICENSE: string | undefined;
}

interface Config {
  MODE: string;
  REACT_APP_ServiceFee: string;
  REACT_APP_Restricted_Area1: string;
  REACT_APP_Restricted_Area2: string;
  REACT_APP_FEE_MayPen: string;
  REACT_APP_FEE_Denbigh: string;
  REACT_APP_FEE_Bushypark: string;
  REACT_APP_FEE_Treadlight: string;
  REACT_APP_FEE_Bucknor: string;
  REACT_APP_FEE_MidlandGlades: string;
  REACT_APP_FEE_MuirheadAvenue: string;
  REACT_APP_FEE_Fourpaths: string;
  REACT_APP_FEE_Swansea: string;
  REACT_APP_FEE_OsborneStore: string;
  REACT_APP_FEE_Tollgate: string;
  REACT_APP_FEE_Clarendonpark: string;
  REACT_APP_FEE_TrentonRoad: string;
  REACT_APP_FEE_Hazard: string;
  REACT_APP_FEE_JunoCrescent: string;
  REACT_APP_FEE_Paisley: string;
  REACT_APP_FEE_PalmersCross: string;
  REACT_APP_FEE_MineralHeights: string;
  REACT_APP_FEE_CuratoeHil: string;
  REACT_APP_FEE_HalseHall: string;
  REACT_APP_FEE_TwinPalmEstate: string;
  REACT_APP_FEE_SandyBay: string;
  REACT_APP_FEE_Vere: string;
  REACT_APP_FEE_Hayescornpiece: string;
  REACT_APP_FEE_MayPenHospital: string;
  REACT_APP_FEE_RaceTrack: string;
  REACT_APP_FEE_HartwellGardens: string;
  REACT_APP_FEE_Glenmuir: string;
  REACT_APP_FEE_Inglewood: string;
  REACT_APP_FEE_FogaRoad: string;
  REACT_APP_GCT: string;
  REACT_APP_DEFAULT_RESTAURANT_LOGO: string;
  REACT_APP_RESTAURANT_ROLE_ID: string;
  REACT_APP_LIVECHAT_LICENSE: string;
}

// Loading import.meta.env as ENV interface

const getConfig = (): ENV => {
  return {
    MODE: import.meta.env.MODE,
    REACT_APP_ServiceFee: import.meta.env.REACT_APP_ServiceFee,
    REACT_APP_Restricted_Area1: import.meta.env.REACT_APP_Restricted_Area1,
    REACT_APP_Restricted_Area2: import.meta.env.REACT_APP_Restricted_Area2,
    REACT_APP_FEE_MayPen: import.meta.env.REACT_APP_FEE_MayPen,
    REACT_APP_FEE_Denbigh: import.meta.env.REACT_APP_FEE_Denbigh,
    REACT_APP_FEE_Bushypark: import.meta.env.REACT_APP_FEE_Bushypark,
    REACT_APP_FEE_Treadlight: import.meta.env.REACT_APP_FEE_Treadlight,
    REACT_APP_FEE_Bucknor: import.meta.env.REACT_APP_FEE_Bucknor,
    REACT_APP_FEE_MidlandGlades: import.meta.env.REACT_APP_FEE_MidlandGlades,
    REACT_APP_FEE_MuirheadAvenue: import.meta.env.REACT_APP_FEE_MuirheadAvenue,
    REACT_APP_FEE_Fourpaths: import.meta.env.REACT_APP_FEE_Fourpaths,
    REACT_APP_FEE_Swansea: import.meta.env.REACT_APP_FEE_Swansea,
    REACT_APP_FEE_OsborneStore: import.meta.env.REACT_APP_FEE_OsborneStore,
    REACT_APP_FEE_Tollgate: import.meta.env.REACT_APP_FEE_Tollgate,
    REACT_APP_FEE_Clarendonpark: import.meta.env.REACT_APP_FEE_Clarendonpark,
    REACT_APP_FEE_TrentonRoad: import.meta.env.REACT_APP_FEE_TrentonRoad,
    REACT_APP_FEE_Hazard: import.meta.env.REACT_APP_FEE_Hazard,
    REACT_APP_FEE_JunoCrescent: import.meta.env.REACT_APP_FEE_JunoCrescent,
    REACT_APP_FEE_Paisley: import.meta.env.REACT_APP_FEE_Paisley,
    REACT_APP_FEE_PalmersCross: import.meta.env.REACT_APP_FEE_PalmersCross,
    REACT_APP_FEE_MineralHeights: import.meta.env.REACT_APP_FEE_MineralHeights,
    REACT_APP_FEE_CuratoeHil: import.meta.env.REACT_APP_FEE_CuratoeHil,
    REACT_APP_FEE_HalseHall: import.meta.env.REACT_APP_FEE_HalseHall,
    REACT_APP_FEE_TwinPalmEstate: import.meta.env.REACT_APP_FEE_TwinPalmEstate,
    REACT_APP_FEE_SandyBay: import.meta.env.REACT_APP_FEE_SandyBay,
    REACT_APP_FEE_Vere: import.meta.env.REACT_APP_FEE_Vere,
    REACT_APP_FEE_Hayescornpiece: import.meta.env.REACT_APP_FEE_Hayescornpiece,
    REACT_APP_FEE_MayPenHospital: import.meta.env.REACT_APP_FEE_MayPenHospital,
    REACT_APP_FEE_RaceTrack: import.meta.env.REACT_APP_FEE_RaceTrack,
    REACT_APP_FEE_HartwellGardens: import.meta.env
      .REACT_APP_FEE_HartwellGardens,
    REACT_APP_FEE_Glenmuir: import.meta.env.REACT_APP_FEE_Glenmuir,
    REACT_APP_FEE_Inglewood: import.meta.env.REACT_APP_FEE_Inglewood,
    REACT_APP_FEE_FogaRoad: import.meta.env.REACT_APP_FEE_FogaRoad,
    REACT_APP_GCT: import.meta.env.REACT_APP_GCT,
    REACT_APP_DEFAULT_RESTAURANT_LOGO: import.meta.env
      .REACT_APP_DEFAULT_RESTAURANT_LOGO,
    REACT_APP_RESTAURANT_ROLE_ID: import.meta.env.REACT_APP_RESTAURANT_ROLE_ID,
    REACT_APP_LIVECHAT_LICENSE: import.meta.env.REACT_APP_LIVECHAT_LICENSE,
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
