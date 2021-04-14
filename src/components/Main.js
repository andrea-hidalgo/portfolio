import styled from 'styled-components'
import profilePicture from '../images/profile-sepia.jpeg'

export default function Main () {

    const ContainerDiv = styled.div`
        background-color:#DDBEA9;
        display:flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
        height: auto;
        min-height: 500px;
        padding: 2em;

        @media (min-width: 480px) {
            flex-flow: row nowrap;
            justify-content: space-evenly;
        }
    `;

    const FlexDiv = styled.div`
        text-align: center;
        @media (min-width: 480px) {
            display:flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-content: center;
            align-items: center;
        }
    `;

    const Image = styled.div`
        background-image: url(${profilePicture});
        background-position: center;
        background-size:contain;
        background-repeat: no-repeat;
        border-radius: 800px;
        height: 300px;
        width:300px;

        @media (min-width: 480px) {
            height: 400px;
            width: 400px;
        }
    `

    const Paragraph = styled.p`
        color:#F9F4F0;
        font-size: 1.5em;
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin-bottom:0.1em;
        text-align:center;
        @media (min-width: 480px) {
            width: 50vw;
            margin:0;
        }
    `;

    const Line = styled.hr`
        background-color:#F9F4F0;
        border: none;
        height: 3px;
        width:100%;
    `;

    const Button = styled.button`
        width: 100px;
        margin: 2em 1em 0 1em;
        padding: 20px;
        font-size: 1em;
        background-color: #A5A58D;
        border: none;
        outline: none;
        color: #F9F4F0;
        border-radius: 50px;
        font-weight: 700;
    `;

    return (
        <ContainerDiv>
            <Image></Image>
            <FlexDiv>
            <Paragraph>Hello!</Paragraph>
            <Line/>
            <Paragraph>My name is Andrea Hidalgo.</Paragraph>
            <Paragraph>I am a software developer currently based in Columbus, OH. 
            </Paragraph>
            <Paragraph>My 6+ years of experience providing technical support have made me an expert at liaising between technical and non-technical stakeholders. I always ensure problems are solved quickly and effectively with special attention to the impact of technical decisions on end-users.</Paragraph>
            <Button>Contact</Button>
            </FlexDiv>
        </ContainerDiv>
    
    
    )
}