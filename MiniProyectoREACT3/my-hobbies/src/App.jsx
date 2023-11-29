import { useState } from 'react'
import './App.css'
import Read from './components/Read/Read'
import Sports from './components/Sports/Sports'
import Movies from './components/Movies/Movies'
import Languages from './components/Languages/Languages'
import SongsHeard from './components/SongsHeard/SongsHeard'

function App() {
  return (
    <>
    <Read/>
    <Sports/>
    <Movies/>
    <Languages/>
    <SongsHeard/>
    </>
   
  )
}
console.log(App)
export default App
