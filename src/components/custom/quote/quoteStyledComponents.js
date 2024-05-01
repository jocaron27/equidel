import styled from "styled-components";
import { Box, TitleSmall } from "../../styled";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const QuoteBorderOverlay = styled(Box)`
  border: 1px black solid;
  border-radius: 2px;
  ${({theme}) => `outline: 1px solid ${theme.palette.background.main}`};
  position: absolute;
  ${({borderWidth}) => `width: ${borderWidth}px`};
  ${({borderHeight}) => `height: ${borderHeight}px`};
`;

const AuthorText = styled(TitleSmall)`
  font-size: 12px;
`;

const QuoteIcon = styled(FormatQuoteIcon)`
    width: 60px !important;
    height: 60px !important;
    ${({theme}) => `color: ${theme.palette.text.secondary}`};
`;

export {
  QuoteBorderOverlay,
  AuthorText,
  QuoteIcon,
};