import styled from "styled-components";
import { Box, Image, TitleSmall } from "../../styled";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const QuoteBorderOverlay = styled(Box)`
  border-radius: 2px;
  ${({theme}) => `border: 4px solid ${theme.palette.background.dark}`};
  ${({width}) => `width: ${width}px`};
  ${({height}) => `height: ${height}px`};
`;

const AuthorText = styled(TitleSmall)`
  font-size: 12px;
`;

const QuoteIcon = styled(FormatQuoteIcon)`
    width: 60px !important;
    height: 60px !important;
    ${({theme}) => `color: ${theme.palette.text.secondary}`};
`;

const QuoteImage = styled(Image)`
  max-width: 100%;
`

export {
  QuoteBorderOverlay,
  AuthorText,
  QuoteIcon,
  QuoteImage,
};