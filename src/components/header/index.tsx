import { HStack, Box, Button, Link, Flex, useColorMode } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <Flex
            width={'full'}
            flex={1}
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
                <Box p={16}>
                    <Link href="/">
                        <a>
                            <img src="/image/panaverse80_80.png" alt="Logo" />
                        </a>
                    </Link>
                </Box>

                <Box display={{ base: "none", md: "flex" }} width={{ base: "auto", md: "auto" }} alignItems="center">
                    <Link href="/">
                        <Button as="a" variant="ghost" aria-label="Home">Home</Button>
                    </Link>
                    <Link href="/admission">
                        <Button as="a" variant="ghost" aria-label="Admission">Admission</Button>
                    </Link>
                    <Link href="/about">
                        <Button as="a" variant="ghost" aria-label="About">About</Button>
                    </Link>
                </Box>

                <Box display={{ base: "flex", md: "none" }}>
                    <Button variant="ghost" aria-label="Menu">
                        <svg fill={colorMode === "light" ? "black" : "gray.100"} width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </Button>
                </Box>
            </HStack>
            <Flex>
                <Box display={{ base: "none", md: "flex" }} width={{ base: "auto", md: "auto" }} px={10} alignItems="center">
                    <Link href="/signup">
                        <Button as="a" variant="solid" colorScheme="cyan" ml={2}>Sign Up</Button>
                    </Link>
                    <Link href="/login">
                        <Button as="a" variant="outline" ml={2} href='/login' >Log In</Button>
                    </Link>
                    <Button m={3} variant="ghost" onClick={toggleColorMode} aria-label="Toggle color mode">
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Box>

            </Flex>
            {/* links */}
            {/* login/signin */}


        </Flex>
    )
}