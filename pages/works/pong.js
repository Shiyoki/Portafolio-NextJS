import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work2 = () => {
    return(
        <Layout title="Pong">
            <Container>
                <Title>
                    Pong <Badge>2020</Badge>
                </Title>
                <P>
                    A Pong Game
                </P>
                <List ml={4} my={4}>                
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link target="_blank" href='https://github.com/Shiyoki/PongPY'>
                        https://github.com/Shiyoki/PongPY<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Pytho, Turtle</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/pong.jpg" />
            </Container>
        </Layout>
        
    )
}
export default Work2