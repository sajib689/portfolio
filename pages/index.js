import ProjectsBtn from "./../components/ProjectsBtn";
const Home = () => {
  return (
    <div className="bg-primary/60 h-full ">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-35 xl:text-left h-full container mx-auto">
          <h1 className="h1">
            Transforming Ideas <br /> Info{" "}
            <span className="text-accent">Digital Reality</span>
          </h1>
          <p className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-10 ">
            I'm a MERN stack developer specializing in MongoDB, Express.js,
            React, and Node.js. I create dynamic web applications that combine
            clean code with intuitive design for seamless user experiences.
            Explore my portfolio to see my work in action
          </p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
