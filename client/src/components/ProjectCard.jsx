import React from 'react';

type project = {
  name: string;
  id: string;
  status: string;
}

 const ProjectCard:React.FC<project> = (project) => {
    return (
      <div className='col-md-6'>
        <div className='card mb-3'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='projectName'>{project.name}</h5>
              <a className='btn' href={`/project/${project.id}`}>
                View
              </a>
            </div>
            <p className='small'>
              Status: <strong>{project.status}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }

  export default ProjectCard