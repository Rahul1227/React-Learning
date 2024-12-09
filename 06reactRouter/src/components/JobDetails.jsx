import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Notfound from "./Notfound";


const JobDetails = () => {
  const { id } = useParams(); // Extract 'id' from URL parameters
  const [job, setJob] = useState(null); // Single job data
  const [error, setError] = useState(null); // Error state
  const [notFound, setNotFound] = useState(false); // Not found state

  useEffect(() => {
    // Fetch job details
    fetch(`http://localhost:5000/jobs/${id}`)
      .then((res) => {
        if (res.status === 404) {
          setNotFound(true); // If the job is not found
          return null;
        }
        if (!res.ok) {
          throw new Error("Failed to fetch job details"); // Handle other errors
        }
        return res.json(); // Parse the JSON response
      })
      .then((data) => {
        if (data) {
          setJob(data); // Set the fetched job data
        }
      })
      .catch((err) => {
        setError(err.message); // Handle fetch errors
      });
  }, [id]); // Include 'id' in the dependency array

  if (notFound) {
    // Render Notfound component if job is not found
    return <Notfound/>
  }

  if (error) {
    // Render error message if there's an error
    return (
      <div className="w-full h-screen flex justify-center items-center bg-red-400 text-white">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!job) {
    // Show a loading state while data is being fetched
    return (
      <div className="w-full h-screen flex justify-center items-center bg-gray-200 text-gray-700">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-gray-400 shadow-lg p-4 rounded-md flex flex-col justify-center items-center">
      <h1 className="text-3xl text-white font-bold mb-6">The search job is:</h1>
      <div
        className="flex flex-col border-6 border-gray-500 outline-none shadow-lg
         bg-white text-black px-10 py-7 shadow-red-300"
      >
        <p className="text-xl font-bold">{job.title}</p>
        <p className="text-lg self-start">Salary: {job.salary}</p>
        <p className="text-lg">Description: {job.description}</p>
      </div>
    </div>
  );
};

export default JobDetails;
