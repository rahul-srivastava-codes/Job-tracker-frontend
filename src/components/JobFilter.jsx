import React from "react";

const JobFilter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="mb-4 flex gap-2">
      <select name="status" onChange={handleChange} className="border p-2">
        <option value="">All Status</option>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input
        type="date"
        name="date"
        onChange={handleChange}
        className="border p-2"
      />
    </div>
  );
};

export default JobFilter;
