import styled from "styled-components";
import { Box } from "../../styled";

const PorfolioContainer = styled(Box)`
  max-width: ${({theme}) => theme.spacing(300)};
`;

const HorizontalLine = styled(Box)`
  line-height: .7em;
  margin-top: -0.7em;
  margin-bottom: 6em;
  font-size: .9em;
  border-bottom: 1px solid rgba(0,0,0,.1);
  border-bottom-width: 2px;
`;

export {
  PorfolioContainer,
  HorizontalLine,
};