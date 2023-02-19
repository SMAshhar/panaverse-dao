import { Box, Button, Heading } from '@chakra-ui/react';
import Footer from 'components/footer';
import { Header } from 'components/header';

import { data } from './data';

export default function DynamicBlock() {
  return (
    <Box>

      
      {data.map((boxData, index) => (
        <Box key={index} p={4} my={4} borderWidth={1} rounded="md">
          <Heading as="h2" size="md" mb={2}>
            {boxData.title}
          </Heading>
          <Box mb={2}>{boxData.description}</Box>
          <Button as="a" href={boxData.fileUrl} target="_blank">
            Download File
          </Button>
        </Box>
      ))}
    
    </Box>
  );
}