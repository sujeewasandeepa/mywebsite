import Image from "next/image";
import sri_lanka from "../components/pictures/Flag_of_Sri_Lanka.png";

const Footer = () => {
  return (
    <div className="flex grid-cols-2 mb-10 mt-10">
      <div className="text-gray-500 mr-10 mt-1">
        This work is licensed under a Attribution-ShareAlike 4.0 International
      </div>
      
      <div>
        <Image 
          src={sri_lanka} 
          width='70'
          height='35'
        />
        <div className="text-gray-500 font-serif font-bold">A Quality Product Sri Lanka</div>
      </div>
    </div>
  )
}

export default Footer