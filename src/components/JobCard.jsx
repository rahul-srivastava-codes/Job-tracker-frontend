import React from "react";
import jobService from "../services/JobService";

const JobCard = ({ job, onStatusUpdated, onDelete }) => {
  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    await jobService.updateJobStatus(job._id, newStatus);
    onStatusUpdated();
  };

  const handleDelete = async () => {
    if (
      window.confirm("Are you sure you want to delete this job application?")
    ) {
      await jobService.deleteJob(job._id);
      onDelete();
    }
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-5 border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{job.company}</h3>
          <p className="text-sm text-gray-600">{job.role}</p>
        </div>
        <button
          onClick={handleDelete}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

      <div className="text-sm text-gray-500 mb-2">
        <p>📅 Applied on: {new Date(job.date).toLocaleDateString()}</p>
        {job.link && (
          <a
            href={job.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800"
          >
            🔗 View Posting
          </a>
        )}
      </div>

      <div className="flex items-center gap-2 mt-2">
        <label className="text-sm text-gray-700">Status:</label>
        <select
          value={job.status}
          onChange={handleStatusChange}
          className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>
    </div>
  );
};

export default JobCard;
