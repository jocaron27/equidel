import styled from "styled-components";
import { FlexBox, FlexBoxColumn, Image } from "../../styled";
import { GALLERY_ITEM_SIZE } from "./galleryItemConsts";

const GalleryItemContainer = styled(FlexBox)`
  width: ${({theme}) => theme.spacing(GALLERY_ITEM_SIZE)};
  height: ${({theme}) => theme.spacing(GALLERY_ITEM_SIZE)};
  cursor: pointer;
  justify-content: center;
`;

const OverlayContainer = styled(FlexBoxColumn)`
  width: ${({overlayWidth}) => overlayWidth}px;
  height: ${({overlayHeight}) => overlayHeight}px;
  background: ${({theme}) => theme.palette.background.overlay};
  color: ${({theme}) => theme.palette.text.overlay};
  justify-content: center;
  align-items: center;
`;

const GalleryImage = styled(Image)`
  max-width: ${({theme}) => theme.spacing(GALLERY_ITEM_SIZE)};
  max-height: ${({theme}) => theme.spacing(GALLERY_ITEM_SIZE)};
  object-fit: contain;
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