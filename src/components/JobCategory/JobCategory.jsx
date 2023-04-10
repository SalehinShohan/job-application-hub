import React from "react";

const JobCategory = ({ job }) => {
  const { icon, titles, cjobs } = job;

  return (
    <div className="card w-60 bg-base-100 shadow-2xl">
      <figure className="px-10 pt-10">
        <img src={icon} alt="Shoes" className="rounded-xl h-20" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-white">{titles}</h2>
        <p>{cjobs}</p>
      </div>
    </div>
  );
};

export default JobCategory;
