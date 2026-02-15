import { useAppData } from "../Context/AppDataContext";
import { Badge } from "@mui/material";
import React from "react";
import NotificationImportantRounded from "@mui/icons-material/NotificationImportantRounded";

export const Notification: React.FC = function Notification() {
  var { value } = useAppData();
  var { noties } = value;

  return (
    <>
      <Badge
        badgeContent={noties.length}
        color="primary"
        overlap="rectangular"
        className="hideOnMobile"
      >
        <NotificationImportantRounded sx={{ color: "#FF5E14" }} />
      </Badge>
      <style>
        {`
                        @media only screen and (max-width: 768px){
                            .hideOnMobile{
                                display: none;
                            }
                        }
                    `}
      </style>
    </>
  );
};
