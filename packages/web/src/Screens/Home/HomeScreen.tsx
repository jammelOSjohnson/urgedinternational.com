import { Container } from '@material-ui/core';
import React from 'react'

//Import Sections
import { Section1 } from "./Comp/Section1";
import { Section2 } from "./Comp/Section2";
import { Section3 } from "./Comp/Section3";
import { Section4 } from "./Comp/Section4";
import { Section5 } from "./Comp/Section5";
import { Section6 } from "./Comp/Section6";
import { Section7 } from "./Comp/Section7";
//import { Section8 } from "./Comp/Section8";
import {ExternalApp} from "./Comp/ExternalApp";




export const HomeScreen: React.FC = function HomeScreen() {
    return (
        <>
            <Container maxWidth="xl" style={{padding: 0, overflowX: "hidden"}}>
                <Section1 />
                <ExternalApp />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
                <Section7 />
                <Section2 />
            </Container>
        </>
    )
}