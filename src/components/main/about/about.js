import React from 'react';
import { Anchor, Box, FlexBox, Text, TitleSmall } from '../../styled';
import { AboutContainer } from './aboutStyledComponents';

function About() {
    return (
      <FlexBox $center $p={[0, 5]}>
          <AboutContainer>
              <Text>Since arriving on the professional scene in 2000, I’ve worked hard to capture and intrigue the art community. I gather much of my inspiration from personal experiences, the environment and cultures around the world. Even though I create primarily for myself, my work has been well received by buyers and critics alike; a fact I don’t take lightly. If you would like to talk about working together, or if you have a specific project you would like to propose, please do not hesitate to <Anchor href="/contact">contact me.</Anchor></Text>
              
              <Box $p={[5, 0]}>
                <TitleSmall> Your visual pleasure is my passion</TitleSmall>
                <Text>What motivates me into painting is to communicate a visual emotion be it from a rustic scene, a symbolic vista, a landscape, or anything life brings across my path that can be cristalized into eternal impression though the medium of oil painting. As layers of pigment are applied to the canvas, a visual poem takes life for all to enjoy. When a painting finds its lasting owner, a new relation begins with the artistic creation and the words of the french poet Lamartine reveal their true meaning:</Text>
                <Text>"Objets inanimés, avez-vous donc une âme?" (Inanimate objects, do you have a soul?)</Text>
              </Box>
              
              <Box $p={[5, 0]}>
                <TitleSmall>Highest quality oil paint</TitleSmall>
                <Text>My oil paintings use the highest quality pigments from Grumbacher, Winston & Newton, and Gamblin. Each painting initiates from an inspiration, either a moving scene, person, landscape, or story. I take my time for my paintings. None of the hastily made projects for quick bucks. Each painting starts with a sketch, imprimatur, underpainting, and many layers of paint to create the best visual experience. Sometimes using photo reference, sometimes painting directly from observation of the subject.</Text>
              </Box>
              
              <Box $p={[5, 0]}>
                <TitleSmall>Featured at local galleries</TitleSmall>
                <Text>My paintings have been on exposition at The Gallery Shop, in Oakland, Western Maryland. Summer studio tour each year in the last weekend of July have been a tradition in our neck of the woods. Studio visits by appointment are also available. Please inquire.</Text>
              </Box>
          </AboutContainer>
      </FlexBox>
    );
};

export default About;