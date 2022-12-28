import { useEffect, useState } from 'react'
import { client } from '../apollo/client'
import { ETH_PRICE } from '../apollo/queries'

const useGetEthPrice = () => {
  const [data, setData] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.query({
          query: ETH_PRICE(),
          fetchPolicy: 'cache-first',
        })
        setData(+result.data?.bundles[0]?.ethPrice)
      } catch (error) {
        console.error('Unable to fetch data:', error)
      }
    }

    fetchData()
  }, [setData])

  return data
}

export default useGetEthPrice

// data.priceUSD = data?.derivedETH * ethPrice
