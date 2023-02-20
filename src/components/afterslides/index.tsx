import React from 'react'
import { Flex, Text, Button, Link, VStack } from '@chakra-ui/react'

export const AfterSlides = () => {
    return (
        <Flex
            direction={'column'}
            backgroundImage="url('/image/afterslide.jpg')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            w='full'
            height={1200}
            alignItems='left'
            justifyContent='center'
        >
            <Flex
                direction={'column'}
                w='40%'
                px={20}
                alignItems='left'
                justifyContent={'left'}
            >
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={50} fontWeight='bold'>HOW DOES IT WORK... </Text>
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={20} fontWeight='bold'>First three quarters are core quarters</Text>


            </Flex>
            <VStack alignItems={'left'} pt={40} px={40}>
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={50} fontWeight='bold'>Do you have what it takes?</Text>
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={20} fontWeight='bold'>Do you want to earn $$?</Text>
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={20} fontWeight='bold'>Are you more inclined to be your own Boss?</Text>
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={20} fontWeight='bold'>Can you use a keyboard?</Text>
                <Text fontFamily={'fantasy'} letterSpacing='wide' fontSize={20} fontWeight='bold'>Can you be consistent in your efforts?</Text>
            </VStack>
            <Flex
                w='full'
                h={'full'}
                justifyContent={'center'}
                alignItems='center'
            >
                <Link href="/about" >
                    <Button colorScheme={'blackAlpha'} size='lg' fontSize={50} p={20}>Click for more details</Button>
                </Link>
            </Flex>

        </Flex>

    )
}