import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  let obj = {
    name: "Amit",
    age: 22
  }

  let arr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-500 text-black p-2 rounded-lg'>Tailwind Test</h1>
      <Card userName = "Amit Dhyani" work = "Web dev" location = "Dharuhera" someObj = {obj} someArr = {arr}/>
      <Card userName= "Eren Yeager" work = "Soldier" location = "Paradise Island" />
    </>
  )
}

export default App
