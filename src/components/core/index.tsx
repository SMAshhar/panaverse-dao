import { Heading, Stack, VStack, Text, Link } from '@chakra-ui/react'

export const Start = () => {
    return (
        <VStack align={'center'}>
            <Heading> Core Quarters </Heading>
            <Heading>Quarter I</Heading>
            <Heading>CS-101: Object-Oriented Programming using TypeScript</Heading>
            <Text>Duration 13 weeks</Text>
            <Stack>
                <Heading>Course Description</Heading>
                <Text>
                    We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users.
                </Text>
            </Stack>
            <Stack>
                <Heading>Course Outline</Heading>
                <Text>1. HTML and CSS (Homework) </Text>
                <Text>2. Web 3.0 and Metaverse Theory </Text>
                <Text>3. Fundamentals of Typescript </Text>
                <Text>4. Object-Oriented Programming with TypeScript </Text>
                <Text>5. TypeScript for React </Text>
            </Stack>
            <Heading>Quarter II</Heading>
            <Heading>W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform</Heading>
            <Text>Duration 13 weeks</Text>
            <Stack>
                <Heading>Course Description</Heading>
                <Text>
                The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF).
                </Text>
            </Stack>
            <Stack>
                <Heading>Course Outline</Heading>
                <Text>1. Next.js 13 Web Development </Text>
                <Text>2. Next.js 13 using Chakra UI (Remote Zoom Class)</Text>
                <Text>3. UI/UX Design with Figma, TailwindCSS, and Chakra UI (Remote  Zoom Class)</Text>
                <Text>4. API Routes with Next.js (Remote Zoom Class) </Text>
                <Text>5. APIs with Next.js and tRPC (Remote Zoom Class)</Text>
                <Text>6. SQL and Prisma</Text>
                <Text>7. Next.js 13 using TailwindCSS (Remote Zoom Class)</Text>
                <Text>8. AWS Application Composer (Remote Zoom Class)</Text>
                <Text>9. Multi-Cloud GraphQL Serverless API Development with Cloud Development Kit for Terraform (CDKTF) (Remote Zoom Class)</Text>
            </Stack>
            <Heading>Quarter III</Heading>
            <Heading>$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development</Heading>
            <Text>Duration 13 weeks</Text>
            <Stack>
                <Heading>Course Description</Heading>
                <Heading>Build Full-Stack Next.js 13 Jamstack Templates/Build QraphQL</Heading>
                <Text>
                You will be assigned to build a template which we will sell on Theme Forest and Panaverse DAO marketplace. The Panaverse DAO will receive 25% share on the sale of the template which will be used to manage the platform. An additional 15% will be spent on marketing the template. 60% of the revenues will be distributed to the developer through the Panaverse DAO in the form of Panaverse tokens. 
                </Text>
            </Stack>
        </VStack>
    )
}