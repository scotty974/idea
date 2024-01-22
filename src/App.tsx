
import './App.css'
import Header from './composant/HeaderComposant/Header.tsx'
import InputWords from './composant/Form/InputWords.tsx'
import ListWords from './composant/List/ListsWords.tsx'
import { useState } from 'react'
function App() {
 const [word, setWord] = useState('')

  const handleWords = (e:any) =>{
      setWord(e)
  }

  return (
    <>
      <section className='md:container md:m-auto px-2 min-h-screen '>
      <Header />
      <InputWords getWords={handleWords}/>
      <ListWords word={word}/>
      </section>
    </>
  )
}

export default App
