import React, {FunctionComponent} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";

import { Container } from "../components/shared";
import { colors } from "../components/colors";

import {Text, StyleSheet} from 'react-native';

const UserLoginContainer = styled(Container)`
    background-color: ${colors.red};
    justify-content: space-between;
    width: 100%;
    height: 100%;
`;

const Login: FunctionComponent = () => {
    return (
        <>
            <StatusBar style="light"/>
            <UserLoginContainer></UserLoginContainer>

            <Text>Hello!!!!</Text>


            
        
        
        </>

    );
};

export default Login;