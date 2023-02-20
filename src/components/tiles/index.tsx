import { Flex, Box, Text, Image, Link, Heading } from "@chakra-ui/react";

const Panel = ({ title, description, href }) => {
  return (
    <Link href={href} _hover={{ transform: "translateY(-15px)" }}>
      <Box p={8} bg="gray.800" textColor={'whiteAlpha.900'} rounded="lg" boxShadow="lg">
        <Heading size="lg" mb={2}>
          {title}
        </Heading>
        <Text fontSize="md">{description}</Text>
      </Box>
    </Link>
  );
};

export const Tiles = () => {
  return (
    <Flex
      width={'full'}
      backgroundImage="url('/image/megast.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="100%"
        maxW="1200px"
        m="auto"
        flexWrap="wrap"
        justifyContent="center"
        mt={{ base: 8, md: 16 }}
        mb={{ base: 8, md: 16 }}
        px={{ base: 8, md: 0 }}
      >
        <Box
          w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Web 3.0 (Blockchain) and Metaverse Specialization"
            description="This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences 
            for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized 
            distributed blockchains with 3D metaverse client experiences"
            href="/1"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Artificial Intelligence (AI) and Deep Learning Specialization"
            description="The AI and Deep Learning Specialization is a foundational program that will aid in your comprehension of deep 
            learning's potential, difficulties, and effects as well as equip you to take part in the creation of cutting-edge AI technology.
            The AI and Deep Learning specialization focuses on building and deploying intelligent APIs"
            href="/2"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Cloud-Native Computing Specialization"
            description="Cloud-native architecture and technologies are an approach to designing, constructing, and operating workloads 
            that are built in the cloud and take full advantage of the cloud computing model. Cloud-native technologies empower organizations 
            to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds."
            href="/3"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Ambient Computing and IoT Specialization"
            description="Ambient computing, also commonly referred to as ubiquitous computing, is the concept of blending computing 
            power into our everyday lives in a way that is embedded into our surroundings - invisible but useful. The Ambient Computing 
            and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, 
            and Embedded Devices."
            href="/4"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Genomics and Bioinformatics Specialization"
            description="Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is 
            structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to 
            genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries
            and applications."
            href="/5"
          />
        </Box>
        <Box
          w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Network Programmability and Automation Specialization"
            description="More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network 
            automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more
            adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies."
            href="/6"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

