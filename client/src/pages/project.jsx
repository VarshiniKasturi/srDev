import { Link, useParams } from 'react-router-dom';
import DeleteProjectButton from '../components/DeleteProjectButton';
import EditProjectForm from '../components/EditProjectForm';
import { useQuery , gql} from '@apollo/client';
import React from 'react';
import { graphql } from 'graphql';
// import { GET_PROJECT } from '../queries/projectQueries';
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

export default function Project() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, { variables: { id } });

  if (loading) return <p>Loading</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <div className='projects'>
          <Link to='/' className='btn '>
            Back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.description}</p>

          <h5 className='stat'>Project Status</h5>
          <p className='val'>{data.project.status}</p>
          <EditProjectForm project={data.project} />

          <DeleteProjectButton projectId={data.project.id} />
        </div>
      )}
    </>
  );
}