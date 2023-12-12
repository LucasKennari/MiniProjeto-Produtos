import React, { useEffect } from 'react'
import Card from '../componentes/produtos/card/Card'
import useFetch from '../hooks/useFetch'
import style from "../styleModule/style.module.css"
//repsonsavel por fazer o fatch e mostrar os produtos

const Produtos = () => {


          const { data, loading, error, request } = useFetch()
          const url = "https://ranekapi.origamid.dev/json/api/produto/"

          useEffect(() => {
                    async function requestURL() {
                              const { resposta, json } = await request(url)

                    }
                    requestURL()
          }, [request])



          if (loading) return (<>Loading</>)

          if (error) return (
                    <>
                              <img src="error404.jpg" alt="" />
                    </>
          )
          if (data) {

                    return (
                              <div
                                        className={style.containerProd}>

                                        {data.map((item) => {
                                                  return (
                                                            <ul key={item.id}>

                                                                      <Card texto={item.nome}
                                                                                img={item.fotos[0].src}
                                                                                produto={item.id}
                                                                      />

                                                            </ul>


                                                  )

                                        })
                                        }
                              </div >

                    )

          }
          else {
                    return null
          }
}

export default Produtos
