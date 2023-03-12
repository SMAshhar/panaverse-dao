import { Start } from 'components/core'
import React from 'react'
import { Stack } from '@chakra-ui/react'
import { Header } from 'components/header'
import Footer from 'components/footer'


export default function Starting() {
    return (
        <Stack>
            <title>Core Qs</title>
            <Header />
            <Start />
            <Footer />
        </Stack>
    )
}