import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import { data } from "autoprefixer";

const Home = () => {

  const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('JobCategory.json')
        .then(res => res.json())
        .then( data => setJobs(data))
    },[]);

    

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('FeaturedJobs.json')
        .then(res => res.json())
        .then( data => setItems(data))
    },[]);

  return (
    <div>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-16 lg:ml-64">
        <div>
          <h2 className="text-6xl font-bold leading-normal">
            One Step <br /> Closer To Your <br />
            <span className="text-success">Dream Job</span>
          </h2>
          <p className="mt-5">
            Explore thousands of job opportunities with all the <br />
            information you need. Its your future. Come find it. <br /> Manage
            all your job application from start to finish.
          </p>
          <button className="btn btn-info mt-5">Get Started</button>
        </div>
        <div>
          <img
            src="https://www.esafety.gov.au/sites/default/files/2019-08/Remove%20images%20and%20video.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="mb-10">
        <h2 className="text-center font-bold text-4xl mt-40">Job Category List</h2>
        <p className="mt-5 text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
      </div>
      <div className='grid sm:grid-cols-1 lg:grid-cols-4 mt-16 lg:ml-40'>
            {
                jobs.map(job => <JobCategory
                    key={job.id}
                    job={job}
                ></JobCategory>)
            }
        </div>
        
        
        <h2 className="text-center mt-40 text-4xl font-bold">Featured Jobs</h2>
        <p className="text-center mt-5">Explore thousands of job opportunities with all the information you need. Its your future</p>

      <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-10 lg:ml-80'>
            {
                items.map(item => <FeaturedJobs
                    key={item.id}
                    item={item}
                ></FeaturedJobs>)
            }
        </div>

    </div>
  );
};

export default Home;
