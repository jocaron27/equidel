import React from 'react';
import { FlexBox, TextCaption, TitleMedium } from '../../styled';
import { QuoteContainer, AuthorText } from './quoteStyledComponents';

function Quote({ children, author }) {
    return (
      <QuoteContainer $p={[10]}>
        <FlexBox $center>
          <TitleMedium>"</TitleMedium>
        </FlexBox>
        <FlexBox $center $m={[0, 0, 5, 0]}>
          <TextCaption>{children}</TextCaption>
        </FlexBox>
        <FlexBox $center>
          <AuthorText>— {author} —</AuthorText>
        </FlexBox>
      </QuoteContainer>
    );
};

export default Quote;