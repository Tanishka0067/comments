import { useState } from 'react'
import './App.css'
import CommentSection from './Container/CommentSection'
function App() {

  return (
    <>
    <div className='bg-black rounded-lg p-12 h-screen w-full mx-auto '>
     <h1 className='text-white text-xl font-bold font-mono'>Comment Section</h1>
    <CommentSection /></div>
    </>
  )
}

export default App
