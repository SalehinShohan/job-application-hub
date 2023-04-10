import React from "react";

const JobItem = ({ job, handleRemoveItem }) => {
  const { name, picture, title, salary, location, type1, type2 } = job;
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full h-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-36 h-36 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
          src={picture}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {title}
              </h3>
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {name}
              </h3>
              <div className="flex gap-4">
                <div className="border border-purple-400 p-1 m-1 text-purple-400">
                  <p>{type1}</p>
                </div>
                <div className="border border-purple-400 p-1 m-1 text-purple-400">
                  <p>{type2}</p>
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
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default JobItem;
