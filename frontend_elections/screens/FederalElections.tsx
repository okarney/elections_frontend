import React, {FunctionComponent, useState} from "react";
import {Button, StyleSheet} from "react-native";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import {ScrollView} from "react-native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

//custom components
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import RegularText from "../components/texts/RegularText";
import RegularButton from "../components/buttons/RegularButton";
import BigText from "../components/texts/BigText";
import ElectionBox from "../components/ElectionBox";
import ExpandElectionBox from "../components/ExpandElectionBox";

const FederalElectionsContainer = styled(Container)`
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
    height: 5%;
`;

const Content = styled.View`
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex: 1;
    width: 90%;
    height: 60%;
    margin-top: 2%;
`;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        width: 350,
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
    electionBoxWrapper: {
        width: 350,
        paddingHorizontal: 10,
      },
      rightAlignedText: {
        color: '#000000',
        fontSize: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 30,
        marginLeft: 1,
    },
  });


interface FederalElectionsProps {
    navigation: NavigationProp<ParamListBase>;
}

const FederalElections: FunctionComponent<FederalElectionsProps> = ({navigation}) => {
    return (
        <>
            <StatusBar style="dark"/>

            <FederalElectionsContainer>
                <TopPadding></TopPadding>

                <BigText>Federal Elections</BigText>
                
                <ButtonPadding></ButtonPadding>
                <ScrollView contentContainerStyle={{flexGrow: 1, justifyContent: "center", alignItems: "center", paddingBottom: 20}}>
                    
                    <Content style={styles.electionBoxWrapper}>

                        <ElectionBox onPress={() => navigation.navigate('LocalElections')}>Name of Incumbent</ElectionBox>
                        <ButtonPadding></ButtonPadding>
                        
                        <ExpandElectionBox onPress={() => navigation.navigate('LocalElections')}>Presidential Elections</ExpandElectionBox>
                        <ButtonPadding></ButtonPadding>
                        
                        
                        <ElectionBox onPress={() => navigation.navigate('LocalElections')}>Presidential Elections</ElectionBox>
                        <ButtonPadding></ButtonPadding>
                        <ElectionBox onPress={() => navigation.navigate('LocalElections')}>Presidential Elections</ElectionBox>
                        <ButtonPadding></ButtonPadding>
                        <ElectionBox onPress={() => navigation.navigate('LocalElections')}>Presidential Elections</ElectionBox>
                        <ButtonPadding></ButtonPadding>
                        <ElectionBox onPress={() => navigation.navigate('LocalElections')}>Presidential Elections</ElectionBox>
                        <ButtonPadding></ButtonPadding>
                        
                    </Content>
                </ScrollView>


            </FederalElectionsContainer>
        </> 

    );
}

export default FederalElections;