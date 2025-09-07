import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'


const App = () => {
  return (
    <div className='min-h-screen bg-gray-400'>
      <Header/>
      <main>
        <Hero/>
        <Features/>
      </main>
    </div>
  )
}

export default App