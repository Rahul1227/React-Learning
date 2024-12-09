import React, { useEffect, useState } from 'react';


const Jobs = () => {
  const [jobsData, setJobsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/jobs')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch jobs');
        }
        return res.json(); // Parse the response JSON
      })
      .then((data) => {
        setJobsData(data); // Set the fetched data
      })
      .catch((err) => {
        setError(err.message); // Handle errors
      });
  }, []);

  if (error) {
    return (
      <div className="w-full h-screen flex justify-center items-center bg-red-400 text-white">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex flex-col bg-gray-700 p-6">
      <h1 className="text-3xl font-bold mb-4  text-white">Jobs Page</h1>
      <p className="mb-6 text-lg  text-white self-start">Here are the job details</p>
      <div className="space-y-4 overflow-auto">
        {jobsData.map((job) => (
          <div key={job.id} className="w-full bg-gray-400 shadow-lg p-4 rounded-md">
            <h2 className="text-3xl font-semibold">{job.title}</h2>
            <p className="text-gray-900">Salary: {job.salary}</p>
            <p className="text-gray-900 ">Description: {job.description}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Jobs;
