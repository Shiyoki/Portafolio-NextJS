import NextLink from 'next//link'
import { Button,Container, Box, Heading, Image, Link, List, ListItem, Icon, useColorModeValue } from "@chakra-ui/react"
import Section from "../components/section"
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from "../components/paragraph"
import { BioSection, BioYear } from '../components/bio'
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

const Page = () =>{
    return(
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mt={3} mb={6} align="center">
                FullStack
            </Box>

            <Box display={{ md: 'flex' }} >
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Alejandro Garcia
                    </Heading>
                    <p>Digital Creator (Developer)</p>
                </Box>
                <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid" maxWidth="100px" display="inline-block" borderRadius="full" src="/images/ale.jpg" alt="Profile Image" />
                </Box>
            </Box>
            <Section delay={0.1}>
            <Heading as="h3" variant="section-title" mb={6}>
                Work
            </Heading>
                <Paragraph>I am a web developer with extensive knowledge in JavaScript along with his Frameworks and libraries such as React.js, Next.js, Node.js, I also use languages ​​such as Typescript and Python,
                     I have knowledge in project management and agile methodologies.</Paragraph>
                 <Box align="center" my={4}>
                     <NextLink href="/works">
                         <Button rightIcon={<ChevronRightIcon />} colorScheme="green">
                             My repository
                         </Button>
                     </NextLink>
                 </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" mb={6}>
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2000</BioYear>
                    Born in Barquisimeto, Venezuela.
                </BioSection>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Worked as a Freelancer.
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Worked as a FrontEnd Developer (VenderTuCoche.com).
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title" mb={6}>
                    Social Media
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/Shiyoki" target="_blank">
                            <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={IoLogoGithub} />}>@Shiyoki</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/alege07/" target="_blank">
                            <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={IoLogoInstagram} />}>@alege07</Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/bryan-garcia-a573661a2/" target="_blank">
                            <Button variant="ghost" colorScheme="green" leftIcon={<Icon as={IoLogoLinkedin} />}>@Bryan Garcia</Button>
                        </Link>
                    </ListItem>
                </List>
            </Section>
        </Container>
    )
    
}

export default Page