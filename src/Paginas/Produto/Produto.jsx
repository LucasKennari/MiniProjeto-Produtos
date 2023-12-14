import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'

import Head from '../../hooks/Head'

import TituloProdComp from '../../componentes/PaginaProd/TituloProdComp/TituloProdComp'

import ImgSlide from '../../componentes/PaginaProd/imgSlide/ImgSlide'
import DescricaoComp from '../../componentes/PaginaProd/descricaoComponente/DescricaoComp'
import PrecoComp from '../../componentes/PaginaProd/PrecoComponente/PrecoComp'

import ButtonCompra from '../../componentes/PaginaProd/buttonCompra/ButtonCompra'
import ButtonCarrinho from '../../componentes/PaginaProd/buttonCarrinho/ButtonCarrinho'

import style from "./produto.module.css"

const Produto = () => {
          const { id } = useParams()

          const { data, error, loading, request } = useFetch()

          let url = `https://ranekapi.origamid.dev/json/api/produto/${id}`

          React.useEffect(() => {
                    async function RequestProd() {
                              const { resposta, json } = await request(url)

                    }
                    RequestProd()

          }, [request, url, id])

          if (loading) return (<div className={"loading"}></div>)

          if (error) return (<div>{error}</div>)

          if (data) {
                    return (
                              <>
                                        <Head title={`Produto | ${data.nome}`} />

                                        <section className={style.prodContainer + " animeLeft"}>

                                                  <div>
                                                            <ImgSlide img={data.fotos[0].src} />
                                                  </div>

                                                  <div className={style.descContainer}>

                                                            <div   >
                                                                      <TituloProdComp texto={data.nome} />
                                                                      <PrecoComp preco={data.preco} />
                                                                      <DescricaoComp texto={data.descricao} />
                                                            </div>

                                                            <div className={style.buttonContainer}>
                                                                      <ButtonCompra />
                                                                      <ButtonCarrinho />
                                                            </div>

                                                  </div>


                                        </section>
                              </>
                    )
          }
          else {
                    return null
          }
}

export default Produto
