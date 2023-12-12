import React from 'react'
import { BrowserRouter, Route, Router, Routes, useParams } from "react-router-dom"

import style from "./styleModule/style.module.css"

import Header from './componentes/header/Header'

import Produtos from './Paginas/Produtos'
import Produto from './Paginas/Produto'
import Contato from './Paginas/Contato'

function App() {

          return (
                    <>
                              <BrowserRouter>
                                        <Header />
                                        <Routes>
                                                  <Route path='/' element={<Produtos />}></Route>
                                                  <Route path="/produto/:id" element={<Produto />}></Route>
                                                  <Route path='contato' element={<Contato />}></Route>

                                        </Routes>
                              </BrowserRouter>
                    </>
          )


}


export default App
