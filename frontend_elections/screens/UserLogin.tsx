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
import { userLogin } from "../api/userApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    flexDirection: row;
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
      marginBottom: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
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

interface UserLoginProps {
    navigation: NavigationProp<ParamListBase>;
}

const UserLogin: FunctionComponent<UserLoginProps> = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const handleLogin = () => {
        userLogin({
            "username":username,
            "email": email,
            "password":password,
        }).then((result) => {
            if (result.status == 200) {
                AsyncStorage.setItem("AccessToken", result.data.token)
                navigation.navigate("GovPositions")
            }
        }).catch(error => {
            console.error(error);
        })
    }


    return (
        <>
            <StatusBar style="light"/>
            <UserLoginContainer>

                <TopPadding></TopPadding>

                <TitleSection>
                    <Text style={{fontSize: 75, color: "blue"}}>POL</Text><Text style={{fontSize: 75, color: "red"}}>TECH</Text>                
                </TitleSection>



                <LoginSection>
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
                            value={email}
                            secureTextEntry={true}
                            onChangeText={setEmail}
                            placeholder="Email"
                    />
                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            secureTextEntry={true}
                            onChangeText={setPassword}
                            placeholder="Password"
                    />

                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{textAlign: "left", fontSize: 10, marginBottom: 20, color: "blue", textDecorationLine: "underline"}}>Forgot Password?</Text>
                    </TouchableOpacity>


                    {/* <RegularButton onPress={() => navigation.navigate('GovPositions')}>Login</RegularButton> */}
                    <RegularButton onPress={handleLogin}>Login</RegularButton>


                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{textAlign: "center", fontSize: 13, marginBottom: 20, marginTop: 10, color: "blue"}}>Don't have an account?</Text>
                    </TouchableOpacity>


                </LoginSection>

                

            </UserLoginContainer>



            
        
        
        </>

    );
};

export default UserLogin;