import { useState } from "react"
import './magicCounter.css'

export default function MagicCounter() {

  const [count, setCount] = useState(0);
  const magicNumber = "✨ Nombre magique atteint ! ✨";

  return (
    <div className="container">
      <p className={`counter ${count !== 0 ? count % 5 ? "classicNumber" : "magicNumber" : "classicNumber"}`}>{count !== 0 ? count % 5 ? count : magicNumber : count}</p>
      <div className="buttonsContainer">
        <input type="button" value="-1" onClick={() => setCount(count - 1)} />
        <input type="button" value="+1" onClick={() => setCount(count + 1)} />
      </div>
      <input type="button" value="Réinitialiser" onClick={() => setCount(0)} />
    </div>
  )
}