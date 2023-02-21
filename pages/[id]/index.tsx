
import { Box, Container, Heading, Image, VStack, Button, Stack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getContent, PageContent } from 'components/dynamicblock'
import { Header } from 'components/header'
import Footer from 'components/footer'

interface PageProps {
    content: PageContent
}

export default function Page({ content }: PageProps) {
    const router = useRouter()
    const Id = content.id

    if (router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Header />
            <VStack align={'center'} w='full'>
                <Image src={content.image} />
            </VStack>
            <Box py="20" alignContent={'center'}>
                <Container maxW="container.lg">
                    <Heading as="h1" mb="6" fontSize={[50, 70]}>
                        {content.heading}
                    </Heading>
                    <Box fontSize={[10, 20]} py={5}>{content.description}</Box>
                    <Heading pt={20}>Quarter IV</Heading>
                    <Box fontSize={[10, 20]} py={5}>{content.outline}</Box>
                    <Heading pt={20}>Quarter V</Heading>
                    <Box fontSize={[10, 20]} py={5}>{content.outline1}</Box>
                </Container>
                <Stack align={'center'} py={20}>
                    <Button onClick={(() => router.push(`https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing`))}>Click for more details</Button>
                </Stack>
            </Box>
            <Footer />
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const contents = getContent()

    const paths = contents.map((content) => ({
        params: { id: content.id.toString() },
    }))

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    const id = params?.id

    if (!id) {
        return { notFound: true }
    }

    const contents = getContent()
    const content = contents.find((content) => content.id === Number(id))

    if (!content) {
        return { notFound: true }
    }

    return { props: { content } }
}
