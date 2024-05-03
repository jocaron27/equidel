import React, { useContext, useState } from 'react';
import { DataContext } from '../../../context';
import 'react-responsive-modal/styles.css';
import { Anchor, Box, FlexBox, FlexBoxColumn, Grid, Text } from '../../styled';
import { HorizontalLine, PorfolioContainer } from './portfolioStyledComponents';
import { Quote } from '../../custom/quote';
import { GalleryItem } from '../galleryItem';
import { theme } from '../../../theme';
import { useMediaQuery } from '../../../hooks';
import { GALLERY_ITEM_SIZE } from '../galleryItem/galleryItemConsts';

function Portfolio() {
    const { data: gallery } = useContext(DataContext);
    const { isDesktop } = useMediaQuery();
    const portfolioPadding = isDesktop ? [0] : [0, 5];
    const portfolioMargin = isDesktop ? [10, 0] : [0];
    const gridMargin = isDesktop ? [20, 0] : [10, 0];

    return (
        <FlexBox $center $m={portfolioMargin} $p={portfolioPadding}>
          <PorfolioContainer>
            <Box>
              <Text>Welcome to my studio and gallery. One of my defining principles is conveying a sense of awe through the timeless medium of oil painting, establishing an open dialogue between form and emotion in all aspects of my artwork. Look through my work to see this in action, and <Anchor href="/contact">get in touch</Anchor> for more information. Some of my paintings can be seen at <Anchor href="https://www.garrettarts.org"  target="_blank">the Gallery Shop</Anchor> in Oakland, MD.</Text>
            </Box>

            <Grid $itemSize={GALLERY_ITEM_SIZE} $gap={theme.spacing(15)} $m={gridMargin}>
              {gallery?.map((galleryItem) => (
                <GalleryItem
                  key={galleryItem.id + galleryItem.fileName}
                  imageName={galleryItem.name}
                  imageSize={galleryItem.size}
                  imageMedium={galleryItem.medium}
                  fileName={galleryItem.fileName}
                />
              ))}
            </Grid>

            <HorizontalLine />

            <Box $m={[5]}>
              <Quote author="Leonardo da Vinci" image="https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/paint.jpeg" imageWidth={550}>"The artist sees what others only catch a glimpse of." </Quote>
            </Box>
          </PorfolioContainer>
        </FlexBox>
    );
};

export default Portfolio;