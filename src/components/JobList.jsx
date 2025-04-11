import React, { useEffect, useState } from "react";
import jobService from "../services/JobService";
import JobCard from "./JobCard"; // assumes you have a JobCard component

const JobList = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await jobService.getJobs();
      console.log("Jobs fetched:", res.data); // ✅ optional for debug
      setJobs(res.data); // ✅ data is an array directly
    } catch (err) {
      console.error("Error fetching jobs:", err);
      setJobs([]);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Your Applications
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onStatusUpdated={fetchJobs}
              onDelete={fetchJobs}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center col-span-full">
            No job applications found.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobList;
