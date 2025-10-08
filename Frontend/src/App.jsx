import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Page from './Pages/pagefirst/Page'
import Pagesix from './Pages/pagesix/Pagesix'
import Pagesecond from './Pages/pageSecond/Pagesecond'
import Pagethree from './Pages/pagethird/Pagethree'
import Pagefour from './Pages/pagefourth/Pagefour'
import Pagefive from './Pages/pagefifth/Pagefive'

const App = () => {
  return (
    <div>
      {/* <Page/> */}
      {/* <Pagesix/> */}
      {/* <Pagesecond/> */}
      {/* <Pagethree/> */}
      {/* <Pagefour/> */}
      {/* <Pagefive/> */}
      <Routes>
        <Route path="/" element={<Page/>}/>
        <Route path="/about" element={<Pagesecond/>}/>
        <Route path="/Project" element={<Pagethree/>}/>
        <Route path="/contact" element={<Pagefour/>}/>
        <Route path="/add-project" element={<Pagesix/>}/>
        <Route path="/:name/:id" element={<Pagefive/>}/>
      </Routes>

    </div>
  )
}

export default App
