import React from 'react';
import { Anchor, Box, FlexBox, FlexBoxColumn, Image, Text, TitleSmall, TitleXSmall } from '../../styled';
import { AboutContainer } from './aboutStyledComponents';
import { Quote } from '../../custom/quote';
import { useMediaQuery } from '../../../hooks';

function About() {
  const { isDesktop } = useMediaQuery();
  const IntroComponent = isDesktop ? FlexBox : FlexBoxColumn;
  return (
    <FlexBox $center $p={[0, 5]}>
        <AboutContainer>
            <Quote author="The Gallery Shop" image="https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/studio.jpeg" imageWidth={200}>"Robert Caron is a traditional oil painter known for his photo realistic paintings full of vibrant colors. His sweeping nature scenes are both realistic and magical, giving one a sense of true outdoor scene combined with the feeling of something beautifully ephemeral." </Quote>
            
            <IntroComponent $p={isDesktop? [0] : [0, 0, 7, 0]} $center={!isDesktop}>
              <Box $p={isDesktop? [0] : [0, 0, 5, 0]}>
                <Text>Since arriving on the professional scene in 2000, I’ve worked hard to capture and intrigue the art community. I gather much of my inspiration from personal experiences, the environment and cultures around the world. Even though I create primarily for myself, my work has been well received by buyers and critics alike; a fact I don’t take lightly. If you would like to talk about working together, or if you have a specific project you would like to propose, please do not hesitate to <Anchor href="/contact">contact me.</Anchor></Text>
              </Box>
              <Image src="https://cdn.jsdelivr.net/gh/jocaron27/equidel/public/assets/about_photo.jpeg" width={isDesktop ? '100%' : 300} />
            </IntroComponent>
            
            <Box $p={[0, 0, 7, 0]}>
              <Box $p={[0, 0, 3, 0]}>
                <TitleXSmall>My passion</TitleXSmall>
              </Box>
              <Text>What motivates me into painting is to communicate a visual emotion be it from a rustic scene, a symbolic vista, a landscape, or anything life brings across my path that can be cristalized into eternal impression though the medium of oil painting. As layers of pigment are applied to the canvas, a visual poem takes life for all to enjoy. When a painting finds its lasting owner, a new relation begins with the artistic creation and the words of the french poet Lamartine reveal their true meaning:</Text>
              <Text>"Objets inanimés, avez-vous donc une âme?" (Inanimate objects, do you have a soul?)</Text>
            </Box>
            
            <Box $p={[7, 0]}>
              <Box $p={[0, 0, 3, 0]}>
                <TitleXSmall>Highest quality oil paint</TitleXSmall>
              </Box>
              <Text>My oil paintings use the highest quality pigments from Grumbacher, Winston & Newton, and Gamblin. Each painting initiates from an inspiration, either a moving scene, person, landscape, or story. I take my time for my paintings. None of the hastily made projects for quick bucks. Each painting starts with a sketch, imprimatur, underpainting, and many layers of paint to create the best visual experience. Sometimes using photo reference, sometimes painting directly from observation of the subject.</Text>
            </Box>
            
            <Box $p={[7, 0]}>
              <Box $p={[0, 0, 3, 0]}>
                <TitleXSmall>Featured at local galleries</TitleXSmall>
              </Box>
              <Text>My paintings have been on exposition at The Gallery Shop, in Oakland, Western Maryland. Summer studio tour each year in the last weekend of July have been a tradition in our neck of the woods. Studio visits by appointment are also available. Please inquire.</Text>
            </Box>
        </AboutContainer>
    </FlexBox>
  );
};

export default About;