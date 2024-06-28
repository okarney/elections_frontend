import React, {FunctionComponent, useState} from "react";
import {StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import RegularText from "../components/texts/RegularText";
import RegularButton from "../components/buttons/RegularButton";


const GovPositionsContainer = styled(Container)`
    width: ScreenWidth;
    height: ScreenHeight;
    flex: 1;

`;

const TopPadding = styled.View`
    width: 100%;
    height: 15%;
`;

const Content = styled.View`
    justify-content: center;
    align-items: center;
    flexDirection: row;
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
        marginTop: 10,
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
                
                <Content>
                    <RegularButton onPress={() => navigation.navigate('GovPositions')}>Login</RegularButton>
                    

                    <RegularButton onPress={() => navigation.navigate('GovPositions')}>Login</RegularButton>
                    
                    <RegularButton onPress={() => navigation.navigate('GovPositions')}>Login</RegularButton>

                </Content>

            </GovPositionsContainer>
        </> 

    );
}

export default GovPositions;