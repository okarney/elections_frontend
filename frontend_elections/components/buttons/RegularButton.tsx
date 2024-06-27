import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
} from "react-native";

//components
import {colors} from "../colors";
import RegularText from "../texts/RegularText";

const ButtonView = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-color: #000000;
    border-width: 1px;
    width: 100%;
    height: 10%;
    border-radius: 5px;
`;

interface ButtonProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const RegularButton: FunctionComponent<ButtonProps> = (props) => {
    return (
    <ButtonView 
        onPress={props.onPress} style={props.btnStyles}><RegularText textStyles={props.textStyles}>{props.children}</RegularText>
    </ButtonView>
    );
}

export default RegularButton;