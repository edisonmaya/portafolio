import './App.css'
import Background from './components/Background'
import Container from './components/Container'
import ContainerAboutMe from './components/ContainerAboutMe'
import ContainerContact from './components/ContainerContact'

import ContainerProjects2 from './components/ContainerProjects2'
import Menu from './components/Menu'
import PersonalDescription from './components/PersonalDescription'

function App() {
  return (
    <>
      <Background >
        <Menu/>
        <PersonalDescription />
        <Container />
        <ContainerAboutMe/>
        <ContainerProjects2 />
        <ContainerContact />
      </Background>
    </>
  )
}

export default App
