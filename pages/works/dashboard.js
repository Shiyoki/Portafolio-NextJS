import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work2 = () => {
    return(
        <Layout title="FluentUI Dashboard">
            <Container>
                <Title>
                    Dashboard <Badge>2021</Badge>
                </Title>
                <P>
                   Dashboard with FluentUI 
                </P>
                <List ml={4} my={4}> 
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link target="_blank" href='https://fluent-ui-react-q0ltanka8-shiyokiak.vercel.app/'>
                        https://fluent-ui-react-q0ltanka8-shiyokiak.vercel.app/<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>               
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link target="_blank" href='https://github.com/Shiyoki/FluentUI-React'>
                        https://github.com/Shiyoki/FluentUI-React<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>React, FluentUI</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/fluent.jpg" />
            </Container>
        </Layout>
        
    )
}
export default Work2