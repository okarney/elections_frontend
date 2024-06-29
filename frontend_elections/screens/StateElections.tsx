import React, {FunctionComponent, useState} from "react";
import {Button, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import RegularText from "../components/texts/RegularText";
import RegularButton from "../components/buttons/RegularButton";
import BigText from "../components/texts/BigText";


const StateElectionsContainer = styled(Container)`
    width: ScreenWidth;
    height: ScreenHeight;
    flex: 1;

`;

const TopPadding = styled.View`
    width: 100%;
    height: 15%;
`;

const ButtonPadding = styled.View`
    width: 100%;
    height: 14%;
`;

const Content = styled.View`
    justify-content: center;
    align-items: center;
    flexDirection: column;
    width: 90%;
    height: 60%;
    flex: 1;
`;
const ElectionBox = styled.View`
    width: 100%;
    height: 30px;



`;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
      },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
  });


interface StateElectionsProps {
    navigation: NavigationProp<ParamListBase>;
}

const StateElections: FunctionComponent<StateElectionsProps> = ({navigation}) => {
    return (
        <>
            <StatusBar style="dark"/>

            <StateElectionsContainer>
                <TopPadding></TopPadding>

                <BigText>State Elections</BigText>
                
                <Content>
                    
                </Content>

            </StateElectionsContainer>
        </> 

    );
}

export default StateElections;