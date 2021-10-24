import { Container } from '@material-ui/core';
import React from 'react'
import { Section8 } from '../Home/Comp/Section8';

//Import Sections
import { Section1 } from "./Comp/Section1";
import { Section2 } from "./Comp/Section2";
import { Section3 } from "./Comp/Section3";
import { Section4 } from "./Comp/Section4";
import { Section5 } from "./Comp/Section5";
import { Section6 } from "./Comp/Section6";


interface Props {
    
}

export const AboutScreen: React.FC = function AboutScreen() {
    return (
        <>
            <Container maxWidth="xl" style={{padding: 0}}>
                <Section1 />
                <Section8 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section2 />
                <Section6 />
            </Container>
        </>
    )
}