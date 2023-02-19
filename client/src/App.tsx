import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter,Link,Routes,Route } from 'react-router-dom'
import { logo } from './assets'
import { Home,CreatePost } from './Pages'
function App() {

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
