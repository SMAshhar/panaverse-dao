import React from 'react'
import { Box, Flex, VStack, Image, Heading } from '@chakra-ui/react'
import { Start } from 'components/core'
import { Header } from 'components/header'

export default function About() {
    return (
        <VStack
            w={'full'}
        >
            <Header />
            <Image src='/image/starting.jpg' alt='BeTheLight' />
            <Start />
        </VStack>
    )
}