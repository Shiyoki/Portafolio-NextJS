import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="Landing Page">
            <Container>
                <Title>
                    Landing Page <Badge>2021</Badge>
                </Title>
                <P>
                    A landing page created to buy and sell vehicles from Spain
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='https://euroautos.netlify.app/#/'>
                            https://euroautos.netlify.app/#/<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link target="_blank" href='https://github.com/Shiyoki/Landing'>
                        https://github.com/Shiyoki/Landing<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJS, Tailwindcss</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/vendetucoche.jpg" />
                <WorkImage src="/images/works/vende2.jpg" />
            </Container>
        </Layout>
        
    )
}
export default Work