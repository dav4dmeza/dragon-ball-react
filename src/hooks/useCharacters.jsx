import { useEffect, useState } from 'react'

export default function useCharacters() {
  const [url, setUrl] = useState('https://dragonball-api.com/api/characters')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const onChange = (url) => setUrl(url)

  useEffect(() => {
    const abortController = new AbortController()
    setLoading(true)

    fetch(url, { signal: abortController.signal })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err)
        }
      })
      .finally(() => setLoading(false))

    return () => abortController.abort()
  }, [url])

  return {
    data,
    loading,
    error,
    onChange,
  }
}
