import React from 'react'
import { Box, Text, Image } from '@chakra-ui/react'
import { Start } from 'components/core'
import { Header } from 'components/header'
import Footer from 'components/footer'

export default function About() {
    return (
        <Box>
            <Header />
            <Box
                position="relative"
                width="full"
                height="60vh" // Subtract header height
                overflow="hidden"
            >
                <Box position="absolute" top={0} left={0} right={0}>
                    <Image display={['none', 'flex']} src='/image/starting.jpg' alt='warmhole' w={'full'} />
                </Box>
                <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    textAlign="center"
                >
                    <Text textAlign={{ base: 'left', md: 'center' }} fontSize={['2xl', '4xl', '6xl', '8xl']} fontWeight="bold" mb={4} textColor='whiteAlpha.900'>
                        Core Quarters
                    </Text>
                </Box>
            </Box>
            <Start />
            <Footer />
        </Box>
    )
}