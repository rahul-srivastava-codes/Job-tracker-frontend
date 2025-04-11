// JobForm.jsx
import React, { useState } from "react";
import jobService from "../services/jobService";

const JobForm = ({ onJobAdded }) => {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    date: "",
    link: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await jobService.addJob(form);
    setForm({ company: "", role: "", status: "Applied", date: "", link: "" });
    onJobAdded();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded p-6 mb-6 space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Add Job Application
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Company
          </label>
          <input
            name="company"
            value={form.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Role
          </label>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Role"
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Status
          </label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option>Applied</option>
            <option>Interview</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date of Application
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded"
            required
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Job Posting Link
          </label>
          <input
            name="link"
            value={form.link}
            onChange={handleChange}
            placeholder="https://example.com/job"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
      </div>
      <div className="text-right">
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 shadow"
        >
          Add Job
        </button>
      </div>
    </form>
  );
};

export default JobForm;
