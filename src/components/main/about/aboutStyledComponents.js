import styled from "styled-components";
import { Box } from "../../styled";

const AboutContainer = styled(Box)`
  max-width: ${({theme}) => theme.spacing(250)};
`;

const QuoteContainer = styled(Box)`
  position: relative;
  ${({isDesktop}) => isDesktop && `right: 50px;`}
`

export {
  AboutContainer,
  QuoteContainer,
};