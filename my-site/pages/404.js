import Image from "next/image";
import sadGirl from "../components/pictures/cute-anime-crying.gif";

function pageNotFound() {
  return (
    <div className="grid place-content-center h-screen">
        <div className="text-gray-500 text-center align-middle font-bold">

            <h1 className="text-4xl">404</h1>

            <div className="mb-10">
                <Image
                    src={sadGirl}
                />
            </div>

            We can not find page 😭
        </div>
    </div>
  )
}

export default pageNotFound;