import { Flex, HStack, Icon, Link, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";
import NextLink from "next/link";

const Footer = () => {
    const textColor = useColorModeValue("gray.600", "gray.400");
    const iconColor = useColorModeValue("gray.600", "gray.400");
    const linkColor = useColorModeValue("gray.600", "gray.400");
    const bgColor = useColorModeValue("gray.100", "gray.800");

    return (
        <Flex
            flexDirection={'column'}
            w={'full'}
            as="footer"
            direction={["column", "row"]}
            align="center"
            justify="center"
            bg={bgColor}
            px={{ base: 4, md: 8 }}
            py={2}
        >
            <HStack>
            <NextLink href="/">
                <Image src="/image/red-p-logo-text_dao.png" alt="Logo" width={260} height={48} />
            </NextLink>

            <HStack spacing={8} mt={4}>
                <HStack spacing={2}>
                    <Icon as={FaEnvelope} color={iconColor} />
                    <Link href="mailto:education@piaic.org" color={linkColor}>
                        <Text>education@piaic.org</Text>
                    </Link>
                </HStack>

                <HStack spacing={4} px={4}>
                    <Icon as={FaPhone} color={iconColor} />
                    <Link href="tel:+923341509000" color={linkColor}>
                        <Text fontSize="sm" fontWeight="medium" color={textColor}>
                            +92 (334) 150-9000
                        </Text>
                    </Link>
                </HStack>
            </HStack>

            <HStack spacing={2} mt={4}>
                <Link href="https://github.com/panaverse" isExternal>
                    <Icon as={IoLogoGithub} boxSize={6} color={iconColor} />
                </Link>

                <Link href="https://linkedin.com" isExternal>
                    <Icon as={IoLogoLinkedin} boxSize={6} color={iconColor} />
                </Link>

                <Link href="https://twitter.com/Panaverse_edu" isExternal>
                    <Icon as={IoLogoTwitter} boxSize={6} color={iconColor} />
                </Link>

                <Link href="https://www.facebook.com/groups/panaverse/" isExternal>
                    <Icon as={IoLogoFacebook} boxSize={6} color={iconColor} />
                </Link>
            </HStack>
            </HStack>

            <Text mt={4} fontSize="sm" color={textColor} textAlign="center">
                &copy; 2023 Example Company. All rights reserved.
            </Text>
        </Flex>

    );
};

export default Footer;