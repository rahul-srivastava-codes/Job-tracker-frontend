import React from "react";
import jobService from "../services/jobService";

const JobCard = ({ job, onStatusUpdated, onDelete }) => {
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      await jobService.updateJobStatus(job._id, newStatus);
      onStatusUpdated(); // refresh the list
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  const handleDelete = async () => {
    try {
      await jobService.deleteJob(job._id);
      onDelete(); // refresh the list
    } catch (err) {
      console.error("Error deleting job:", err);
    }
  };

  return (
    <div className="bg-white p-4 shadow rounded space-y-2">
      <h3 className="font-bold text-lg text-blue-700">{job.company}</h3>
      <p className="text-gray-600">{job.role}</p>
      <a
        href={job.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        {job.link}
      </a>
      <p className="text-sm text-gray-500">Date: {job.date}</p>

      <div className="flex justify-between items-center mt-2">
        <select
          value={job.status}
          onChange={handleStatusChange}
          className="border p-1 rounded text-sm"
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <button
          onClick={handleDelete}
          className="text-red-600 text-sm hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
