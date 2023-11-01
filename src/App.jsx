import './App.css'
import Background from './components/Background'
import ContainerGrid from './components/ContainerGrid'
import ContainerAboutMe from './components/ContainerAboutMe'
import ContainerContact from './components/ContainerContact'

import ContainerProjects2 from './components/ContainerProjects2'
import Menu from './components/Menu'
import ContainerDescription from './components/ContainerDescription'

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
