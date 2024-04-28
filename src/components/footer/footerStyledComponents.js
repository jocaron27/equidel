import styled from "styled-components";
import { Card, FlexBox } from "../styled";

const FooterContainer = styled(Card)`
`;

const SocialIconContainer = styled(FlexBox)`
    ${({$isDesktop}) => $isDesktop && `justify-content: flex-end;`}
`;

export {
    FooterContainer,
    SocialIconContainer
};