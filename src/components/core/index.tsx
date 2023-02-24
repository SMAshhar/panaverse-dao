import { Heading, Stack, VStack, Text, Image, Link, Button } from '@chakra-ui/react'

export const Start = () => {
    return (
        <VStack w='full'>
            <VStack align={'center'} w={'70%'}>
                <Heading fontSize={['2xl', '4xl', '6xl', '8xl']} w='full'> Core Quarters </Heading>
                <Heading fontSize={['xl', '3xl', '5xl', '6xl']} w='full'>Quarter I</Heading>
                <Heading fontSize={['lg', '2xl', '4xl', '6xl']} w='full'>CS-101: Object-Oriented Programming using TypeScript</Heading>
                <Text fontSize={['sm', 'lg', '2xl', '4xl']}>Duration 13 weeks</Text>
                <Stack>
                    <Heading fontSize={['sm', 'lg', '2xl', '4xl']}>Course Description:</Heading>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>
                        We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
                    </Text>
                </Stack>

                <Stack textAlign={'left'} w='full' pb='50px'>
                    <Heading fontSize={['sm', 'lg', '2xl', '4xl']}>Course Outline:</Heading>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>1. HTML and CSS (Homework) </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>2. Web 3.0 and Metaverse Theory </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>3. Fundamentals of Typescript </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>4. Object-Oriented Programming with TypeScript </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>5. TypeScript for React </Text>
                </Stack>
            </VStack>
            <Image src='/image/about.jpg' w={'full'} />
            <VStack align={'center'} w={'70%'}>
                <Heading fontSize={['xl', '3xl', '5xl', '6xl']} w='full'>Quarter II</Heading>
                <Heading fontSize={['lg', '2xl', '4xl', '6xl']} w='full'>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
                <Text fontSize={['sm', 'lg', '2xl', '4xl']}>Duration 13 weeks</Text>
                <Stack>
                    <Heading fontSize={['sm', 'lg', '2xl', '4xl']}>Course Description:</Heading>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>
                        The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                    </Text>
                </Stack>
                <Stack w={'full'}  pb='50px'>
                    <Heading fontSize={['sm', 'lg', '2xl', '4xl']}>Course Outline:</Heading>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>1. Next.js 13 Web Development </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>2. Next.js 13 using Chakra UI (Remote Zoom Class)</Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>4. API Routes with Next.js (Remote Zoom Class) </Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>5. APIs with Next.js and tRPC (Remote Zoom Class)</Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>6. SQL and Prisma</Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>7. Next.js 13 using TailwindCSS (Remote Zoom Class)</Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>8. AWS Application Composer (Remote Zoom Class)</Text>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']}>9. Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</Text>
                </Stack>
            </VStack>
            <Image src='/image/about.jpg' w={'full'} />
            <VStack align={'center'} w={'70%'} pb='100px'>
                <VStack>
                    <Heading fontSize={['xl', '3xl', '5xl', '6xl']} w='full'>Quarter III</Heading>
                    <Heading fontSize={['lg', '2xl', '4xl', '6xl']}>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
                    <Text fontSize={['sm', 'lg', '2xl', '4xl']}>Duration 13 weeks</Text>
                    <Stack>
                        <Heading fontSize={['sm', 'lg', '2xl', '4xl']}>Course Description:</Heading>
                        <Heading fontSize={['sm', 'lg', '2xl', '4xl']}>Build Full-Stack Next.js 13 Jamstack Templates/Build QraphQL</Heading>
                        <Text fontSize={['sm', 'md', 'lg', 'xl']}>
                            You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens.
                        </Text>
                    </Stack>
                </VStack>
                
                <Link mt={'50px'} href='https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing'>
                    <Button>Click for more details</Button>
                </Link>
                
            </VStack>
        </VStack >
    )
}