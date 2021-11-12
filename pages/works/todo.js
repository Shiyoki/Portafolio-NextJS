import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work2 = () => {
    return(
        <Layout title="Indigo Store">
            <Container>
                <Title>
                    Indigo Store <Badge>2021</Badge>
                </Title>
                <P>
                    E-Comerce with strape 
                </P>
                <List ml={4} my={4}>     
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='https://learntodo.netlify.app/'>
                        https://learntodo.netlify.app/<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>           
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link target="_blank" href='https://github.com/Shiyoki/TypescriptToDo'>
                        https://github.com/Shiyoki/TypescriptToDo<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, Typescript</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/todoaa.jpg" />
            </Container>
        </Layout>
        
    )
}
export default Work2