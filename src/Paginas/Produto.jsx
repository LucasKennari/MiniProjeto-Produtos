import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import ButtonCompra from '../componentes/PaginaProd/buttonCompra/ButtonCompra'

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
                    <div>
                              <ButtonCompra texto={"Compra"} />
                    </div>
          )
}

export default Produto
