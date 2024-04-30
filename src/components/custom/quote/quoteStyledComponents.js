import styled from "styled-components";
import { FlexBoxColumn, TitleSmall } from "../../styled";

const QuoteContainer = styled(FlexBoxColumn)`
  border: 1px black solid;
  border-radius: 2px;
  ${({theme}) => `outline: 1px solid ${theme.palette.background.main}`};
`;

const AuthorText = styled(TitleSmall)`
  font-size: 12px;
`

export {
  QuoteContainer,
  AuthorText,
};