
import './App.css'
import Header from './composant/HeaderComposant/Header.tsx'
import InputWords from './composant/Form/InputWords.tsx'
function App() {
 

  return (
    <>
      <section className='md:container md:m-auto px-2 min-h-screen '>
      <Header />
      <InputWords />
      </section>
    </>
  )
}

export default App
