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
    
    leftAlignedText: {
        color: '#000000',
        fontSize: 10,
        alignSelf:"flex-start",
        marginBottom: 10,
        marginLeft: 10,
    },
  });

const ExpandElectionBoxView = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-color: #000000;
    border-width: 1px;
    width: 100%;
    height: 20%;
    border-radius: 5px;
`;

interface ExpandElectionBoxProps {
    btnStyles?: StyleProp<ViewStyle>;
    onPress: ((event: GestureResponderEvent) => void) | undefined;
    textStyles?: StyleProp<TextStyle>;
    children: React.ReactNode;
}

const ExpandElectionBox: FunctionComponent<ExpandElectionBoxProps> = (props) => {
    return (

    <ExpandElectionBoxView 
        onPress={props.onPress} style={props.btnStyles}>
        
        <ElectionBoxText textStyles={props.textStyles}>{props.children}</ElectionBoxText>
  
        <Text style={styles.leftAlignedText}>Currently: Name of Person</Text>
        <Text style={styles.leftAlignedText}>Next Election: Date</Text>
        <Text style={styles.leftAlignedText}>Canidates: Person1 and Person2</Text>

    </ExpandElectionBoxView>

    );
}

export default ExpandElectionBox;