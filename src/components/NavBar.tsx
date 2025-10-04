function NavBar() {
  return (
    <nav className="w-full max-w-screen py-4 bg-white bg-opacity-90 sticky top-0 lg:px-8 lg:py-3 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
  <div className="container flex items-center justify-center mx-auto text-slate-800">
    <a href="#"
      className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold">
      <img src="/sd_logo.png" alt="my logo" className='w-10' />
    </a>
    <div className="w-full flex justify-center">
      <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Home</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">About</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Projects</a>
        </li>
        <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
          <a href="#" className="flex items-center">Contact</a>
        </li>
      </ul>
    </div>
    <button className='w-10 flex justify-center hover:cursor-pointer hover:bg-indigo-50 hover:shadow-black rounded-full'>
        <img src="/src/assets/logos/icons8-dark-mode-50.png" alt="dark mode" className='w-5 ' />
    </button>
  </div>
</nav>
  )
}

export default NavBar
