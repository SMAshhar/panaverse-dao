import { useEffect, useRef } from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { gsap } from "gsap";

export const Intro = () => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const backgroundRef = useRef(null);
  const foregroundRef = useRef(null);

  useEffect(() => {
    // Create timeline animation with GSAP
    const tl = gsap.timeline();

    // Animate the title and description text elements
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    ).fromTo(
      descriptionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    );

    // Animate the background and foreground elements
    tl.fromTo(
      backgroundRef.current,
      { x: "-100%" },
      { x: "0%", duration: 3 },
      "-=1"
    ).fromTo(
      foregroundRef.current,
      { x: "100%" },
      { x: "0%", duration: 3 },
      "-=3"
    );
  }, []);

  return (
    <Box
      position="relative"
      width="100%"
      height={["40vh","60vh"]} // Subtract header height
      overflow="hidden"
    >
      {/* <Box display={['none','none', 'none' ]} position="absolute" top={[0, -350]} left={[0,-250]} right={0}>
        <Image src='/image/red-p-logo.png' alt='warmhole' />
      </Box>  */}
      <Box position="absolute" top={0} left={0} right={0}>
        <Image src='/image/gatesToElysium.jpg' alt='warmhole' w={'full'} />
      </Box>
      <Box ref={foregroundRef} display={['none','none', 'flex' ]} position="absolute" top={[0, -350]} left={[0,-250]} right={0}>
        <Image src='/image/red-p-logo.png' alt='warmhole' />
      </Box> 
      <Box
        position={["relative","absolute"]}
        top={["40%","50%"]}
        left={["50%","50%"]}
        transform="translate(-50%, -50%)"
        textAlign="center"
      >
        <Text ref={titleRef} textAlign={'center'} fontSize={["3xl","6xl"]} fontWeight="bold" mb={4} textColor='whiteAlpha.900'>
          Welcome to the Panaverse DAO
        </Text>
        <Text ref={descriptionRef} fontSize="xl" fontWeight="bold" textColor='whiteAlpha.900'>
          Discover a new world of possibilities
        </Text>
      </Box>
    </Box>
  );
};
