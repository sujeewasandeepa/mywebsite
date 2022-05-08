const Hero = () => {
  return (
    <section className="container align-items align-content">
      <h1 className="dark:text-gray-300 text-6xl text-gray-500 my-5 font-bold">Howdy! I'm <span className="text-pink-500 dark:text-purple-500">Sujee</span></h1>
      
      <h3 className="text-3xl text-gray-400 mb-10">I am a learner 🧝🏽</h3>


      <p className="text-lg text-gray-700 mb-5">
        If you want to contact me for some reason, give me a slide! 😉
      </p>

      <div className="grid">
        <label htmlFor="togleButton" className="ml-10 cursor-pointer my-10">     
          <div className="relative">
            <input id="togleButton" type="checkbox" className="hidden"/>
        
            <div
              className="toggle-path dark:bg-gray-900 bg-gray-200 w-80 h-10 rounded-full shadow-inner"
            >
              <div className="toggle-text dark:text-red-200 text-gray-600 pt-2 pl-2">sandeepasujeewa@gmail.com</div>
            </div>
            <div
              className="toggle-circle dark:bg-gray-600 absolute w-5 h-5 bg-white rounded-full shadow inset-y-2.5 left-2.5"
            ></div>
          </div>
        </label>
      </div>
    </section>
  )
}

export default Hero