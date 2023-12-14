import React from 'react'
import { BrowserRouter, Route, Routes, } from "react-router-dom"

import './App.css'

import Header from './componentes/header/Header'
import Footer from './componentes/footer/Footer'

import Produtos from './Paginas/Produtos/Produtos'
import Produto from './Paginas/Produto/Produto'
import Contato from './Paginas/Contato/Contato'

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
                                        <Footer />
                              </BrowserRouter>
                    </div>

          )


}


export default App
