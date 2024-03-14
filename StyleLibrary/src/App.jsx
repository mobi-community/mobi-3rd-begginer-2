const App = () => {
  return (
    <div className="flex flex-col align-middle w-[50rem]">
      <button className="px-2 py-4 rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
        Hello tailwind
      </button>
      <button className="px-5 py-3 rounded-full w-[5rem] h-[3rem] border-2 border-indigo-500  hover:bg-gray-400">
        test2
      </button>
      <button className="w-40 h-40 border-10 border-indigo-500 bg-yellow-300 transition-transform hover:bg-red-300 ">
        test5
      </button>
      <input className="w-[20rem] h-12 border-[5px] hover:bg-green-300"></input>
    </div>
  )
}

export default App
