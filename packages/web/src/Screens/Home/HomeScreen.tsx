import { Container } from '@material-ui/core';
import React from 'react'
import { LiveChatWidget } from "@livechat/widget-react"

//Import Sections
import { Section1 } from "./Comp/Section1";
import { Section2 } from "./Comp/Section2";
import { Section3 } from "./Comp/Section3";
import { Section4 } from "./Comp/Section4";
import { Section5 } from "./Comp/Section5";
import { Section6 } from "./Comp/Section6";
import { Section7 } from "./Comp/Section7";
//import { Section8 } from "./Comp/Section8";
//import {ExternalApp} from "./Comp/ExternalApp";




export const HomeScreen: React.FC = function HomeScreen() {

    return (
        <>
            {/* ,display: 'flex', justifyContent: 'center', alignItems: 'center' */}
            <Container maxWidth="xl" style={{padding: 0, overflowX: "hidden"}}>
                <Section1 />
                {/* <ExternalApp /> */}
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                {/* <img src='Images/Maintenance.webp' alt='maintenance' /> */}
            </Container>
            {process.env.NODE_ENV !== 'development' ?
                <LiveChatWidget license={process.env.REACT_APP_LIVECHAT_LICENSE !== undefined? process.env.REACT_APP_LIVECHAT_LICENSE : ""} />
            :
                <></>
            }
        </>
    )
}