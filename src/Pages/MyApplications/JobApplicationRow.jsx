import React from 'react';


const JobApplicationRow = ({ application, index }) => {
  const {
    company,
    title,
    company_logo,
    linkedin,
    github,
    resume,

  } = application;
  console.log(application);


  return (
    <tr>
      <th>{index + 1}</th>

      {/* Company Info */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={company_logo}
                alt="Company Logo"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{company}</div>
            <div className="text-sm opacity-70">{title}</div>
          </div>
        </div>
      </td>

      {/* LinkedIn */}
      <td>
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </td>

      {/* GitHub */}
      <td>
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </td>

      {/* Resume */}
      <td>
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Resume
        </a>
      </td>
    </tr>
  );
};

export default JobApplicationRow;
