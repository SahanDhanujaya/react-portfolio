function HomePage() {
  return (
    <div>
        {/* profile image  */}
        <div className="flex justify-center flex-col items-center h-screen">
            <img src="" alt="my profile"
                className="w-48 h-48 rounded-full mx-auto border-4 border-black"
             />
             <div className="m-4">
                <h1 className="text-3xl text-black font-bold">Sahan Dhanujaya</h1>
                <h3 className="text-lg text-black">Profecional Software Developer</h3>
             </div>
        </div>
    </div>
  )
}

export default HomePage
