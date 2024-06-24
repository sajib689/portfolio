import Image from "next/image";


const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image src={'/sajib1.png'} width={537} height={438} alt=""/>
  </div>;
};

export default Avatar;
