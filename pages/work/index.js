import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const Work = () => {
  return (
    <div className="container mx-auto mt-20">
      <div>
        <TypeAnimation
          className="mt-12 text-4xl"
          sequence={["My", 200, "My Work", 700]}
          style={{ fontSize: "2em" }}
          repeat={Infinity}
        />
      </div>
      <div className="relative w-full h-[200px] mt-10 max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <Image className="object-cover w-full h-full" src="/i.png" width={300} height={200} alt="Profile Image" />
        <div className="py-5 text-center none absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
          <a
            href="#"
            className="block text-xl font-bold text-gray-800 dark:text-white"
            tabIndex="0"
            role="link"
          >
            Live
          </a>
          <span className="text-sm text-gray-700 dark:text-gray-200">
            GitHub
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;
