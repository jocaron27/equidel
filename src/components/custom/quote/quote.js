import React, { useEffect, useState, useRef } from 'react';
import { Box, FlexBox, FlexBoxColumn, TextCaption } from '../../styled';
import { QuoteBorderOverlay, AuthorText, QuoteIcon, QuoteImage } from './quoteStyledComponents';
import { useMediaQuery } from '../../../hooks';
import { Overlay } from '../../common';
import { OVERLAY_BORDER_MARGIN } from './quoteConsts';

function Quote({
  children,
  author,
  image,
  imageWidth,
}) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const quoteContainerRef = useRef(null);
  const { isDesktop } = useMediaQuery();
  const padding = isDesktop ? [5, 0, 10, 0] : [5, 0, 0, 0];

  const QuoteContainer = isDesktop ? FlexBox : FlexBoxColumn;
  const overlay = () => isDesktop ? <QuoteBorderOverlay width={width} height={height} /> : null;
    

  useEffect(() => {
    if (quoteContainerRef.current && imageLoaded) {
      const {width, height}  = quoteContainerRef.current.getBoundingClientRect();
      setWidth(width - OVERLAY_BORDER_MARGIN);
      setHeight(height - OVERLAY_BORDER_MARGIN);
    }
  }, [imageLoaded]);

    return (
      <Box $p={padding}>
        <Overlay overlayComponent={overlay}>
          <QuoteContainer $itemsPerRow={3} $center ref={quoteContainerRef}>
            {image && <QuoteImage src={image} width={imageWidth} onLoad={() => setImageLoaded(true)} />}
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
          </QuoteContainer>
        </Overlay>
      </Box>
    );
};

export default Quote;