import React, { useCallback, useState } from 'react'

const useFetch = () => {

          const [data, setData] = useState(null)
          const [loading, setLoading] = useState(null)
          const [error, setError] = useState(null)

          const request = useCallback(async (url, options) => {
                    let resposta
                    let json
                    try {
                              setError(null)
                              setLoading(true)
                              resposta = await fetch(url, options)
                              json = await resposta.json()
                    } catch (error) {
                              json = null
                              setError(error)
                    } finally {
                              setData(json)
                              setLoading(false)

                              return { resposta, json }
                    }
          }, [])
          return { data, loading, error, request }
}

export default useFetch
