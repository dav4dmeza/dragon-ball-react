export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <svg
        className="w-16 h-16 text-red-500 mb-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <h2 className="text-2xl font-bold text-red-500">Error</h2>
      <p className="text-gray-600 mt-4">
        Ha ocurrido un error. Por favor, inténtelo de nuevo más tarde.
      </p>
    </div>
  )
}
