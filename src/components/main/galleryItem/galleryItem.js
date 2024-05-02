import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import { Box, FlexBoxColumn, Text, TextCaption } from '../../styled';
import { GalleryItemContainer, GalleryImage, OverlayContainer, ImageCaptionContainer, ModalImage } from './galleryItemStyledComponents';
import { Overlay } from '../../common';

function GalleryItem({
  imageName,
  imageSize,
  imageMedium,
  fileName,
}) {
    const imageUrl = `https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/${fileName}`;
    const [modalOpen, setModalOpen] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlayVisibility = () => {
      setOverlayVisible(!overlayVisible);
    };

    useEffect(() => {
      if (modalOpen) {
        setOverlayVisible(false);
      }
    }, [modalOpen]);

    const OverlayComponent = () => overlayVisible && !modalOpen ? (
      <OverlayContainer onClick={() => setModalOpen(true)}>
          <Text>{imageName}</Text>
          <TextCaption>{imageSize}</TextCaption>
          <TextCaption>{imageMedium}</TextCaption>
          <Box $m={[10, 0, 0, 0]}>
            <Text>Click to open in full size</Text>
          </Box>
      </OverlayContainer>
    ) : null;

    return (
        <GalleryItemContainer
          onMouseEnter={toggleOverlayVisibility} 
          onMouseLeave={toggleOverlayVisibility}
        >
          <Overlay overlayComponent={OverlayComponent}>
            <GalleryImage imageUrl={imageUrl} /> 
          </Overlay>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)} center>
            <FlexBoxColumn>
              <Text>{imageName}</Text>
              <Box $p={[2, 0]}>
                <ModalImage src={imageUrl} />
              </Box>
              <ImageCaptionContainer>
                <TextCaption>{imageSize}</TextCaption>
                <TextCaption>{imageMedium}</TextCaption>
              </ImageCaptionContainer>
            </FlexBoxColumn>
          </Modal> 
        </GalleryItemContainer>
    );
};

export default GalleryItem;