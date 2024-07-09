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

const MiddlePadding = styled.View`
    width: 100%;
    height: 5%;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'center',
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    rightAlignedText: {
        color: 'blue',
        textDecorationLine: 'underline',
        fontSize: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginBottom: 30,
        marginLeft: 1,
    },
  });

interface SignUpProps {
    navigation: NavigationProp<ParamListBase>;
}

const SignUp: FunctionComponent<SignUpProps> = ({navigation}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <StatusBar style="light"/>
            <UserLoginContainer>

                <TopPadding></TopPadding>

                <TitleSection>
                    <Text style={{fontSize: 55, color: "black", textAlign: "center"}}>Sign Up</Text>  
                    <Text style={{fontSize: 15, color: "black", marginBottom: 10, marginTop: 15, textAlign: "center"}}>Enter your details to create your account.</Text>                
              
                </TitleSection>



                <LoginSection>
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="First Name"
                    />
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last Name"
                    />
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Username"
                    />
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Password"
                    />
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Retype Password"
                    />

                   
                    <MiddlePadding></MiddlePadding>

                    <RegularButton onPress={() => navigation.navigate('UserLogin')}>Sign Up</RegularButton>

                    
                    



                        
                </LoginSection>

                

            </UserLoginContainer>



            
        
        
        </>

    );
};

export default SignUp;