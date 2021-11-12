import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work2 = () => {
    return(
        <Layout title="WideoKat">
            <Container>
                <Title>
                    WideoKat <Badge>2021</Badge>
                </Title>
                <P>
                    A repository of videos
                </P>
                <List ml={4} my={4}>                
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link target="_blank" href='https://github.com/Shiyoki/WideoKat'>
                        https://github.com/Shiyoki/WideoKat<ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>ReactJS, Flask, Sqlite </span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/wideologin.jpg" />
            </Container>
        </Layout>
        
    )
}
export default Work2