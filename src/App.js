import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

import './App.css';

const FixedHeader = styled.div`
  position:fixed;
  top:0;
  width:100vw;
  height: auto;
`;

const OffSet = styled.div`
  height: 236px;
  @media (min-width: 480px) {
    height: 100px;
  }
  
`;

function App() {
  return (
    <div className="App">
      <FixedHeader>
        <Header></Header>
      </FixedHeader>
      <OffSet></OffSet>
      <Main></Main>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
