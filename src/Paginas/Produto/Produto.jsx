import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ButtonCompra from '../../componentes/PaginaProd/buttonCompra/ButtonCompra'
import ButtonCarrinho from '../../componentes/PaginaProd/buttonCarrinho/ButtonCarrinho'
import ImgSlide from '../../componentes/PaginaProd/imgSlide/ImgSlide'
import Loading from '../../componentes/loading/Loading'
import DescricaoComp from '../../componentes/PaginaProd/descricaoComponente/DescricaoComp'
import PrecoComp from '../../componentes/PaginaProd/PrecoComponente/PrecoComp'
import TituloProdComp from '../../componentes/PaginaProd/TituloProdComp/TituloProdComp'
import Head from '../../hooks/Head'

const Produto = () => {
          const params = useParams()


          const { data, error, loading, request } = useFetch()
          React.useEffect(() => {

          }, [])
          let url = `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
          React.useEffect(() => {
                    async function RequestProd() {
                              const { resposta, json } = await request(url)

                    }
                    RequestProd()

          }, [request])

          if (loading) return (<Loading />)

          if (error) return (<div>{error}</div>)

          if (data) {
                    return (
                              <>
                                        <Head title={`Produto | ${data.nome}`} />
                                        <div style={{
                                                  display: "flex",
                                                  padding: "0px 400px",
                                                  gap: "40px",
                                                  alignItems: "center",
                                                  justifyContent: "center",

                                        }}>
                                                  <ImgSlide img={data.fotos[0].src} />

                                                  <div style={{
                                                            gap: "20px",
                                                            display: "grid",
                                                            padding: "10px",
                                                            justifyItems: "start"
                                                  }}>
                                                            <div style={{
                                                                      display: "flex", flexWrap: 'wrap',


                                                            }}>
                                                                      <TituloProdComp texto={data.nome} />
                                                                      <DescricaoComp texto={data.descricao} />
                                                                      <PrecoComp preco={data.preco} />
                                                            </div>

                                                            <div style={{
                                                                      display: "flex",
                                                                      justifyContent: "flex-end",
                                                                      alignItems: "center",


                                                            }}>
                                                                      <ButtonCompra />
                                                                      <ButtonCarrinho />
                                                            </div>

                                                  </div>


                                        </div>
                              </>
                    )
          }
          else {
                    return null
          }
}

export default Produto
