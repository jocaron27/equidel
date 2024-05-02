import styled from "styled-components";
import { Box, Card, Title } from "../styled";

const HeaderContainer = styled(Card)`
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
`

export {
    HeaderContainer,
    HorizontalLine,
    HeaderTitle,
};