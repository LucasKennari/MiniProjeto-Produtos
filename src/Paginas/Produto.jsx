import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ButtonCompra from '../componentes/PaginaProd/buttonCompra/ButtonCompra'
import ButtonCarrinho from '../componentes/PaginaProd/buttonCarrinho/ButtonCarrinho'
import ImgSlide from '../componentes/PaginaProd/imgSlide/ImgSlide'

const Produto = () => {
          const params = useParams()
          console.log(params)
          const { data, error, loading, request } = useFetch()
          // let url = `https://ranekapi.origamid.dev/json/api/produto/${}`
          // React.useEffect(() => {
          //           async function RequestProd() {
          //                     const { resposta, json } = await request(url)
          //           }
          //           RequestProd()

          // }, [request])
          return (
                    <> <div style={{
                              display: "flex",
                              padding: "0px 50px 0px 50px",
                              gap: "40px",
                              alignItems: "center",
                              justifyContent: "center",
                              border: "4px solid #429300"
                    }}>

                              <ImgSlide />

                              <div style={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",

                                        border: "1px solid #7443CA"
                              }}>
                                        <ButtonCompra />
                                        <ButtonCarrinho />
                              </div>

                    </div>
                    </>
          )
}

export default Produto
