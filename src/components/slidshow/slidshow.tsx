import { useState, useEffect } from "react";
import { Box, Text, Button, HStack, useColorMode, Image, Flex, Fade } from "@chakra-ui/react";
// import Image from "next/image";


import { slides } from "./slide-data";

export const Slideshow = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(activeSlide => (activeSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides]);

  const handleSlideClick = (index) => {
    setActiveSlide(index);
  };

  return (

    <Flex direction={['column','column', 'row']} width="full" align={'center'} height={["200px","600px"]} flex={1} backgroundColor="rgba(0, 0, 0, 0.7)" mb={2} mt={2}>
      <Box
        height={'full'}
        top={0}
        left={0}
        bottom={0}
        width={["100%","70%","40%"]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        padding={"0 50px"}
        backgroundColor="rgba(0, 0, 0, 0.7)"
      
      // opacity={activeSlide === previousSlide ? 0 : 1}
      // bg={colorMode === "light" ? "gray.100" : "gray.800"}
      // color={colorMode === "light" ? "black" : "gray.100"}
      >
        <Text fontSize={["lg", '2xl', "3xl", "5xl"]} fontFamily='sans-serif' fontWeight="bold" color="white" mb={4} textAlign={'center'}>
          {slides[activeSlide].title}
        </Text>
        <Text fontSize={["md", 'xl', "2xl", "3xl"]} color="white" mb={4} fontFamily='sans-serif' textAlign={'center'}>
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
              textColor="whiteAlpha.900"
            >
              {index + 1}
            </Button>
          ))}
        </HStack>
      </Box>
      {/* Display active slide */}
      <Box

        display={ 'block'}
        top={0} right={0} bottom={0}
        width={["100%","80%","60%"]}
        // p={8}
        // objectFit='fill'
        placeContent={'normal'}
        // position={'relative'}
        backgroundColor="rgba(0, 0, 0, 0.7)"
        transition={"opacity 0.3s ease-in-out"}
      // opacity={activeSlide === previous? 1:0}
      >
        <Image
          src={slides[activeSlide].imageSrc}
          alt={slides[activeSlide].title}
          width={1300}
          height={[200,600]}
          objectFit="cover"
          // transition="opacity 0.3s ease-in-out"
          // transitionProperty='all'
          // transitionDuration="normal"
          // _hover={{
          //   transform: 'scale(1.1,1.1)'
          // }}
        />
      </Box>

    </Flex>
  );
};
