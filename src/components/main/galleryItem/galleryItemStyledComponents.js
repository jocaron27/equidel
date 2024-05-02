import styled from "styled-components";
import { Box, Card, FlexBox, FlexBoxColumn, Image } from "../../styled";

const GalleryItemContainer = styled(Box)`
  width: ${({theme}) => theme.spacing(75)};
  height: ${({theme}) => theme.spacing(75)};
  cursor: pointer;
`;

const OverlayContainer = styled(FlexBoxColumn)`
  width: ${({theme}) => theme.spacing(75)};
  height: ${({theme}) => theme.spacing(75)};
  background: ${({theme}) => theme.palette.background.overlay};
  color: ${({theme}) => theme.palette.text.overlay};
  justify-content: center;
  align-items: center;
`;

const GalleryImage = styled(Card)`
  background-color: ${({theme}) => theme.palette.background.main};
  background-image: ${({imageUrl}) => `url(${imageUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: ${({theme}) => theme.spacing(75)};
  height: ${({theme}) => theme.spacing(75)};
`;

const ModalImage = styled(Image)`
  max-width: 100%;
  max-height: calc(100vh - 150px);
`;

const ImageCaptionContainer = styled(FlexBox)`
  justify-content: space-between;
`;

export {
  GalleryItemContainer,
  GalleryImage,
  ModalImage,
  OverlayContainer,
  ImageCaptionContainer,
};