import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const fetchData = async () => {
    setIsLoading(true)
    try {
      const response = await axios.get(url)
      setIsLoading(false)
      setData(response.data)
      setError(null)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [url])

  return { data, isLoading, error }
}

export default useFetch
