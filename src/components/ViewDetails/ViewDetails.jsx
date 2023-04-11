import React, { useEffect, useState } from "react";
import { useLoaderData, useNavigation, useParams } from "react-router-dom";
import { addToDb } from "../utils/fakeDb";

const ViewDetails = () => {
  const datas = useLoaderData();
  const { jobId } = useParams();

//   console.log(jobId);

  const newDetail = datas.find((detail) => detail.id === jobId);

  // console.log(newDetail);

  const jobAddedToAppliedJob = (id) => {
    // console.log(id);
    addToDb(id)
  }

  return (
    <div>
      <h1 className="text-center font-bold text-3xl mt-28 text-white">
        Job Details
      </h1>
      <div className="grid sm:grid-cols-1 lg:grid-cols-2 mt-20 gap-10 w-10/12 mx-auto">
        <div>
          <span className="text-white font-semibold text-xl">
            Job Description:
          </span>
          <p className="text-xl mt-2 mb-10">{newDetail.description}</p>
          <span className="text-white font-semibold text-xl">
            Job Responsibility:
          </span>
          <p className="text-xl mt-2 mb-10">{newDetail.responsibility}</p>
          <span className="text-white font-semibold text-xl">
            Educational Requirements:
          </span>
          <p className="text-xl mt-2 mb-10">
            {newDetail.educationalRequirements}
          </p>
          <span className="text-white font-semibold text-xl">Experiences:</span>
          <p className="text-xl mt-2 mb-10">{newDetail.experience}</p>
        </div>
        <div className="bg bg-lime-200 text-center rounded-lg w-96">
            <p className="text-black font-semibold text-2xl mb-9 mt-10">Job Details</p>
            <hr className="h-px my-auto mx-auto bg-gray-200 border-0 dark:bg-gray-700 w-80"/>
            <div>
                <p className="mt-5 text-black">Salary: {newDetail.salary}</p>
                <p className="mt-5 text-black">Job Title: {newDetail.title}</p>
                <p className="text-black mt-6 text-2xl font-semibold mb-5">Contact Information</p>
                <hr className="h-px my-auto mx-auto bg-gray-200 border-0 dark:bg-gray-700 w-80"/>
                <p className="mt-5 text-black">Phone: {newDetail.phone}</p>
                <p className="mt-5 text-black">Email: {newDetail.email}</p>
                <p className="mt-5 text-black">Address: {newDetail.location}</p>
                <button onClick={() => jobAddedToAppliedJob(newDetail.id)} className="btn btn-secondary w-96 mt-4">Apply Now</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
