import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Productform from './component/Productform'
import ProductList from './component/ProductList'

function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProductList/>}></Route>
        <Route path='/productform' element={<Productform/>}></Route>
        
        
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
