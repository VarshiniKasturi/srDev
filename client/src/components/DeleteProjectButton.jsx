import { useNavigate } from 'react-router-dom';
// import { FaTrash } from 'react-icons/fa';
import { DELETE_PROJECT } from '../mutations/projectMutations';
import { useMutation, gql } from '@apollo/client';
// import React from 'react';


const GET_PROJECTS = gql`
  query getProjects {
    projects {
      id
      name
      status
    }
  }
`;
export default function DeleteProjectButton({ projectId }) {
  const navigate = useNavigate();

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    variables: { id: projectId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const handleClick = () => {
    deleteProject(); // or you can pass specific options to this function if needed
  };

  return (
    <div className='delProjBtn'>
      <button className='btn' onClick={handleClick}>
        <div className='icon'> Delete Project </div>
      </button>
    </div>
  );
}