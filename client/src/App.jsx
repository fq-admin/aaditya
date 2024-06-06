// import { useState } from 'react'
import './App.css'
import Form from './Components/Form'
import TestLink from './Components/TestLink'
import TestFile from './Components/TestFile'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/testLink" element={<TestLink/>} />
          <Route path="/testFile" element={<TestFile/>} />
          
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
