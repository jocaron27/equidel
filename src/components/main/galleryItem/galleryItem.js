import React, { useState, useEffect, useCallback } from 'react';
import { Modal } from 'react-responsive-modal';
import { Box, FlexBoxColumn, Text, TextCaption } from '../../styled';
import { GalleryItemContainer, GalleryImage, OverlayContainer, ImageCaptionContainer, ModalImage } from './galleryItemStyledComponents';
import { Overlay } from '../../common';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Icon } from '@mui/material';

function GalleryItem({
  imageName,
  imageSize,
  imageMedium,
  fileName,
}) {
    const currentImage = new URLSearchParams(window.location.search)?.get('image');
    const imageUrl = `https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/${fileName}`;
    const [modalOpen, setModalOpen] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlayVisibility = () => {
      setOverlayVisible(!overlayVisible);
    };

    const addCurrentImageToUrl = useCallback(() => {
      const url = new URL(window.location.origin);
      url.searchParams.set("image", fileName);
      history.pushState({}, "", url);
    }, [fileName]);

    const resetUrl = () => {
      const url = new URL(window.location.origin);
      history.pushState({}, "", url);
    };

    useEffect(() => {
      if (modalOpen) {
        setOverlayVisible(false);
      }
    }, [modalOpen]);

    useEffect(() => {
      if (!modalOpen && currentImage && currentImage === fileName) {
        setModalOpen(true);
      }
    }, [currentImage, fileName, setModalOpen]);

    const OverlayComponent = () => overlayVisible && !modalOpen ? (
      <OverlayContainer onClick={() => {
        setModalOpen(true);
        addCurrentImageToUrl();
      }}>
        <FlexBoxColumn $p={[3]} $center>
          <Text>{imageName}</Text>
          <TextCaption>{imageSize}</TextCaption>
          <TextCaption>{imageMedium}</TextCaption>
          <Box $m={[10, 0, 0, 0]}>
            <Icon component={OpenInNewIcon}/>
          </Box>
        </FlexBoxColumn>
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

          <Modal open={modalOpen} onClose={() => {
            setModalOpen(false);
            resetUrl();
          }} center>
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