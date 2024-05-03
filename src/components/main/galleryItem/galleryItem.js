import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Modal } from 'react-responsive-modal';
import { Box, FlexBoxColumn, Text, TextCaption } from '../../styled';
import { GalleryItemContainer, GalleryImage, OverlayContainer, ImageCaptionContainer, ModalImage } from './galleryItemStyledComponents';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { Icon } from '@mui/material';
import { Overlay } from '../../common';
import { useSearchParams } from 'react-router-dom';

function GalleryItem({
  imageName,
  imageSize,
  imageMedium,
  fileName,
}) {
    const imageUrl = `https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/${fileName}`;
    const [modalOpen, setModalOpen] = useState(false);
    const [overlayVisible, setOverlayVisible] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const imageRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();

    const toggleOverlayVisibility = () => {
      setOverlayVisible(!overlayVisible);
    };

    const addCurrentImageToUrl = useCallback(() => {
      setSearchParams({
        image: fileName,
      });
    }, [fileName]);

    const resetUrl = () => {
      setSearchParams();
    };

    useEffect(() => {
      setOverlayVisible(false);
    }, [modalOpen]);

    useEffect(() => {
      if (!modalOpen && searchParams.get('image') === fileName) {
        setModalOpen(true);
      }
    }, [modalOpen, fileName, setModalOpen]);

    useEffect(() => {
      if (imageRef.current && imageLoaded) {
        const {width, height}  = imageRef.current.getBoundingClientRect();
        setWidth(width);
        setHeight(height);
      }
    }, [imageLoaded]);

    const OverlayComponent = () => overlayVisible && !modalOpen ? (
      <OverlayContainer overlayWidth={width} overlayHeight={height} onClick={() => {
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
            <GalleryImage src={imageUrl} onLoad={() => setImageLoaded(true)} ref={imageRef} /> 
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