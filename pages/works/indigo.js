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
                        <Meta>Source Code</Meta>
                        <Link target="_blank" href='https://github.com/Shiyoki/IndigoStore'>
                        https://github.com/Shiyoki/IndigoStore<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Python, Flask, Sqlite, Bootstrap</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/indigo.jpg" />
            </Container>
        </Layout>
        
    )
}
export default Work2