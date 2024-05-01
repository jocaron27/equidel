import React from 'react';
import { FlexBox, FlexBoxColumn, Image, TextCaption, TitleMedium } from '../../styled';
import { QuoteBorderOverlay, AuthorText, QuoteIcon } from './quoteStyledComponents';
import { useMediaQuery } from '../../../hooks';

function Quote({
  children,
  author,
  image,
  imageWidth,
  borderWidth,
  borderHeight,
}) {
    const isDesktop = useMediaQuery();
    const QuoteContainer = isDesktop ? FlexBox : FlexBoxColumn;
    return (
        <QuoteContainer $itemsPerRow={2} $p={[10]} $center>
          {image && <Image src={image} width={imageWidth}/>}
          <FlexBoxColumn $center $p={[15]}>
            <FlexBox $center>
              <QuoteIcon />
            </FlexBox>
            <FlexBox $center $m={[0, 0, 5, 0]}>
              <TextCaption>{children}</TextCaption>
            </FlexBox>
            <FlexBox $center>
              <AuthorText>— {author} —</AuthorText>
            </FlexBox>
          </FlexBoxColumn>
          {isDesktop && !!image && <QuoteBorderOverlay borderWidth={borderWidth} borderHeight={borderHeight} />}
        </QuoteContainer>
    );
};

export default Quote;