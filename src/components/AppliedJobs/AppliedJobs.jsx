import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utils/fakeDb";
import { useLoaderData } from "react-router-dom";
import JobItem from "../JobItem/JobItem";

const AppliedJobs = () => {
  const { newArr } = useLoaderData();

  console.log(newArr);

  return (
    <div className="flex min-h-screen items-start justify-center text-fray-900">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
        <h2 className="text-xl font-semibold">
          {newArr.length ? "Jobs Application" : "Job Application Empty"}
        </h2>

        <ul className="flex flex-col divide-gry-700"></ul>

        {
            newArr.map( job => <JobItem
                key={job.id}
                job={job}
            ></JobItem>)
        }

      </div>
    </div>
  );
};

export default AppliedJobs;
