import { Flex, Box, Text, Image, Link, Heading } from "@chakra-ui/react";

const Panel = ({ title, description, href }) => {
  return (
    <Link href={href} _hover={{ transform: "translateY(-5px)" }}>
      <Box p={4} bg="white" rounded="lg" boxShadow="lg">
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
            title="Panel 1"
            description="Description for Panel 1"
            href="#"
          />
        </Box>
        <Box
         w={{ base: "100%", md: "48%" }} 
         p={{ base: 2, md: 4 }}>
          <Panel
            title="Panel 2"
            description="Description for Panel 2"
            href="#"
          />
        </Box>
        <Box
         w={{ base: "100%", md: "48%" }} 
         p={{ base: 2, md: 4 }}>
          <Panel
            title="Panel 3"
            description="Description for Panel 3"
            href="#"
          />
        </Box>
        <Box
         w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Panel 4"
            description="Description for Panel 4"
            href="#"
          />
        </Box>
        <Box
         w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Panel 5"
            description="Description for Panel 5"
            href="#"
          />
        </Box>
        <Box
         w={{ base: "100%", md: "48%" }}
          p={{ base: 2, md: 4 }}>
          <Panel
            title="Panel 6"
            description="Description for Panel 6"
            href="#"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

