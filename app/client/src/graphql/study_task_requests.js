import gql from 'graphql-tag';

export const GET_ALL = gql`
  query GetStudyTasks {
    studyTasks {
      id
      startPoint
      endPoint
      dueDate
      studyPlan {
        id
        title
      }
      isComplete
    }
  }
`;

export const UPDATE = gql`
  mutation UpdateIsComplete($id: ID!, $isComplete: Boolean!) {
    updateStudyTask(id: $id, isComplete: $isComplete) {
      id
      isComplete
    }
  }
`;

const StudyTaskRequests = {
  GET_ALL,
  UPDATE
};

export default StudyTaskRequests;
