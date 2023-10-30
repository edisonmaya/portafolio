import './App.css'
import Background from './components/Background'
import Container from './components/Container'
import ContainerContact from './components/ContainerContact'
import ContainerProjects from './components/ContainerProjects'
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
        <ContainerProjects />
        <ContainerProjects2 />
        <ContainerContact />
      </Background>
    </>
  )
}

export default App
