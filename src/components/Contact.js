import styled from 'styled-components'

export default function Skills (props) {
    const ContainerDiv = styled.div`
        height:300px;
        background-color: #E8D3C5;
        padding: 5em 2em;
    `;

    const Paragraph = styled.h1`
        color:#CB997E;
        font-family: 'Roboto', sans-serif;
        padding: 0;
        margin-top: 0;
        margin-bottom:1em;
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

    const Submit = styled.input`
        border: none;
        width: 100px;
        padding: 1.5em;
        border-radius: 1em;
        color: white;
        font-weight:700;
        background-color: #CB997E;
        outline: none;
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
                <Submit type="submit" value="SUBMIT"></Submit>
            </Form>
        </ContainerDiv>
    )
}