import React from 'react'
import { BrowserRouter, Route, Router, Routes, useParams } from "react-router-dom"

import './App.css'
import Header from './componentes/header/Header'

import Produtos from './Paginas/Produtos'
import Produto from './Paginas/Produto'
import Contato from './Paginas/Contato'

function App() {

          return (
                    <div className='App'>

                              <BrowserRouter>
                                        <Header />
                                        <div className='content'>

                                                  <Routes>
                                                            <Route path='/' element={<Produtos />}></Route>
                                                            <Route path="/produto/:id" element={<Produto />}></Route>
                                                            <Route path='contato' element={<Contato />}></Route>

                                                  </Routes>
                                        </div>
                              </BrowserRouter>
                    </div>

          )


}


export default App
