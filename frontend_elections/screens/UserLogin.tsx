import React, {FunctionComponent, useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

import {Text, View, StyleSheet, TextInput} from 'react-native';
import BigText from "../components/texts/BigText";
import SmallText from "../components/texts/SmallText";
import { ScreenHeight } from "../components/shared";
import { ScreenWidth } from "../components/shared";


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
      marginBottom: 20,
      paddingHorizontal: 10,
    },
  });

const UserLogin: FunctionComponent = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <>
            <StatusBar style="light"/>
            <UserLoginContainer>

                <TopPadding></TopPadding>

                <TitleSection>
                    <Text style={{fontSize: 75, color: "red"}}>POL</Text><Text style={{fontSize: 75, color: "blue"}}>TECH</Text>                
                </TitleSection>



                <LoginSection>
                    <Text style={styles.label}>Name:</Text>
                        <TextInput
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            placeholder="Enter your name"
                    />
                    <Text style={{fontSize: 10}}> LOGIN HERE</Text>
                </LoginSection>
                


            </UserLoginContainer>



            
        
        
        </>

    );
};

export default UserLogin;