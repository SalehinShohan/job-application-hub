import React from "react";
import { Link } from "react-router-dom";

const FeaturedJobs = ({ item }) => {

  

  const {
    picture,
    title,
    name,
    location,
    salary,
    description,
    responsibility,
    educationalRequirements,
    phone,
    email,
    id
  } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl mt-28">
      <figure>
        <img className="w-full h-20 justify-start" src={picture} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{name}</p>

        <div className="flex gap-4">
          <div className="border border-purple-400 p-1 m-1 text-purple-400">
            <p>Full Time</p>
          </div>
          <div className="border border-purple-400 p-1 m-1 text-purple-400">
            <p>Remort</p>
          </div>
        </div>

        <div className="flex gap-5">
          <div className="flex gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <p>Salary: {salary}</p>
            </div>
          </div>
        </div>

        <div className="card-actions justify-center mt-7">
          <Link
            to={`../view/${id}`}
            className="inline-flex items-center bg-purple-600 p-3 rounded-lg font-bold text-white transition-colors duration-200 hover:text-blue-700">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
