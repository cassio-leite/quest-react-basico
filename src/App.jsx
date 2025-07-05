
import './App.css'
import ColoredUppercaseText from './components/ColoredUppercaseText/ColoredUppercaseText'
import Button from './components/button/button'

function App() {

  const handleButtonClick = () => {
    alert('A label desse botão é Baixar CV')
  }

  return (
    <>
      <ColoredUppercaseText description='parágrafo colorido e letras maiúsculas usando JS'/>
      <Button label='Baixar CV' onClick={handleButtonClick}></Button>
    </>
  )
}

export default App
