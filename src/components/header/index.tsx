import React from 'react'
import { HStack, Box, Button, Link, Flex, useColorMode, VStack, IconButton } from '@chakra-ui/react'
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import { useState, useEffect } from 'react'

export const Header = () => {
    const [isMounted, setIsMounted] = useState(false)
    const { colorMode, toggleColorMode } = useColorMode()
    const [display, changeDisplay] = useState('none')

    useEffect(() => {
        setIsMounted(true)
    }, [])
    return (
        <React.Fragment>
            {isMounted && (

                <Flex
                    width={'full'}
                    height={20}
                    // flex={1}
                    overflow='hidden'
                    bg={colorMode === "light" ? "gray.100" : "gray.800"}
                    color={colorMode === "light" ? "black" : "gray.100"}>
                    <HStack
                        width={'full'}
                        key={colorMode}
                        flex={1}
                        overflow='hidden'
                        bg={colorMode === "light" ? "gray.100" : "gray.800"}
                        color={colorMode === "light" ? "black" : "gray.100"}
                    >
                        <Box p={{base:8, md:16}}>
                            <Link href="/">
                                <a>
                                    <img src="/image/panaverse80_80.png" alt="Logo" width={40} />
                                </a>
                            </Link>
                        </Box>
                        <Box display={{ base: "none", md: "flex" }} width={{ base: "auto", md: "auto" }} alignItems="center">
                            <Link href="/">
                                <Button as="a" variant="ghost" aria-label="Home">Home</Button>
                            </Link>
                            <Link href="/login">
                                <Button as="a" variant="ghost" aria-label="Admission">Admission</Button>
                            </Link>
                            <Link href="/about">
                                <Button as="a" variant="ghost" aria-label="About">About</Button>
                            </Link>
                        </Box>
                    </HStack>
                    <Flex>
                        <Box display={{ base: "none", md: "flex" }} width={{ base: "auto", md: "auto" }} px={10} alignItems="center">
                            <Link href='https://www.piaic.org'>
                                <Button as='a' variant={'ghost'} aria-label='piaic'> PIAIC</Button>
                            </Link>
                            {/* <Link href="/signup">
                                <Button as="a" variant="outline" colorScheme="cyan" ml={2}>Sign Up</Button>
                            </Link> */}
                            <Link href="/login">
                                <Button as="a" variant="outline" ml={2} colorScheme="cyan" href='/login' >Log-In / Sign-up</Button>
                            </Link>
                        </Box>
                        <Flex align='center'>
                            <IconButton
                                aria-label='Open Menu'
                                size='lg'
                                mr={2}
                                icon={<HamburgerIcon />}
                                display={{ base: 'flex', md: 'none' }}
                                onClick={() => changeDisplay('flex')}
                            />
                            <Button m={3} variant="ghost" onClick={toggleColorMode} aria-label="Toggle color mode">
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>
                        </Flex>
                        <Flex
                            w='100vw'
                            bgColor={'gray.50'}
                            zIndex={20}
                            h='100vh'
                            position='fixed'
                            top='0'
                            left='0'
                            overflow='auto'
                            flexDir='column'
                            display={display}
                            bg={colorMode === "light" ? "gray.100" : "gray.800"}
                            color={colorMode === "light" ? "black" : "gray.100"}
                        >
                            <Flex justify={'flex-end'}>
                                <IconButton
                                    mt={2}
                                    mr={2}
                                    aria-label='Close Menu'
                                    size='lg'
                                    icon={
                                        <CloseIcon />
                                    }
                                    onClick={() => changeDisplay('none')}
                                />
                            </Flex>
                            <Flex
                                direction='column'
                                align='center'
                            >
                                <VStack width={{ base: "auto", md: "auto" }} alignItems="center">
                                    <Link href="/">
                                        <Button as="a" variant="ghost" aria-label="Home">Home</Button>
                                    </Link>
                                    <Link href="/login">
                                        <Button as="a" variant="ghost" aria-label="Admission">Admission</Button>
                                    </Link>
                                    <Link href="/about">
                                        <Button as="a" variant="ghost" aria-label="About">About</Button>
                                    </Link>
                                </VStack>
                                <VStack width={{ base: "auto", md: "auto" }} px={10} alignItems="center">
                                    <Link href='https://piaic.org'>
                                        <Button as="a" variant="ghost" aria-label="PIAIC">PIAIC</Button>
                                    </Link>
                                    {/* <Link href="/login">
                                        <Button as="a" variant="outline" colorScheme="cyan" ml={2}>Sign Up</Button>
                                    </Link> */}
                                    <Link href="/login">
                                        <Button as="a" variant="outline" ml={2} href='/login' >Log-In / Sign-up</Button>
                                    </Link>
                                </VStack>
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* links */}
                    {/* login/signin */}


                </Flex>
            )
            }</React.Fragment>
    )
}