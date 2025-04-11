import React from "react";
import JobForm from "../components/JobForm";
import JobList from "../components/JobList";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <JobForm onJobAdded={() => window.location.reload()} />
      <JobList />
    </div>
  );
};

export default Home;
