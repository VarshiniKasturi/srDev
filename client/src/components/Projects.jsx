import { gql,useQuery } from '@apollo/client';
import React from 'react';
import ProjectCard from './ProjectCard' ;

const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;
const GET_PROJECT = gql`
  query getProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      status
    }
  }
`;
export const Projects: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;
  return (
    <>
      {data.projects.length > 0 ? (
        <div className="projs">
          {data.projects.map((project: any) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>No Projects</p>
      )}
    </>
  );
};
