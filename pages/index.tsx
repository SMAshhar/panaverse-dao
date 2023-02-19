import { VStack, Box } from '@chakra-ui/react'
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
        <Tiles />
        


        {/* Header DONE*/}
        {/* Intro DONE */}
        {/* slide show DONE*/}
        {/* Catchy about us phrase */}
        {/* tiles */}
        {/* footer */}



    </VStack>
)

export default IndexPage
