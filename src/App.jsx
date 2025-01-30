import useCharacters from '@/hooks/useCharacters'

export default function App() {
  const { characters, totalPages, onChange } = useCharacters()

  return (
    <>
      {characters.map((character) => (
        <article key={character.id}>
          <img src={character.image} alt={character.name} width={100} />
          <h2>{character.name}</h2>
        </article>
      ))}
      <nav>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              onClick={() =>
                onChange(
                  `https://dragonball-api.com/api/characters?page=${page}&limit=10`
                )
              }
            >
              {page}
            </button>
          )
        )}
      </nav>
    </>
  )
}
