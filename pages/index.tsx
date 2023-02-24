import { VStack, Box, Button } from '@chakra-ui/react'
import { AfterSlides } from 'components/afterslides'
import Footer from 'components/footer'
import { Header } from 'components/header'
import { Intro } from 'components/intro'
import { Slideshow } from 'components/slidshow/slidshow'
import { Tiles } from 'components/tiles'



const IndexPage = () => (
    <VStack
        // height="100vh"
        bg='black'
        width='full'
        overflow="hidden"
        spacing={0}
    >

        <Header />
        <Intro />
        <Slideshow />
        <AfterSlides />
        <Tiles />
        <Footer />



        {/* Header DONE*/}
        {/* Intro DONE */}
        {/* slide show DONE*/}
        {/* Catchy about us phrase DONE */}
        {/* tiles DONE*/}
        {/* footer DONE*/}



    </VStack>
)

export default IndexPage
