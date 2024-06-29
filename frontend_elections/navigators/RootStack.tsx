import React, {FunctionComponent} from "react";

//React Navigation

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import UserLogin from "../screens/UserLogin";
import GovPositions from "../screens/GovPositions";
import FederalElections from "../screens/FederalElections";
import StateElections from "../screens/StateElections";
import LocalElections from "../screens/LocalElection";

export type RootStackParamList = {
    UserLogin: undefined;
    GovPositions: undefined;
    FederalElecitons: undefined;
    StateElections: undefined;
    LocalElections: undefined;

};


const Stack = createStackNavigator<RootStackParamList>();

const RootStack: FunctionComponent = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerStyle:{
                        backgroundColor: "white",
                    },
                }}          
                initialRouteName="UserLogin"
            >
                <Stack.Screen
                    name="UserLogin"
                    component={UserLogin}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="GovPositions"
                    component={GovPositions}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="FederalElecitons"
                    component={FederalElections}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="StateElections"
                    component={StateElections}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="LocalElections"
                    component={LocalElections}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );

};

export default RootStack;