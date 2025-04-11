import React from "react";
import JobForm from "./components/JobForm";
import JobList from "./components/JobList";

const App = () => {
  const [refresh, setRefresh] = React.useState(false);

  const triggerRefresh = () => setRefresh((prev) => !prev);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <JobForm onJobAdded={triggerRefresh} />
        <JobList refresh={refresh} />
      </div>
    </div>
  );
};

export default App;
