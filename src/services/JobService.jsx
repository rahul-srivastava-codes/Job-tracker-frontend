import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL + "/api/jobs";

const getJobs = () => axios.get(API_URL);
const addJob = (jobData) => axios.post(API_URL, jobData);
const deleteJob = (id) => axios.delete(`${API_URL}/${id}`);

export default { getJobs, addJob, deleteJob };
