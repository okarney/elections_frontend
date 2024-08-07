import React, {FunctionComponent, useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import BigText from "../components/texts/BigText";
import SmallText from "../components/texts/SmallText";
import { ScreenHeight } from "../components/shared";
import { ScreenWidth } from "../components/shared";
import RegularButton from "../components/buttons/RegularButton";
import RegularText from "../components/texts/RegularText";

const UserLoginContainer = styled(Container)`
    width: ScreenWidth;
    height: ScreenHeight;
`;

const TopPadding = styled.View`
    width: 100%;
    height: 15%;
`;

const TitleSection = styled.View`
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 15%;
`;

const LoginSection = styled.View`
    width: 90%;
    height:20%;
    flex: 1;
    
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    label: {
      fontSize: 18,
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 35,
      paddingHorizontal: 10,
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

interface ForgotPasswordProps {
    navigation: NavigationProp<ParamListBase>;
}

const ForgotPassword: FunctionComponent<ForgotPasswordProps> = ({navigation}) => {
    const [email, setEmail] = useState('');


    return (
        <>
            <StatusBar style="light"/>
            <UserLoginContainer>

                <TopPadding></TopPadding>

                <TitleSection>
                    <Text style={{fontSize: 35, color: "black", marginBottom: 20}}>Forgot Your Password?</Text> 
                    <Text style={{fontSize: 15, color: "black", marginBottom: 20, textAlign: "center"}}>Enter your email below, and we will send you instructions to reset your password.</Text> 
                </TitleSection>



                <LoginSection>
                    
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            placeholder="Email Address"
                    />


                    <RegularButton onPress={() => navigation.navigate('GovPositions')}>Continue</RegularButton>



                    <TouchableOpacity onPress={() => navigation.navigate('UserLogin')}>
                        <Text style={{textAlign: "center", fontSize: 12, marginTop: 16, color: "blue", textDecorationLine: "underline"}}>Back to Login Screen</Text>
                    </TouchableOpacity>

                </LoginSection>

                

            </UserLoginContainer>



            
        
        
        </>

    );
};

export default ForgotPassword;