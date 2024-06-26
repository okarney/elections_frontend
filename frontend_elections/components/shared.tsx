import {Dimensions} from "react-native";
import styled from "styled-components/native";
import {colors} from "./colors";

export const Container = styled.View `
    flex: 1;
    align-items: center;
    background-color: ${colors.white};

`;

export const ScreenWidth = Dimensions.get("window").width;
export const ScreenHeight = Dimensions.get("window").height;
