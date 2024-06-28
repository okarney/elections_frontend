import React, {FunctionComponent, useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import RegularText from "../components/texts/RegularText";


const GovPositionsContainer = styled(Container)`
    width: ScreenWidth;
    height: ScreenHeight;
    flex: 1;

`;



const GovPositions: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="dark"/>

            <GovPositionsContainer>
                <RegularText>Hello</RegularText>

            </GovPositionsContainer>
        </> 

    );
}

export default GovPositions;