import { Link } from "react-router-dom";

import CTA from "../components/CTA.jsx";
import { projects } from "../constants/index.js";
import arrow from "../assets/icons/arrow.svg";

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text font-playfair'>
        My{" "}
        <span className='blue-gradient_text drop-shadow font-semibold font-playfair'>
          Projects
        </span>
      </h1>

      <p className='text-slate-500 mt-2 leading-relaxed font-playfair'>
        Here’s a collection of my most fun and fulfilling projects! 
        Dive in and explore the things I’ve loved building!
      </p>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt='threads'
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-playfair font-semibold'>
                {project.name}
              </h4>
              <p className='mt-2 text-slate-500 font-poppins'>
                {project.description}
              </p>

              <div className='mt-5 flex flex-wrap items-center gap-4 font-playfair'>
                {project.liveLink && (
                  <Link
                    to={project.liveLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center font-semibold text-pink-500'
                  >
                    Live Site
                    <img
                      src={arrow}
                      alt='arrow'
                      className='ml-1 w-4 h-4 object-contain'
                    />
                  </Link>
                )}
                
                {project.repoLink && (
                  <Link
                    to={project.repoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center font-semibold text-purple-500'
                  >
                    GitHub Repo
                    <img
                      src={arrow}
                      alt='arrow'
                      className='ml-1 w-4 h-4 object-contain'
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default Projects;