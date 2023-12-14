import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'

import style from "./produtos.module.css"
import '../../App.css'

import Card from '../../componentes/produtos/card/Card'

import Head from '../../hooks/Head'

const Produtos = () => {

          const { data, loading, error, request } = useFetch()
          const url = "https://ranekapi.origamid.dev/json/api/produto/"

          useEffect(() => {
                    async function requestURL() {
                              const { resposta, json } = await request(url)

                    }
                    requestURL()
          }, [request])

          if (loading) return (<div className={"loading"}>Loading...</div>)

          if (error) return (
                    <>
                              <img src="error404.jpg" alt="" />
                    </>
          )
          if (data) {

                    return (
                              <>
                                        <Head title="Produtos" />
                                        <section
                                                  className={style.containerProd + ' animeLeft'}>

                                                  {

                                                            data.map((item) => {
                                                                      return (
                                                                                <div key={item.id}>

                                                                                          <Card texto={item.nome}
                                                                                                    img={item.fotos[0].src}
                                                                                                    produto={item.id}
                                                                                          />
                                                                                </div>


                                                                      )

                                                            })
                                                  }
                                        </section >
                              </>
                    )

          }
          else {
                    return null
          }
}

export default Produtos
