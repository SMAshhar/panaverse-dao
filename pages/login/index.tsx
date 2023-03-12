import { VStack } from '@chakra-ui/react'
import Footer from 'components/footer'
import { Header } from 'components/header'
import { Login } from 'components/login'


const LogIn = () => (
 <VStack
  height="150vh"
  bg='black'
  width='full'
  overflow="hidden"
  spacing={0}
 >
    <title>Login/Signup</title>

  <Header />
  <Login />
  <Footer />
 
  {/* Header */}
  {/* slide show */}
  {/* Catchy about us phrase */}
  {/* tiles */}
  {/* footer */}



 </VStack>
)

export default LogIn
