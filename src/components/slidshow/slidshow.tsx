import { useState } from "react";
import { Box, Text, Button, HStack, useColorMode, Image, Flex } from "@chakra-ui/react";
// import Image from "next/image";


import { slides } from "./slide-data";

export const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (

    <Flex width="full" align={'center'} height="600px"  flex={1} backgroundColor="rgba(0, 0, 0, 0.7)">
      <Box
        
        top={0}
        left={0}
        bottom={0}
        width="40%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding="0 50px"
        backgroundColor="rgba(0, 0, 0, 0.7)"
      // bg={colorMode === "light" ? "gray.100" : "gray.800"}
      // color={colorMode === "light" ? "black" : "gray.100"}
      >
        <Text fontSize={["lg", '2xl', "3xl", "5xl"]} fontWeight="bold" color="white" mb={4} textAlign={['right', 'center']}>
          {slides[activeSlide].title}
        </Text>
        <Text fontSize={["md", 'xl', "2xl", "3xl"]} color="white" mb={4} textAlign={['right', 'center']}>
          {slides[activeSlide].description}
        </Text>
        <HStack spacing={4} align='bottom' display={['none', 'flex']}>
          {slides.map((slide, index) => (
            <Button
              key={index}
              size="sm"
              variant="ghost"
              colorScheme="whiteAlpha"
              borderColor="whiteAlpha.400"
              borderWidth={activeSlide === index ? 2 : 1}
              borderRadius={0}
              onClick={() => handleSlideClick(index)}
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </Box>
      {/* Display active slide */}
      <Box
        display={['none', 'block']}
        top={0} right={0} bottom={0}
        width="60%"
        p={8}
        // objectFit='fill'
        placeContent={'normal'}
        // position={'relative'}
        backgroundColor="rgba(0, 0, 0, 0.7)"
      >
        <Image

          src={slides[activeSlide].imageSrc}
          alt={slides[activeSlide].title}
          width={1300}
          height={600}
          objectFit="cover"
        />
      </Box>

    </Flex>
  );
};
