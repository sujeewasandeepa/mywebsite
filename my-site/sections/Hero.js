const Hero = () => {
  return (
    <section>
      <h1 className="text-6xl text-gray-500 my-5 font-bold">Howdy! I'm <span className="text-pink-500 dar:text-purple-500">Sujee</span></h1>
      
      <h3 className="text-3xl text-gray-400 mb-10">I am a learner 🧝🏽</h3>

      <p className="text-lg text-gray-700 mb-5">
         I am Sujeewa Sandeepa from Sri Lanka 🇱🇰🌴, a beautiful island nation in the Indian Ocean. There are so much things to do here. If you are looking for a tropical paradise to spend some good time, please do visit! Okay more about me, I do like to make stuff, specially with software. I like to work with computers. I enjoy messing around software. 
      </p>
      <p className="text-lg text-gray-700 mb-5">
        Well, other than that. I like watching anime, playing games and working on my personal programming projects, like this one.
      </p>
      <p className="text-lg text-gray-700 mb-5">
        If you want to contact me for some reason, give me a slide! 😉
      </p>

      <div>
        <label for="toogleButton" class="flex items-center cursor-pointer">     
          <div class="relative">
            <input id="toogleButton" type="checkbox" class="hidden" />
        
            <div
              class="toggle-path bg-gray-200 w-40 h-10 rounded-full shadow-inner"
            ></div>
            <div
              class="toggle-circle absolute w-5 h-5 bg-white rounded-full shadow inset-y-2.5 left-2.5"
            ></div>
          </div>
        </label>
      </div>

    </section>
  )
}

export default Hero