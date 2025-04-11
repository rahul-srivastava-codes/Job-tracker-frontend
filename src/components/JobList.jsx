import React, { useEffect, useState } from "react";
import jobService from "../services/jobService";
import JobCard from "./JobCard";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const fetchJobs = async () => {
    try {
      const res = await jobService.getJobs();
      setJobs(res.data);
    } catch (err) {
      console.error("Error fetching jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const statusMatch = statusFilter ? job.status === statusFilter : true;
    const dateMatch = dateFilter ? job.date === dateFilter : true;
    return statusMatch && dateMatch;
  });

  return (
    <div>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        Your Applications
      </h2>

      {/* Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full sm:w-48"
        >
          <option value="">All Statuses</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <input
          type="date"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full sm:w-48"
        />
      </div>

      {/* Job Cards */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job._id}
              job={job}
              onStatusUpdated={fetchJobs}
              onDelete={fetchJobs}
            />
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No job applications match your filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default JobList;
