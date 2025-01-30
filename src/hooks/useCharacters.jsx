import { useEffect, useState } from 'react'

export default function useCharacters() {
  const [url, setUrl] = useState('https://dragonball-api.com/api/characters')
  const [characters, setCharacters] = useState([])
  const [totalPages, setTotalPages] = useState(0)

  const onChange = (url) => setUrl(url)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.items)
        setTotalPages(data.meta.totalPages)
      })
  }, [url])

  return {
    characters,
    totalPages,
    onChange,
  }
}
