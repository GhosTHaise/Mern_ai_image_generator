import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
