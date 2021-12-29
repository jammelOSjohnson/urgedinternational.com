import { Container } from '@material-ui/core';
import React from 'react'

//Import Sections
import { Section1 } from "../ContactUs/Comp/Section1";
import { Section2 } from "../ContactUs/Comp/Section2";
import { Section3 } from "../ContactUs/Comp/Section3";
import { Section4 } from "../ContactUs/Comp/Section4";
import { Section5 } from "../ContactUs/Comp/Section5";
import { Section6 } from "../ContactUs/Comp/Section6";
import { Section7 } from "../ContactUs/Comp/Section7";
//import { Section8 } from "./Comp/Section8";
import {ExternalApp} from "../Services/Comp/ExternalApp";




export const ContactUsScreen: React.FC = function ContactUsScreen() {
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