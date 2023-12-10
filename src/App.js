import React from 'react'
import Map from './components/map/Map'
import './App.css'
import Search from './components/search/Search'
function App() {
  return (
    <div className='app'>
      <Search />
      <Map />
    </div>
  )
}

export default App