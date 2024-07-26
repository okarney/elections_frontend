import React, {FunctionComponent, useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

import { NavigationProp, ParamListBase } from "@react-navigation/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

import {Text, View, StyleSheet, TextInput, Button, TouchableOpacity, TouchableOpacityProps, ScrollView} from 'react-native';
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
    height: 5%;
`;

const TitleSection = styled.View`
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 15%;
`;

const LoginSection = styled.View`
    width: 90%;
    height:5000;
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
      height: "8%",
      width: "90%",
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 15,
      marginTop: 0,
      paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        width: "80%",
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
    scrollViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        padding: 20,
    },
  });

interface SignUpProps {
    navigation: NavigationProp<ParamListBase>;
    justifyContent: 'center';
    alignItems: 'center',
        flexGrow: 1,
        padding: 20,
}

const SignUp: FunctionComponent<SignUpProps> = ({navigation}) => {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');


    // const [firstNameError, setFirstNameError] = useState('');
    // const [lastNameError, setLastNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    // const [retypePasswordError, setRetypePasswordError] = useState('');

    const handleSignUp = () => {

        if (password !== retypePassword) {
            alert("Passwords do not match! Please type matching passwords and try again.")
        }

        //Error messages

        // if (firstName === '') {
        //     setFirstNameError("This is a required field.")
        // }

        // if (lastName === '') {
        //     setLastNameError("This is a required field.")
        // }

        if (username === '') {
            setUsernameError("This is a required field.")
        }

        if (password === '') {
            setPasswordError("This is a required field.")
        }

        // if (retypePassword === '') {
        //     setRetypePasswordError("This is a required field.")
        // }



        else {
            navigation.navigate('UserLogin')
        }
        
    }



    return (
        <>
            <StatusBar style="light"/>
            {/*<ScrollView style ={styles.scrollViewContainer} keyboardShouldPersistTaps="handled">*/}
            <UserLoginContainer>

                <TopPadding></TopPadding>

                {/* <TitleSection> */}
                    <Text style={{fontSize: 55, color: "black", textAlign: "center"}}>Sign Up</Text>  
                    <Text style={{fontSize: 15, color: "black", marginBottom: 0, marginTop: 15, textAlign: "center"}}>Enter your details to create your account.</Text>                
              
                {/* </TitleSection> */}



                {/* <LoginSection> */}
                    {/* <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={firstName}
                            onChangeText={setFirstName}
                            placeholder="First Name"
                    />
                     {firstNameError ? <Text style={{color: "red", marginTop: "0%", marginBottom: "2%"}}>{firstNameError}</Text> : null}

                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={lastName}
                            onChangeText={setLastName}
                            placeholder="Last Name"
                    />
                     {lastNameError ? <Text style={{color: "red", marginTop: "0%", marginBottom: "2%"}}>{lastNameError}</Text> : null} */}

                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Username"
                    />
                    {usernameError ? <Text style={{color: "red", marginTop: "0%", marginBottom: "2%"}}>{usernameError}</Text> : null}

                    <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={email}
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
                    {passwordError ? <Text style={{color: "red", marginTop: "0%", marginBottom: "2%"}}>{passwordError}</Text> : null}

                    {/* <Text style={styles.label}></Text>
                        <TextInput
                            style={styles.input}
                            value={retypePassword}
                            secureTextEntry={true}
                            onChangeText={setRetypePassword}
                            placeholder="Retype Password"
                    />
                    {retypePasswordError ? <Text style={{color: "red", marginTop: 500, marginBottom: "2%"}}>{retypePasswordError}</Text> : null}
 */}

                   
                    <MiddlePadding></MiddlePadding>

                    <RegularButton onPress={handleSignUp}>Sign Up</RegularButton>

                    
                    



                        
                {/* </LoginSection> */}

                

            </UserLoginContainer>

            {/* </ScrollView> */}



            
        
        
        </>

    );
};

export default SignUp;