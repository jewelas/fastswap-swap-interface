import { useEffect, useState } from 'react'
import { client } from '../apollo/client'
import { TOKENS_CURRENT } from '../apollo/queries'

const useGetTokenData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.query({
          query: TOKENS_CURRENT,
          fetchPolicy: 'cache-first',
        })
        setData(result?.data?.tokens)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetTokenData
