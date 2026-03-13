import { useState } from 'react'

import './App.css'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1 className="text-3xl font-bold ital">Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
    </>
  )
}

export default App
