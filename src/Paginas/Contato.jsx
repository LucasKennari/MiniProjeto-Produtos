import React from 'react'
import Head from '../hooks/Head'
import style from '../styleModule/contato.css/contato.module.css'
import foto from '../img/notebook.jpg'
const Contato = () => {

          return (

                    <section className={style.contato + " animeLeft"}>

                              <Head title="Contato" />

                              <img src={foto} alt={"notebook"} />
                              <div >
                                        <h1>Entre em contato</h1>
                                        <ul className={style.dados}>
                                                  <li>contato@email.com</li>
                                                  <li>(77) 7 7777-7777</li>
                                                  <li>Rua dos Gatos 123</li>
                                        </ul>
                              </div>
                    </section>

          )
}

export default Contato
