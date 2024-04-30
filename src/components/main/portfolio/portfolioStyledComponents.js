import styled from "styled-components";
import { Box } from "../../styled";

const PorfolioContainer = styled(Box)`
  max-width: ${({theme}) => theme.spacing(250)};
`;

export {
  PorfolioContainer
};