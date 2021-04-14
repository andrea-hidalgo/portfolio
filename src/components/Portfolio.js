import styled from 'styled-components'
import {AiOutlineLink, AiOutlineGithub} from 'react-icons/ai'

export default function Skills (props) {
    const Container = styled.div`
        height:auto;
        width:100%;
        background-color: #E8D3C5;
        color:#F9F4F0;
        @media (min-width: 480px) {
            display:flex;
            flex-flow: row wrap;
            justify-content:center;
        }
    `;

    const FlexRow = styled.ul`
        margin:0;
        padding:0;
        display:flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        width:100%;
    `

    const IconContainer = styled.div`
        height: 40px;
        width: 40px;
        background-color: #CB997E;
        border-radius:30px;
        text-align:center;
        display:flex;
        align-items: center;
        justify-content: center;
        margin: 1em 0 0 0;
    `

    const PortfolioItem = styled.div`
        width: 100%;
        height: 30vh;
        display:flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        font-size: 1.5em;
        padding: 2em 0;
        margin:1em;
        border-radius: 2em;
        background-color: #ddbea9;
        @media (min-width: 480px) {
            width: 300px;
        }
    `;

    const Link = styled.a`
        color:inherit
    `

    const Heading = styled.h3`
        margin: 0;
    `;

    const Description = styled.p`
        margin: 1em 0;
        color: #CB997E;
    `;

    const ListItem = styled.li`
        list-style:none;
    `;

    const Title = styled.h1`
    margin:0 0 1em 0;
    padding: 0;
    width:100%;
    color:#CB997E;
    text-align:center;
`;

    return (
        <Container>
            <Title>Projects</Title>
            <PortfolioItem>
                <Heading>Invoices Plus</Heading>
                <Description>invoice creator</Description>
                <FlexRow>
                    <ListItem>React</ListItem>
                    <ListItem>Mongo</ListItem>
                    <ListItem>SCSS</ListItem>
                </FlexRow>
                <FlexRow>
                    <IconContainer>
                        <Link href="https://invoices-app.herokuapp.com" target="_blank" rel="noopener noreferrer"><AiOutlineLink/></Link>
                    </IconContainer>
                    <IconContainer>
                        <Link href="https://github.com/andrea-hidalgo/react-invoices" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></Link>
                    </IconContainer>
                </FlexRow>
            </PortfolioItem>
            <PortfolioItem>
                <Heading>Tweeter</Heading>
                <Description>twitter feed clone</Description>
                <FlexRow>
                    <ListItem>React</ListItem>
                    <ListItem>Rails</ListItem>
                    <ListItem>CSS</ListItem>
                </FlexRow>
                <FlexRow>
                    <IconContainer>
                        <Link href="https://tweeter-ui-goat.herokuapp.com/main" target="_blank" rel="noopener noreferrer"><AiOutlineLink/></Link>
                    </IconContainer>
                    <IconContainer>
                        <Link href="https://github.com/andrea-hidalgo/tweeter-ui" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></Link>
                    </IconContainer>
                </FlexRow>
            </PortfolioItem>
            <PortfolioItem>
                <Heading>Monster Collector</Heading>
                <Description>D&D monster collection</Description>
                <FlexRow>
                    <ListItem>React</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>CSS</ListItem>
                </FlexRow>
                <FlexRow>
                    <IconContainer>
                        <Link href=""><AiOutlineLink/></Link>
                    </IconContainer>
                    <IconContainer>
                        <Link href="https://github.com/andrea-hidalgo/react-dnd-project" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></Link>
                    </IconContainer>
                </FlexRow>
            </PortfolioItem>
            <PortfolioItem>
                <Heading>Labyrinth of Lies</Heading>
                <Description>adventure game</Description>
                <FlexRow>
                    <ListItem>HTML</ListItem>
                    <ListItem>CSS</ListItem>
                    <ListItem>JS</ListItem>
                </FlexRow>
                <FlexRow>
                    <IconContainer>
                        <Link href="https://andrea-hidalgo.github.io/labyrinth-of-lies" target="_blank" rel="noopener noreferrer"><AiOutlineLink/></Link>
                    </IconContainer>
                    <IconContainer>
                        <Link href="https://github.com/andrea-hidalgo/labyrinth-of-lies" target="_blank" rel="noopener noreferrer"><AiOutlineGithub/></Link>
                    </IconContainer>
                </FlexRow>
            </PortfolioItem>

        </Container>
    )
}