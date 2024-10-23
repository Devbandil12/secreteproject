import React, { useEffect, useState } from 'react';
import JobCard from './Cards'; // Import the JobCard component

const MarketPlace = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job data from the server (replace with your API endpoint)
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:5000/MarketPlace'); // Adjust API endpoint
        const data = await response.json();
        
        
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    fetchJobs();
  }, []);

  const handleApply = async(jobId) => {
    const response=await axios.post(`http://localhost:5000/api/add/${jobId}`)
    // Handle the apply action (e.g., make an API call)
    console.log(`Applying for job with ID: ${jobId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
    
      <h1 className="text-3xl font-bold text-center border border-black mb-8">Job Market Place</h1>
      <div className="flex flex-wrap justify-center">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} onApply={handleApply} />
        ))}
      </div>
    </div>
  );
};

export default MarketPlace;
