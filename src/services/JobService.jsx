import axios from "axios";

const API_URL = "http://localhost:5000/api/jobs";

const getJobs = async () => {
  try {
    const res = await axios.get(API_URL);
    console.log("Jobs Response:", res); // ✅ Add this line
    return res;
  } catch (err) {
    console.error("Error in getJobs():", err);
    throw err;
  }
};

const addJob = (jobData) => axios.post(API_URL, jobData);
const updateJobStatus = (id, status) =>
  axios.patch(`${API_URL}/${id}`, { status });
const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);

export default {
  getJobs,
  addJob,
  updateJobStatus,
  deleteJob,
};
