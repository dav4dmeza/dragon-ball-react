import useCharacters from '@/hooks/useCharacters'

export default function App() {
  const { characters, totalPages, onChange } = useCharacters()

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            React - Dragon Ball
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {characters.map((character) => (
              <div key={character.id} className="group relative">
                <img
                  alt={character.name}
                  src={character.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-100"
                />
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">{character.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{character.ki}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {character.race}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <nav className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <button
              key={page}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
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
