import Error from '@/components/Error'
import List from '@/components/List'
import Loading from '@/components/Loading'
import useCharacters from '@/hooks/useCharacters'

export default function App() {
  const { data, loading, error, onChange } = useCharacters()

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data && <List data={data} onChange={onChange} />}
    </>
  )
}
