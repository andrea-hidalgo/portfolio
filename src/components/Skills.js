import styled from 'styled-components'
import {FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineGithub} from 'react-icons/ai'


export default function Skills (props) {
    
    const Container = styled.div`
        height:auto;
        width:100%;
        background-color: #E8D3C5;
        color: #F9F4F0;
        text-align: center;
        padding: 2em 0;
    `;

    const FlexDiv = styled.div`
        display:flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        width:100%;
        margin-bottom: 2em;

        @media only screen and (max-device-width: 480px) {

        }
    `;

    const Title = styled.h1`
        margin:0 0 1em 0;
        padding: 0;
        width:100%;
        color:#CB997E;
    `;

    const SkillUl = styled.ul`
        margin:0;
        padding:0;
    `;

    const ListItem = styled.li`
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 1.5em;

    `;

    const IconContainer = styled.div`
        width: 50px;
        height:50px;
        display:flex;
        justify-content: center;
        align-items:center;
        padding: 5px;
        font-size: 1em;
        background-color: #CB997E;
        border: none;
        outline: none;
        color: #F9F4F0;
        border-radius: 80px;
        font-weight: 700;
        font-size:2em;
    `;

    const Button = styled.div`
        width: 100px;
        height:50px;
        padding: 5px;
        background-color: #CB997E;
        border: none;
        outline: none;
        color: #F9F4F0;
        border-radius: 80px;
        font-weight: 700;
        font-size:1em;
        display:flex;
        align-items:center;
        justify-content:center;
    `;

    return (
        <Container>
            <Title>Skills</Title>
            <FlexDiv>
            <SkillUl>
                <ListItem>HTML</ListItem>
                <ListItem>CSS</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>JQuery</ListItem>
            </SkillUl>
            <SkillUl>
                <ListItem>React.js</ListItem>
                <ListItem>Ruby</ListItem>
                <ListItem>Ruby on Rails</ListItem>
                <ListItem>Express.js</ListItem>
            </SkillUl>
            <SkillUl>
                <ListItem>Mongo</ListItem>
                <ListItem>PostgreSQL</ListItem>
                <ListItem>Git</ListItem>
            </SkillUl>
            </FlexDiv>
            <FlexDiv>
                <IconContainer><FaLinkedinIn/></IconContainer>
                <IconContainer><AiOutlineGithub/></IconContainer>
                {/* <Button>Resume</Button> */}
            </FlexDiv>
        </Container>
    )
}