import { VStack, Flex, Heading, Input, Button, useColorMode, useColorModeValue, Link } from '@chakra-ui/react'
import { Header  } from 'components/header'
import { useState } from 'react'

export const Login = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const formBackground = useColorModeValue("gray.100", "gray.700")
    const [isSignup, setIsSignUp] = useState(false)
    const buttonText = isSignup ? 'Sign Up' : 'Login'
    const headingText = isSignup ? 'Sign Up' : 'Login'
    const [nic, setNic] = useState('')

    const handleButtonClick = () => {
        setIsSignUp(!isSignup)
        setNic('')
    }

    return (
        <VStack
            width={'full'}
            scale={15}
        >
            
            <Flex
                height='80vh'
                alignItems={'center'}
                justifyContent='center'
            >

                <Flex direction={'column'} background={formBackground} p={12} rounded={6}>
                    <Heading mb={6}>{headingText}</Heading>
                    <Input placeholder='abc@def.com' variant={'filled'} mb={3} type='email' />
                    <Input placeholder='******' variant={'filled'} mb={3} type='password' />
                    {isSignup && (
                        <Input placeholder='NIC' variant={'filled'} mb={3} value={nic} onChange={(e) => setNic(e.target.value)} />
                    )}
                    <Button mb={6} colorScheme={colorMode === 'light' ? 'blackAlpha' : 'whiteAlpha'}>{buttonText}</Button>
                    <Link onClick={handleButtonClick} textColor='blue.500'>{isSignup ? 'login' : 'signup'}</Link>

                </Flex>

            </Flex>
        </VStack>
    )
}