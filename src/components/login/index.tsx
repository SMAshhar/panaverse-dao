import { VStack, Flex, Heading, Input, Button, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Header } from 'components/header'

export const Login = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    return (
        <VStack 
            width={'full'}
        >
        <Header />
        <Flex
            height='100vh'
            alignItems={'center'}
            justifyContent='center'
        >
            
            <Flex direction={'column'} background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Login</Heading>
                <Input placeholder='abc@def.com' variant={'filled'} mb={3} type='email'/>
                <Input placeholder='******' variant={'filled'} mb={3} type='password' />
                <Button mb={6} colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}>Log In</Button>
                <Button onClick={toggleColorMode}>{colorMode === 'light' ? 'Dark' : 'Light'}</Button>

            </Flex>

        </Flex>
        </VStack>
    )
}