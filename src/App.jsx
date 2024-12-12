import { useState } from 'react'
import './App.css'
import CommentSection from './Container/CommentSection'
function App() {

  return (
    <>
    <div className='bg-gray-500 rounded-lg p-5 w-5/6 mx-auto mt-8 '>
     <h1 className='text-white text-xl font-bold font-mono'>Comment Section</h1>
    <CommentSection /></div>
    </>
  )
}

export default App
