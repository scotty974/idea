
import './App.css'
import Header from './composant/HeaderComposant/Header.tsx'
import InputWords from './composant/Form/InputWords.tsx'
import ListWords from './composant/List/ListsWords.tsx'
function App() {
 
  const handleWords = (e:any) =>{
console.log(e)
  }

  return (
    <>
      <section className='md:container md:m-auto px-2 min-h-screen '>
      <Header />
      <InputWords getWords={handleWords}/>
      <ListWords />
      </section>
    </>
  )
}

export default App
