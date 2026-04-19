import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Post from './components/Post'

function App() {
  
  return (
   <>
   <Post name="rivka" content="aaaaaaa"></Post>
   <Post name="sara" content="bbbbbb"/>
   <Post name="lea" content="cccccccccc"/>
   </>
  )
}

export default App
