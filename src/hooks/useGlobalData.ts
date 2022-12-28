import { useEffect, useState } from 'react'
import { client } from '../apollo/client'
import { GLOBAL_DATA } from '../apollo/queries'

const useGlobalData = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.query({
          query: GLOBAL_DATA(),
          fetchPolicy: 'cache-first',
        })

        setData(result.data.uniswapFactories[0])
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGlobalData
