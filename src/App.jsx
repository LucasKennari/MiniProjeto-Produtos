import React from 'react'

import { BrowserRouter, Route, Router, Routes, useParams } from "react-router-dom"
import Header from './componentes/header/Header'
import style from "./styleModule/style.module.css"
import Produtos from './Paginas/Produtos'
import Produto from './Paginas/Produto'
function App() {
          const params = useParams()
          console.log(params)
          return (
                    <>
                              <BrowserRouter>
                                        <Header />
                                        <Routes>
                                                  <Route path='/' element={<Produtos />}></Route>
                                                  <Route path='/' element={<Produto />}></Route>

                                        </Routes>
                              </BrowserRouter>
                    </>
          )


}


export default App
