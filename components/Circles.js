import Image from "next/image";


const Circles = () => {
  return <div className="w-[200px] xl:h-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10 ">
    <Image src={'/circles.png'} className="w-full h-full" width={260} height={200} alt=""/>
  </div>;
};

export default Circles;
