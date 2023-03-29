import { VStack, Flex, Heading, Text, Image, Button, Link } from '@chakra-ui/react'
import { StarIcon, MinusIcon } from '@chakra-ui/icons'

export const AfterSlides = () => {
  return (
    <VStack w="100%" >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        alignItems={'center'}
        justifyContent="space-between"
        alignContent={'center'}
        w='full'

      >
        <Image src="/image/skill.png" boxSize={{ base: '100%', md: '50%' }} objectFit="fill" w={['100%', '75%', '50%']} />
        <Flex direction="column" alignItems={'flex-start'} fontFamily='sans-serif' textColor={'whiteAlpha'} lineHeight={2} w={['90%', '75%', '40%']} m={2} h={'max'} ml={'5%'} mr='5%'>
          <Heading as="h2" size={["xl","4xl"]} mb={4}>
            Do you have what it takes?
          </Heading>
          <Text fontFamily={'sans-serif'} fontSize={{ base: 'md', md: '2xl' }} mt={{ base: '15px', md: '25px' }} alignContent='center'>
            <StarIcon /> Are you unhappy with how things are going in our country?
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <StarIcon /> Do you want your country to be leading the world?
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <StarIcon /> And become rich and an influencer in the process?
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <StarIcon /> Can you be consistent and self driven to get your wish?
          </Text>
          <Heading as="h2" size={["md","lg"]} mt={4}>
            Then follow us through the journey of becoming the biggest revolution Pakistan has seen since independance
          </Heading>
        </Flex>
      </Flex>

      <Flex
        direction={{ base: 'column', md: 'row-reverse' }}
        alignItems={'center'}
        justifyContent="space-between"
        w='full'
        mr={15}
        ml={15}
      >
        <Image src="/image/afterslide.jpg" boxSize={{ base: '100%', md: '50%' }} objectFit="fill" w={['100%', '75%', '50%']} />
        <Flex direction="column" alignItems={'flex-start' } textColor={'whiteAlpha'} fontFamily='sans-serif' lineHeight={2} w={['90%', '75%', '40%']} m={2} justifyItems={'center'} h={'full'} ml={'7%'} alignContent={'center'}>
          <Heading as="h2" size={["xl","4xl"]} mb={4} mt={4}>
            Our path...
          </Heading>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='left'>
            <StarIcon /> Everyone is to start with our three core quarters
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <StarIcon /> After the core quarters, select a specialization from the 6 fields:
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <MinusIcon />     1. Web 3 and Metaverse Specialization
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <MinusIcon />     2. Artificial Intelligence (AI) and Deep Learning Specialization
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <MinusIcon />     3. Cloud-Native Computing Specialization
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <MinusIcon />     4. Ambient Computing and IoT Specialization
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <MinusIcon />     5. Genomics and Bioinformatics Specialization
          </Text>
          <Text fontSize={{ base: 'md', md: '2xl' }} alignContent='center'>
            <MinusIcon />     6. Network Programmability and Automation Specialization
          </Text>
          <Link href='/about' fontSize={{ base: 'md', md: '2xl' }} alignContent='center' textColor={'blue.500'}>
            Click for more details
          </Link>
        </Flex>

      </Flex>
    </VStack>
  )
}

