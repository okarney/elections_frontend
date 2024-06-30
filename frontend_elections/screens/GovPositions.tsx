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


const GovPositionsContainer = styled(Container)`
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


interface GovPositionProps {
    navigation: NavigationProp<ParamListBase>;
}

const GovPositions: FunctionComponent<GovPositionProps> = ({navigation}) => {
    return (
        <>
            <StatusBar style="dark"/>

            <GovPositionsContainer>
                <TopPadding></TopPadding>

                <BigText>Government Positions</BigText>
                
                <Content>
                    <RegularButton onPress={() => navigation.navigate('FederalElections')}>Federal Elections</RegularButton>
                    
                    <ButtonPadding></ButtonPadding>
                    
                    <RegularButton onPress={() => navigation.navigate('StateElections')}>State Elections</RegularButton>

                    <ButtonPadding></ButtonPadding>
                    
                    <RegularButton onPress={() => navigation.navigate('LocalElections')}>Local Elections</RegularButton>
                </Content>

            </GovPositionsContainer>
        </> 

    );
}

export default GovPositions;