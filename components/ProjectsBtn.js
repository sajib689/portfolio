import Link from "next/link";
import Image  from "next/image";
import img from '../public/rounded-text.png'
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 ">
      <Link href={"/work"}>
        <Image
          src={img}
          width={141}
          height={148}
          alt=""
          className="animate-spin-slow w-full h-full"
        />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
