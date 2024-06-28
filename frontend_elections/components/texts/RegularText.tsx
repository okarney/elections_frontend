import React, {FunctionComponent} from "react";
import styled from "styled-components/native";
import {colors} from "../colors";

import {TextProps} from "./types";

const StyledText = styled.Text`
    font-size: 20px;
    color: ${colors.black};
    text-align: left;
`

const RegularText: FunctionComponent<TextProps> = (props) => {
    return <StyledText style={props.textStyles}>{props.children}</StyledText>;
};

export default RegularText;