import styled from 'styled-components';
import { theme } from '../../../theme';

export const Anchor = styled.a`
  color: ${theme.palette.text.link};
  &:hover {
    text-decoration: underline;
  }
`;