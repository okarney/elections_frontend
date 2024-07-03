import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {
    GestureResponderEvent,
    StyleProp,
    TextStyle,
    ViewStyle,
    StyleSheet,
    Text,
} from "react-native";

//components
import {colors} from "./colors";
import RegularText from "./texts/RegularText";
import ElectionBoxText from "./texts/ElectionBoxText";

const styles = StyleSheet.create({
    
    rightAlignedText: {
        color: '#000000',
        fontSize: 10,
        alignSelf:"flex-start",
        marginBottom: 5,
        marginLeft: 10,
        marginTop: 10,
    },
  });

const ElectionBoxView = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-color: #000000;
    border-width: 1px;
    width: 100%;
    height: 10%;
    border-radius: 5px;
`;

interface ElectionBoxProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const ElectionBox: FunctionComponent<ElectionBoxProps> = (props) => {
    return (

    <ElectionBoxView 
        onPress={props.onPress} style={props.btnStyles}>
            <Text style={styles.rightAlignedText}>Position Name</Text>

            <ElectionBoxText textStyles={props.textStyles}>{props.children}</ElectionBoxText>
    </ElectionBoxView>

    );
}

export default ElectionBox;