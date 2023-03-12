import { Box, Container, Heading, Image, VStack, Button, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { contents } from 'posts/dynamicblock'
import { Header } from 'components/header'
import Footer from 'components/footer'


export default function Page() {
    const router = useRouter()
    const {id} = router.query

    const page = contents.find((x)=> x.id === Number(id));

    if (!page) {
        return <div>Loading...</div>
    }

    return (
        <>
        <title>{page.heading}</title>
            <Header />
            <VStack align={'center'} w='full'>
                <Image src={page.image} />
            </VStack>
            <Box py={["10","20" ]}alignContent={'center'}>
                <Container maxW="container.lg">
                    <Heading as="h1" mb="6" fontSize={[30, 70]}>
                        {page.heading}
                    </Heading>
                    <Box fontSize={[15, 25]} py={5}>{page.description}</Box>
                    <Heading pt={[10,20]}>Quarter IV</Heading>
                    <Box fontSize={[15, 25]} py={5}>{page.outline}</Box>
                    <Heading pt={[10,20]}>Quarter V</Heading>
                    <Box fontSize={[15, 25]} py={5}>{page.outline1}</Box>
                </Container>
                <Stack align={'center'} py={20}>
                    <Button onClick={(() => router.push(`https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing`))}>Click for more details</Button>
                </Stack>
            </Box>
            <Footer />
        </>
    )
}

//use getstaticparams instead of getstaticpath or getstaticprops
