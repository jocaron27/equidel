import styled from "styled-components";
import { Box, FlexBox, SemanticButton } from "../styled";
import { HorizontalLine } from "../header/headerStyledComponents";

const MenuContainer = styled(FlexBox)`
    justify-content: flex-end;
`;

const MenuItemContainer = styled(Box)`

`;

const MenuItemButton = styled(SemanticButton)`
`;

const MenuHoverLine = styled(Box)`
    position: relative;
    ${({theme}) => `top: ${theme.spacing(0)}`};
    ${({theme, isActive}) => `border-bottom: 1px solid ${isActive ? theme.palette.text.primary : theme.palette.background.main}`};
    transition: .2s ease-in-out;

    ${MenuItemContainer}:hover & {
      ${({theme}) => `border-bottom: 1px solid ${theme.palette.text.primary}`};
      ${({theme}) => `top: ${theme.spacing(2)}`};
    }
`;

export {
    MenuContainer,
    MenuItemContainer,
    MenuItemButton,
    MenuHoverLine
};