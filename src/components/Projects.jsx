import { PROJECTS } from "../constants";
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutal-900 pb-4">
      <h1 className="my-20 text-center text-4xl"> Projects </h1>

      <div>
        {PROJECTS.map((project, key) => (
          <motion.div
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
            key={key}
            className="mb-8 flex flex-col lg:flex-row lg:justify-center "
          >
            <div className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              ></img>
            </div>

            <div className="w-full max-w-xl lg:w-3/4 "> 
            <h6 className="mb-2 font-semibold">{project.title}</h6>
            <p className="mb-4 text-neutral-400">{project.description}</p>

           <div className="flex flex-wrap gap-2">
    {project.technologies.map((technology, index) => (
        <span key={index} className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
            {technology}
        </span>
    ))}
</div>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
