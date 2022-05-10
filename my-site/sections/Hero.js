import Button from "../components/Button";
import dp from "../components/pictures/dp.png"
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container align-items align-content">
      <h1 className="dark:text-gray-300 text-6xl text-gray-500 my-5 font-bold text-center">Welcome!</h1>
      
      <p className="text-xl text-gray-700 mb-5 text-center">
        If you want to contact me for some reason, give me a slide! 😉
      </p>

      <div className="flex flex-col">
        <div className="flex justify-center">
          <Image
            src={dp}
            width={300}
            height={280}
            alt="profile picture"
            priority
          />
        </div>
        <div className="flex justify-center mt-10">
          <Button className="bg-gray-100 text-gray-700 dark:bg-gray-800 darK:text-gray-300">Contact Me</Button>
        </div>
      </div>
    </section>
  )
}

export default Hero