import { Container } from '@material-ui/core';
import React from 'react'

//Import Sections
// import { Section3 } from "../Services/Comp/Section3";
// import { Section4 } from "../Services/Comp/Section4";
// import { Section5 } from "../Services/Comp/Section5";
import { Section6 } from "../Services/Comp/Section6";
import { Section7 } from "../Services/Comp/Section7";
//import { Section8 } from "./Comp/Section8";
// import {ExternalApp} from "../Services/Comp/ExternalApp";
const Section1 = React.lazy(() => import("../Services/Comp/Section1"));
const Section2 = React.lazy(() => import("../Services/Comp/Section2"));




export const ServicesScreen: React.FC = function ServicesScreen() {
    return (
        <>
            <Container maxWidth="xl" style={{padding: 0, overflowX: "hidden"}}>
                <Section1 />
                {/* <ExternalApp /> */}
                <Section2 />
                {/* <Section3 /> */}
                {/* <Section4 /> */}
                {/* <Section5 /> */}
                <Section6 />
                <Section7 />
            </Container>
        </>
    )
}