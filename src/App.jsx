import './App.css'
import Background from './components/Background'
import ContainerAboutMe from './components/ContainerAboutMe'
import ContainerContact from './components/ContainerContact'
import ContainerDescription from './components/ContainerDescription'
import ContainerProjects2 from './components/ContainerProjects2'
import Menu from './components/Menu'

function App() {
  return (
    <>
      <Background >
        <Menu/>
        <ContainerDescription />
        <ContainerAboutMe/>
        <ContainerProjects2 />
        <ContainerContact />
        
      </Background>
    </>
  )
}

export default App
