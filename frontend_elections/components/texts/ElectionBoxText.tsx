import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from "../colors";

import {TextProps} from "./types";

const StyledText = styled.Text`
    font-size: 20px;
    color: ${colors.black};
    text-align: left;
    margin-bottom: 4%;
    margin-top: 1%;
`

const ElectionBoxText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default ElectionBoxText;