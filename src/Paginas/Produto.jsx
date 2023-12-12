import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'

const Produto = () => {

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

                    </div>
          )
}

export default Produto
