import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import vendeCoche from '../public/images/works/vendetucoche.jpg'
import indigo from '../public/images/works/indigo.jpg'
import todoapp from '../public/images/works/todoaa.jpg'
import wideokat from '../public/images/works/wideologin.jpg'
import pong from '../public/images/works/pong.jpg'

const Works = () =>{
    return(
        <Container>
            <Heading as="h3" fontSize={20} mb={4} mt={5}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="landing" title="Landing Page" thumbnail={vendeCoche}>
                        Landing page for (VenderTuCoche.com)
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="indigo" title="Indigo Store" thumbnail={indigo}>
                        Ecomerce for indigoStore
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="todo" title="Todo App" thumbnail={todoapp}>
                        To Do app for learning
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="wideo" title="WideoKat" thumbnail={wideokat}>
                        Repository of videos
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="pong" title="Pong" thumbnail={pong}>
                        Pong project
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works