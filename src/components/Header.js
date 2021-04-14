import styled from 'styled-components'

export default function Header (props) {
    
    const HeaderContainer = styled.header`
        height: auto;
        color:#F9F4F0;
        background-color: #DDBEA9;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items:center;
        align-content: center;
        width: 100%;
        font-family: 'Roboto', sans-serif;

        @media (min-width: 480px) {
            height:100px;
            flex-flow:row nowrap;
            justify-content: space-evenly;
        }
    `
    const MainTitle = styled.h1`
        font-size: 2em;
        
    `;

    const HeaderItem = styled.p`
        font-size:1.5rem;
        margin-top: 0;
        @media (min-width: 480px) {
            margin:0;
        }
    `;

    const FlexRow = styled.div`
        display:flex;
        flex-flow:column nowrap;
        justify-content: space-around;
        align-items: center;
        align-content: center;
        width:50%;

        @media (min-width: 480px) {
            flex-flow:row nowrap;
        }
    `;
    return (
        <HeaderContainer>
            <MainTitle>Andrea Hidalgo</MainTitle>
            <FlexRow>
                <HeaderItem>Skills</HeaderItem>
                <HeaderItem>Portfolio</HeaderItem>
                <HeaderItem>Contact</HeaderItem>
            </FlexRow>
        </HeaderContainer>
    )
}