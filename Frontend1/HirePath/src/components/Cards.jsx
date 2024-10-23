import React from 'react';

const JobCard = ({ job, onApply }) => {
  return (
    <div className="max-w-sm bg-white text-zinc-950 shadow-lg rounded-lg overflow-hidden m-4 transition-transform transform hover:scale-105">
      <div className="p-6">
        <h2 className="text-2xl font-bold ">{job.title}</h2>
        <p className=" mt-2">{job.description}</p>
        
        <div className="mt-4">
          <div className="flex justify-between ">
            <span><strong>Experience:</strong> {job.experience} years</span>
            <span><strong>Salary:</strong> ${job.salary}/year</span>
          </div>
          <div className="flex justify-between mt-2">
            <span><strong>Last Date:</strong> {new Date(job.lastDate).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <button
          onClick={() => onApply(job._id)}
          className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-zinc-900 text-black transition duration-300"
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default JobCard;
