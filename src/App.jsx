import './App.css'

function App() {

  const isCorrect = false;

  return (
    <>
      <h1>L'accusé était présent au manoir Lordshire à l'heure du crime !</h1>
      {<p className={isCorrect ? "correct" : "incorrect"}>{isCorrect ? "Hmm." : "OBJECTIOOOOON !!!!!!!!"}</p>}
    </>
  )
}

export default App
