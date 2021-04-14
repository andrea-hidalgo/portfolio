import styled from 'styled-components'

export default function Skills (props) {
    const ContainerDiv = styled.div`
        height:300px;
        width:100%;
        background-color: #E8D3C5;
        padding: 2em;
    `;

    const Paragraph = styled.p`
        color:#F9F4F0;
        font-size: 1.5em;
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin-top: 0;
        margin-bottom:0.1em;
        text-align:center;
    `;

    const Form = styled.form`
        display:flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    `;

    const Input = styled.input`
        border: none;
        color: #CB997E;
        padding: 1.5em;
        border-radius:1em;
        outline: none;
        margin: 0 0 1em 0;
        @media (min-width: 480px) {
            width: 500px;
        }
    `;

    const Label = styled.label`
        
    `;

    return (
        <ContainerDiv>
            <Paragraph>Let's Talk!</Paragraph>
            <Form>
                <Input type="text" name="name" defaultValue="Name"></Input>
                <Input type="text" name="email" defaultValue="Email"></Input>
                <Input type="textarea" name="info" defaultValue="Let's talk about..."></Input>
            </Form>
        </ContainerDiv>
    )
}