import styled from "styled-components";
import { Box, Card, Image, SubTitle, Text, Title } from "../styled";

const HeaderContainer = styled(Card)`
`;

const Logo = styled(Text)`
  letter-spacing: -3px;
`;

const HorizontalLine = styled(Box)`
    line-height: .7em;
    margin-top: -0.7em;
    margin-bottom: 1.6em;
    font-size: .9em;
    border-bottom: 1px solid rgba(0,0,0,.1);
    border-bottom-width: 2px;
`;

const HeaderTitle = styled(Title)`
  text-align: center;
  font-size: 7em;
`;

const HeaderSubtitle = styled(SubTitle)`
  font-size: 1.5em;
`;

const HeaderImageContainer = styled(Box)`
  transform: rotate(-3deg);
  ${({theme}) => `background: ${theme.palette.background.medium}`};
`;

const HeaderImage = styled(Image)`
`;

export {
    HeaderContainer,
    Logo,
    HorizontalLine,
    HeaderTitle,
    HeaderSubtitle,
    HeaderImageContainer,
    HeaderImage,
};