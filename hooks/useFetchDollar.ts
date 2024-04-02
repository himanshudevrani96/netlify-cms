import { useEffect, useState } from 'react'
import { axiosInstance } from 'utilities/axiosInterceptor'

export const useFetchDollar = () => {
  const [price, setPrice] = useState<any>({})
  useEffect(() => {
    const dollar = async () => {
      const res = await axiosInstance.get(
        'pools/tokens-usd-price',
        // 'https://winwin-api.dev.rapidinnovation.tech/api/v1/pools/tokens-usd-price',
      )
      setPrice(res?.data?.data)
    }
    dollar()
  }, [])

  return price
}
